import React , {Component} from 'react';
import Order from './Order';
import Inventory from './Inventory';
import Header from './Header';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';




class App extends Component{

   state = {
        fishes:[],
        order:[]
    }


    loadSamples = () =>{
       this.setState({fishes:SampleFishes});
    };

    addFish = (fish) =>{
       const fishes = {...this.state.fishes};
       const timeStamp = Date.now();
       fishes[`fish-${timeStamp}`] = fish;
       this.setState({fishes});
    }

    updateFish = (key, fish) =>{
        const fishes = {...this.state.fishes};
        fishes[key] = fish;
        this.setState({fishes});
     }

     removeFish = (key) =>
     {
         const fishes = {...this.state.fishes};
         delete fishes[key]; 
         this.setState({fishes});

     }

     addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
     }

     removeOrder = (key) =>
     {
         const order = {...this.state.order};
         delete order[key]; 
         this.setState({order});

     }

     componentWIllMount()
     {
         this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
                                 {
             context:this,
             state:'fishes'
         });
          
     }
     
     componentWillUnmount(){
         base.removeBinding(this.ref);
         
     }

render()
{
    
    return(
        <div className="catch-of-the-day">
        <div className="menu">
        <Header tagline="Fresh Sea Food"/>
        <ul className="list-of-fishes">
         {Object
         .keys(this.state.fishes)
         .map(keys => <Fish key ={keys} index={keys} details={this.state.fishes[keys]} addToOrder={this.addToOrder} />)}

        </ul>
        </div>
        <Order
        fishes={this.state.fishes}
        order={this.state.order}
        removeOrder={this.removeOrder}
        />
        <Inventory 
        loadSamples={this.loadSamples} 
        addFish={this.addFish} 
        fishes={this.state.fishes} 
        updateFish={this.updateFish}
        removeFish={this.removeFish}
        />  
                
        </div>
    )

}
}

export default App;

