import React,{Component} from 'react';
import  { IOption }  from '../Interfaces';
import ShowCombobox from './ShowCombobox/ShowCombobox';
import './Addcall.css';
import { Fab, Link } from '@material-ui/core';

export default class AddCall extends React.Component{

    results: Array<IOption | null> = new Array<IOption | null>();
    //רשימה המכילה את הסוגי קריאות 
    typesList: Array<IOption> = new Array<IOption>();
   //רשימה המכילה את סוגי הזמנים 
    timesList: Array<IOption> = new Array<IOption>();
    //רשימה המכילה את הסוגי הגילאים 
    agesList: Array<IOption> = new Array<IOption>();
   //רשימה המכילה את סוגי התאריכים
    datesList: Array<IOption> = new Array<IOption>();
    //רשימה המכילה את השכונות
    neighborhoodsList: Array<IOption> = new Array<IOption>();
    //רשימה המכילה את הרחובות
    streetsList: Array<IOption> = new Array<IOption>();
    query:string="";
   
    state={
        //מערך שמכיל את תוצאות הסינון לפי האותיות השקיש המשתמש
        result:new Array<IOption>(),
        resultTime:new Array<IOption>(),
        resultAge:new Array<IOption>(),
        resultDate:new Array<IOption>(),
        resultNeighborhoods:new Array<IOption>(),
        resultStreets:new Array<IOption>(),

        str:"",
    };

    async componentDidMount(){
      //database מלוי לפי הנתונים מה
       let typesData = await this.getAllTypes();
       this.typesList = typesData;
           //this.setState({result:typesData});
       let  timesData = await this.getAllTimes();
       this. timesList = timesData;
      
       let agesData = await this.getAllAges();
       this.agesList = agesData;
      
       let  datesData = await this.getAllDays();
       this.datesList =datesData;

       let  neighborhoodsData = await this.getAllNeighborhoods();
       this. neighborhoodsList =neighborhoodsData;

        let  streetsData = await this.getAllStreets();
        this. streetsList =streetsData;

       this.setState({resultTime:timesData,
        result:typesData,
        resultDate:datesData,
        resultAge:agesData,
        resultNeighborhoods:neighborhoodsData, 
        resultStreets:streetsData});
     // this.setState({result:agesData});
    //   let  datesData = await this.getAllDates();
    //   this. datesList =datesData;
    //  this.setState({result: datesData});
    //   let  neighborhoodsData = await this.getAllNeighborhoods();
    //   this. neighborhoodsList =neighborhoodsData;
     // this.setState({result: neighborhoodsData});
    //   let  streetsData = await this.getAllStreets();
    //   this. streetsList =streetsData;
     // this.setState({result: streetsData});
    }

    // //פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    // //GET פונקציית
    // //databaseהמחזירה את כל הסוגי הקריאות מה 
    // async getAllCalls(){
    //     let array : Array<IOption> = new Array<IOption>();
    //     await fetch("http://localhost:62466/api/Calls/getAll")
    //           .then(res=>res.json())
    //           .then(data=>{
    //               data.map((item:any)=>
    //                   array.push({id:item.id,name:item.name}))
    //             }).catch();
    //     return array;
    // }
    
    

    //פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    //GET פונקציית
    //databaseהמחזירה את כל הסוגי הקריאות מה 
    async getAllTypes(){
        let array : Array<IOption> = new Array<IOption>();
        await fetch("http://localhost:62466/api/Calls/getAllTypes")
              .then(res=>res.json())
              .then(data=>{
                 // debugger;
                  data.map((item:any)=>
                      array.push({id:item.typeCallId,name:item.name}))
                }).catch();
        return array;
    }

    //פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    //GET פונקציית
    //databaseהמחזירה את כל זמני הקריאות מה 
    async getAllTimes(){
        let array : Array<IOption> = new Array<IOption>();
        await fetch("http://localhost:62466/api/Calls/getAllTimes")
              .then(res=>res.json())
              .then(data=>{
              //  debugger;
                  data.map((item:any)=>
                      array.push({id:item.timeDayId,name:item.descriptionTime}))
                }).catch();
        return array;
    }


     //פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    //GET פונקציית
    //databaseהמחזירה את כל גילאי הקריאות מה 
    async getAllAges(){
      
        let array : Array<IOption> = new Array<IOption>();
        await fetch("http://localhost:62466/api/Calls/getAllAges")
              .then(res=>res.json())
              .then(data=>{
                 // debugger;
                  data.map((item:any)=>
                      array.push({id:item.ageId,name:item.descriptionOfAge}))
                }).catch();
        return array;
    }

 

 //פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    //GET פונקציית
    //databaseהמחזירה את כל סוגי יום הקריאות מה 
    async getAllDays(){
        let array : Array<IOption> = new Array<IOption>();
        await fetch("http://localhost:62466/api/Calls/getAllDays")
              .then(res=>res.json())
              .then(data=>{
                  data.map((item:any)=>
                      array.push({id:item.dayId,name:item.typeOfDay}))
                }).catch();
        return array;
    }

//פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    //GET פונקציית
    //databaseהמחזירה את כל שכונות הקריאות מה 
    async getAllNeighborhoods(){
        let array : Array<IOption> = new Array<IOption>();
        await fetch("http://localhost:62466/api/Calls/getAllNeighborhoods")
              .then(res=>res.json())
              .then(data=>{
                  data.map((item:any)=>
                      array.push({id:item.neighborhoodsId,name:item.neighborhoodName}))
                }).catch();
        return array;
    }

//פונקציות קבלת/שליחת נתונים מהשרת/לשרת
    //GET פונקציית
    //databaseהמחזירה את כל הרחובות מה 
    async getAllStreets(){
        let array : Array<IOption> = new Array<IOption>();
        await fetch("http://localhost:62466/api/Calls/getAllStreets")
              .then(res=>res.json())
              .then(data=>{
                  data.map((item:any)=>
                      array.push({id:item.streetOfCallId,name:item.streetName}))
                }).catch();
        return array;
    }

    onChange = async (result: Array<IOption | null>) => {
        debugger;
        this.results = result;
        let strg = await this.addNewCall();
        debugger;
        alert(this.setState({str:strg}));    }

    //getPointByQuery עדכון המחרוזת לחיפוש והפעלת הפונקציה
    onSearchChange = (query:string) => {
        this.query = query;//עדכון לפי המחרוזת שהתקבלה
    }

        async addNewCall(){

            let str: string="";
            debugger;
            await fetch("http://localhost:62466/api/Calls/addNCall/" + this.results[0]?.id + "/" + this.results[1]?.id + "/" + this.results[2]?.id+ "/" + this.results[3]?.id + "/" + this.results[4]?.id+ "/" + this.results[5]?.id  )
                .then(res => res.json())
                .then(data => {
                    str=data
                }).catch();
            return str;
        }
    

        // let data={
        //     type : this.results[0]?.id,
        //     time :this.results[1]?.id,
        //     age :this.results[2]?.id ,
        //     day : this.results[3]?.id,
        //     neighborhoods :this.results[4]?.id,
        //     streets:this.results[5]?.id 
        // }
        
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        // };
        // await fetch("http://localhost:62466/api/Calls/addNCall",requestOptions).then(response=>console.log(response.statusText)).catch();
   
        render(){
            return(
            <div className="image1">
                <br></br>
                <div className="Show">
                  <ShowCombobox types={this.state.result} times={this.state.resultTime} ages={this.state.resultAge}  dates={this.state.resultDate} neighborhoods={this.state.resultNeighborhoods}  streets={this.state.resultStreets}  onClickChange={this.onChange}  ></ShowCombobox>
                </div>
            
            </div>)
        }
   
   
   
    }



 

