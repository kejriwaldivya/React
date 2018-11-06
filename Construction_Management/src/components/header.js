import React, {Component} from 'react';
import '../index.css';



const Header = (props) => {
    
        return (
            <div class="card">
            <div class=" row p-4 pb-5">
            <div class="col-xl-10">
                <h2>Construction Managment</h2>
            </div>
            <div class="col-xl-2">
               <div class="row">
               <div class="col-xl-3"><i class="fas fa-envelope"></i></div>
               <div class="col-xl-3"><i class="fas fa-share-alt-square"></i></div>
               <div class="col-xl-3"><i class="fas fa-share-square"></i></div>
               <div class="col-xl-3"><i class="fas fa-user"></i></div>
               </div>
            </div>
            </div>
            </div>
        )
    
}

//Header.propTypes ={
//    tagline: React.PropTypes.string
//}

export default Header;