import React from 'react';

class Pagination extends React.Component{

    state = {
        pageNumber:0,
    }

    renderButtons = ()=>{
        let buttons = []
        for (let i = 0 ; i<this.props.pagination.total_count/this.props.pagination.count ; i++){
            if(this.state.pageNumber === i){
                buttons.push(<button className='active' key={i} onClick={this.changeNumber.bind(this,i)}>{i+1}</button>);
                continue;
            }
            buttons.push(<button key={i} onClick={this.changeNumber.bind(this,i)}>{i+1}</button>);
        }
        if(buttons.length>20){
            return buttons.slice(this.state.pageNumber,this.state.pageNumber+5)
        }
        return buttons;
    }

    changeNumber = (number)=>{
        console.log(number)
        this.setState({pageNumber:number})
        this.props.changePage(number);
    }

    less = ()=>{
        if(this.state.pageNumber>0){
            console.log("less")
            this.changeNumber(this.state.pageNumber-1)
        }
    }
    
    more = ()=>{
        if(this.state.pageNumber<this.props.pagination.total_count/this.props.pagination.count){
            console.log("more")
            this.changeNumber(this.state.pageNumber+1)
        }
    }

    componentDidUpdate(prevProps,prevState) {
        // Typical usage (don't forget to compare props):
        if (this.props.pagination.offset===0 && prevProps.pagination.offset !== this.props.pagination.offset) {
            this.setState({pageNumber:0})
        }
    }

    render(){
        return(
            <div className="pagination">
                <button onClick={this.less}>&laquo;</button>
                {this.renderButtons()}
                <button onClick={this.more}>&raquo;</button>
            </div>
        )
    }
}

export default Pagination;