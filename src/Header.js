import React from 'react';

function Header(){

    let githubLink = 'https://github.com/yousef-aldawoud/'

    return (
        <div>
            <header className="fixed bg-gray-800 text-white w-full mb-5">
                <nav className="clearfix p-2">
                    <div className="float-left"><h1 style={{fontFamily:'Roboto Mono'}}>Giphy search</h1></div>
                    <div className="float-right h-full">
                        <a href={githubLink} target='_blank' className="h-full no-underline p-2 m-2 text-xl text-white hover:bg-gray-700">Github</a>
                    </div>
                </nav>
            </header>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
      );
}

export default Header;