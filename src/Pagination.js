import React from 'react';

class Pagination extends React.Component{

    state = {
        pageNumber:0,
    }

    renderButtons = ()=>{
        let buttons = []
        for (let i = 0 ; i<this.props.pagination.total_count/this.props.pagination.count ; i++){
            buttons.push(<button key={i} onClick={this.changeNumber.bind(this,i)}>{i+1}</button>);
        }
        if(buttons.length>20){
            return buttons.slice(this.state.pageNumber,this.state.pageNumber+5)
        }
        return buttons;
    }

    changeNumber = (number)=>{
        console.log(number)
        this.props.changePage(number);
    }

    render(){
        return(
            <div>
                <button onClick={this.less}>&laquo;</button>
                {this.renderButtons()}
                <button onClick={this.more}>&raquo;</button>
            </div>
        )
    }
}

export default Pagination;