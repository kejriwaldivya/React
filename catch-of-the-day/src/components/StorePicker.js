import React, {Component} from 'react';

class StorePicker extends Component
{

    getStore =(event) => {
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log(storeId);   
    }


    render()
    {
        return(
        <form className="store-selector" onSubmit={(e)=>this.getStore(e)}>
        <h2>Enter The Name Of The Store</h2>
        <input type="text" placeholder="Store Name" ref ={(input) => {this.storeInput=input}}></input>
        <button type="submit">View Store -></button>
        </form>
        )

    }
}



export default StorePicker;

