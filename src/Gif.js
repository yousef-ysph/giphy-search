import React from 'react';

class Gif extends React.Component {

    render(){
        return(
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <div className="m-1  rounded overflow-hidden shadow-lg">
                    <video className="w-full" src={this.props.url} alt={this.props.title} autoPlay loop></video>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{this.props.title}</div>
                        
                    </div>
                </div>
            </div>
        );
    }

}



export default Gif;