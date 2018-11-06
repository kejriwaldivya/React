import React, { Component } from 'react';
import Header from './components/header';
import Track from './components/capitalProject';

import ScheduleTaskRisk from './components/scheduleTaskRisk';
import ProjectSchedule from './components/projectSchedule';
import './index.css';



class App extends Component {
 
  render() {
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
          <Track total="55.14" cpviz="100" completed="59" inprogress="30" active="100" draft="47"/> 
          <ProjectSchedule total="66.6" psviz="100" completed="59" Total1="30" incomplete="100"/>
          <ScheduleTaskRisk total="66.66" totaltask="3000" ontrack="100" red="30"/>
           </div>
         
      </div>
    );
  }
}


export default App;