import React from 'react';

class Gif extends React.Component {

    copyText(txt){
        const el = document.createElement('textarea');
        el.value = txt
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render(){
        return(
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <div className="m-1  rounded overflow-hidden shadow-lg">
                    <video className="w-full" src={this.props.url} alt={this.props.title} autoPlay loop></video>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{this.props.title}</div>
                        <div className="flex">
                            <a href={this.props.gif.url} className="text-center w-3/4 bg-black text-white p-2 no-underline">Giphy link</a> 
                            <button onClick={this.copyText.bind(this,this.props.gif.url)} className="fa bg-blue-700 text-white text-center fa-files-o fa-1 p-2 w-1/4 text-2xl border-0 cursor-pointer" aria-hidden="true"></button>
                        </div>
                        <div className="flex mt-2">
                            <a href={this.props.gif.embed_url} className="text-center w-3/4 bg-black text-white p-2 no-underline">Embed link</a> 
                            <button onClick={this.copyText.bind(this,this.props.gif.embed_url)} className="fa bg-green-700 text-white text-center fa-files-o fa-1 p-2 w-1/4 text-2xl border-0 cursor-pointer" aria-hidden="true"></button>
                        </div>
                        <div className="flex mt-2">
                            <a href={this.props.gif.images.looping.mp4} className="text-center w-3/4 bg-black text-white p-2 no-underline">Gif mp4 link</a> 
                            <button onClick={this.copyText.bind(this,this.props.gif.images.looping.mp4)} className="fa bg-red-700 text-white text-center fa-files-o fa-1 p-2 w-1/4 text-2xl border-0 cursor-pointer" aria-hidden="true"></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default Gif;