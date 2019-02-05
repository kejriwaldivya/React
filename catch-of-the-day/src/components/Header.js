import React, {Component} from 'react';

const  Header = (props) => 
{
   
        return(
            <header className="top">
            <h2>
            Catch-
            <span className="ofthe">
            <span className="of">of-</span>
            <span className="the">The</span>
            </span>
            -Day
            </h2>
            <h3 className="tagline">{props.tagline}</h3>
            </header>
        )
        
    

}

export default Header;