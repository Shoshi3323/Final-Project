import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import React,{Component} from 'react';
import './HomePage.css';
import ShowDate from './ShowDate/ShowDate';
import { th } from 'date-fns/locale';
import {IStation} from '../Interfaces';

export default class AddCall extends React.Component{
  curdate:string | null | undefined="";

  state={
    date:" ",
    station: new Array<IStation>(),
  };
 

  changeDate=(date1:string | null | undefined)=>{
    //let nowDate = new Date().setDate(parseInt(date1));
    //let currDate = new Date().toDateString();
    // if(date1 < currDate){
    // alert("התאריך שנבחר עבר")
    // }else{
    // this.setState({date:date1});
    // }
    this.curdate = date1;  
  }
   mainFunc= async ()=>{
    if(this.curdate!=" ")
    {
      let s = await this.GetStations();
      this.setState({station:s});
    }
      
      
  }

//   async sendDate(){

//     debugger;
//     let data=this.curdate;
    
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     };
//     await fetch("http://localhost:62466/api/Calls/date",requestOptions).then(response=>console.log(response.statusText)).catch();
// }

async GetStations(){
  let stat: Array<IStation> = new Array<IStation>();
  let date=[" "," "," "];
  if(this.curdate!=null){
    date = this.curdate?.split('/');
  } 
  let d = date[0]+","+date[1]+","+date[2]
  await fetch("http://localhost:62466/api/Calls/date/"+d)
      .then(res => res.json())
      .then(data => {
        data.map((item: any) =>
            stat.push({id:item.stationsId, name: item.nameStation, numAmbulance:item.numAmbulance}))
    }).catch();
  return stat;
}

  render(){
    debugger;
        return(
        <div className="image">
             <br></br><br></br><br></br><br></br>
              <ShowDate selectDate={this.changeDate}></ShowDate>
               <div className="routing-image">
                 <div className="routing-buttons">
                 <br></br>
                    
                    <Fab className="fab" variant="extended" onClick={this.mainFunc}>
                       בצע חיזוי אמבולנסים
                    </Fab>
                    <br></br>
                    <br></br>
                    
                    <Fab className="fab" variant="extended">
                      <Link className="link" to="/New-call">הוסף קריאה חדשה</Link>
                    </Fab>  
                    
                 </div>
              </div>
              <div className="show-ambulance">
                {this.state.station.map(s=><><span>{s.name}: מספר אמבולנסים {s.numAmbulance}</span><br></br></>)}
              </div>‏
        </div>);
    }
}