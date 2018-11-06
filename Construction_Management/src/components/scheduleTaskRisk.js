import React, {Component} from 'react';
import '../index.css';

class scheduleTaskRisk extends Component{
    render(){
        return (
            <div class="col-xl-4">
            <div class="card m-4">
            <div class="row pl-3 pt-3 pb-1" >
            <div class="col-xl-10"><h4>Schedule Task Risk</h4>
            </div>
            <div class="col-xl-2"><span>&#8942;</span></div>
            </div>
            <div class="row">
            <div class="col-xl-6">
                <div class="row p-3">
                <div class="col-xl-12">Total</div>
                <div class="col-xl-12 percentage"> {this.props.total}%</div>
                </div>
            
            </div>
            
            <div class="col-xl-6">
                <div class="row p-3">
                <div class="col-xl-12"><h6>Total Task</h6></div>
                <div class="col-xl-12 percentage"> {this.props.totaltask}%</div>
                </div>
            
            </div>
            
            
            
            </div>
            <div class="pl-2 pr-2"><hr/></div>
            
            <div class="row">
            <div class="col-xl-12">
                <div class="row pl-3 pb-2">
                <div class="col-xl-6">On Track {this.props.ontrack}</div>
                </div>
            
            </div>
        
            </div>
            
            <div class="row">
            <div class="col-xl-12">
                <div class="row pl-3 pb-2">
                <div class="col-xl-6">Red {this.props.red}</div>
                </div>
            
            </div>
        
            </div>
            
            
            
            
            </div> </div>
               
               
        )
    }
}

export default scheduleTaskRisk;
