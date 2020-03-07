import React from 'react';
import Gif from './Gif';
const axios = require('axios');

class Search extends React.Component {

    apiKey = '';

    state = {
        GIFs:[],
        searchQuery:'great',
        page:0,
    }

    handleSearchQueryChange = (e)=>{
        this.setState({searchQuery:e.target.value})
    }

    getUrl(){
        let url='https://api.giphy.com/v1/gifs/search?api_key='+this.apiKey+'&q='+this.state.searchQuery+
        '&limit=25&offset='+this.state.page+'&rating=R&lang=en';
        console.log(url)
        return url;
    }
    
    getGIFs = ()=>{

        axios.get(this.getUrl()).then((response)=>{
            console.log(response);
            this.setState({GIFs:response.data.data});
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
         return  <Gif url={gif.images.looping.mp4} title={gif.title} key={gif.id} />
        })
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
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
                <button className='w-1/4 border-0 bg-black p-3 text-white'  onClick={this.getGIFs}>Search</button>
            </div>
            <br/>
            <div className="flex flex-wrap">
                {this.renderPictures()}
            </div>
        </div>
      );
    }
  }
  
export default Search;