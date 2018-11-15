import React, { Component } from 'react';
import Header from './components/header';
import Track from './components/capitalProject';

import ScheduleTaskRisk from './components/scheduleTaskRisk';
import ProjectSchedule from './components/projectSchedule';
import './index.css';
import axios from 'axios';





class App extends Component {

  state ={
    post:[]
  }


  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      const posts= res.data.slice(0,4);
      const updatedPosts = posts.map(post =>{
        return{
          ...post,
          total:23,
         
        }
      });
      this.setState({post: updatedPosts});
      console.log(res);
    });
    }

    
  render() {
   //const array = [];

    const posts = this.state.post.map(post => {
    //console.log(post);
    //array.push(post);
    return <Track  key ={post.id} title = {post.title}  total={post.total} psviz="100" completed="59" Total1="30" incomplete="100"/>
  
    })
/*
    console.log(array);
    Array.prototype.sum = function (prop) {
      var total = 0
      for ( var i = 0, _len = this.length; i < _len; i++ ) {
          total += this[i][prop]
      }
      return total
  }
  console.log(array);
  console.log(array.sum("total"))*/

 

    return (
      <div className="construction-management">
       <div className ="menu">
       <Header/>
       </div>
       <div class="container-fluid">
       <div class=" row p-2">
        <div class="col-xl-10">
            <h2>Business Summary </h2>
        </div>
		
		<div class="col-xl-2">
            <select class="custom-select" id="inputGroupSelect01">
				<option selected>Week to Date </option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			  </select>
        </div>
		
        </div>
       </div>
       		<div class="row">
           {posts}
          {/* <Track total =  {array.sum("total")}/>*/}
          <ProjectSchedule total="66.6" psviz="100" completed="59" Total1="30" incomplete="100"/>
          <ScheduleTaskRisk total="66.66" totaltask="3000" ontrack="100" red="30"/>
           </div>
         
      </div>
    );
  }
}


export default App;