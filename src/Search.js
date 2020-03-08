import React from 'react';
import Gif from './Gif';
import Pagination from './Pagination';
const axios = require('axios');

class Search extends React.Component {

    apiKey = '';

    state = {
        pagination:{
            offset:0,
            total_count:0,
            count:20
        },
        GIFs:[],
        searchQuery:'great',
        page:0,
    }

    handleSearchQueryChange = (e)=>{
        this.setState({searchQuery:e.target.value})
    }

    getUrl(){
        let url='https://api.giphy.com/v1/gifs/search?api_key='+this.apiKey+'&q='+this.state.searchQuery+
        '&limit='+this.state.pagination.count+'&offset='+this.state.pagination.offset+'&rating=g&lang=en';
        console.log(url);
        return url;
    }
    
    changePage = (page)=>{
        let pagination = {...this.state.pagination,offset:page*this.state.pagination.count}
        this.setState({pagination:pagination});
    }
    
    componentDidUpdate(prevProps,prevState) {
        // Typical usage (don't forget to compare props):
        if (this.state.pagination.offset !== prevState.pagination.offset) {
          this.getGIFs()
        }
    }

    search= ()=>{
        console.log("searching")
        let pagination = {...this.state.pagination,offset:0}
        this.setState({pagination:pagination});
        this.getGIFs()
    }

    getGIFs = ()=>{

        axios.get(this.getUrl()).then((response)=>{
            this.setState({GIFs:response.data.data});
            this.setState({pagination:response.data.pagination})
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    renderPictures(){
        return this.state.GIFs.map((gif)=>{
         return  <Gif gif={gif} url={gif.images.looping.mp4} title={gif.title} key={gif.id} />
        })
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.search()
        }
    }

    componentDidMount(){
        this.getGIFs()
    }

    render(){
      return (
        <div>
            <div className="w-full flex">
                <input onKeyPress={this.handleKeyPress} className='w-3/4 border-1 bg-white p-3' placeholder="Search for gifs" value={this.searchQuery} onChange={this.handleSearchQueryChange}/>
                <button className='w-1/4 border-0 bg-black p-3 text-white'  onClick={this.search}>Search</button>
            </div>
            <br/>
            <div >{this.state.pagination.count} out of {this.state.pagination.total_count} search results</div>
            <br/>
            <div className="flex flex-wrap">
                {this.renderPictures()}
            </div>
            <Pagination pagination={this.state.pagination} changePage={this.changePage} />
        </div>
      );
    }
  }
  
export default Search;