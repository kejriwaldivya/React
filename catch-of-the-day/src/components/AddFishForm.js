import React, {Component} from 'react';

class AddFishForm extends Component
{
    createFish = (e) =>
    {
        e.preventDefault();
        console.log('created Fish');
        const fishes ={
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            img: this.img.value
        }
this.props.addFish(fishes);
this.FishForm.reset();

    }

    render()
    {
        return(
          <form className="fish-edit" ref ={(input) => this.FishForm= input} onSubmit={(e) => this.createFish(e)}>
          <input type="text" placeholder="Fish Name" ref={(input) => this.name = input} />
          <input type="text" placeholder="Fish Price" ref={(input) => this.price = input} />
          <select ref={(input) => this.status = input}>
              <option value="available">Fresh!</option>
              <option value="unavailable">SoldOut!</option>
          </select> 
          <textarea type="text" placeholder="Fish Desc" ref={(input) => this.desc = input}>
          </textarea>
          <input type="text" placeholder="Fish Image" ref={(input) => this.img = input} />
          <button type="submit">+Add Fish</button>
          </form>
        )
        
    }

}

export default AddFishForm;