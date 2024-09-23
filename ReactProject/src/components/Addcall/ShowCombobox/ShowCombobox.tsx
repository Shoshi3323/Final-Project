import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteChangeReason } from '@material-ui/lab/Autocomplete'
import { withWidth, Button } from '@material-ui/core';
import { IOption } from '../../Interfaces';
import './ShowControllers.css';

export interface IComboboxProps {
  //מערך המכיל את כל הנקודות בגרף
  types: Array<IOption>,
  times: Array<IOption>,
  ages: Array<IOption>,
  dates: Array<IOption>,
  neighborhoods: Array<IOption>,
  streets: Array<IOption>,
  //מצביע לפונקציה בקומפוננטת האבא
  onClickChange: (result: Array<IOption>) => void
}

export default class ShowCombobox extends React.Component<IComboboxProps> {
 
  results : Array<IOption>= new Array<IOption>();
 
  constructor(props: IComboboxProps) {
    super(props);
  }

  onChange( event: React.ChangeEvent<{}>,value: any, type: string) {

    if (type == 'types') {
       this.results[0] = value;
    }
    if (type == 'times') {
        this.results[1] = value;
    }
    if (type == 'ages') {
      this.results[2] = value;
    }
    if (type == 'dates') {
    this.results[3] = value;
    }
    if (type == 'neighborhoods') {
    this.results[4] = value;
    }
    if (type == 'streets') {
    this.results[5] = value;
    }
   }


    addNewCall(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      if (this.results.length == 6) {
        //onClickChange שליחת הנקודות שהמשתמש בחר, לפונקציה המוצבעת ע"י 
        this.props.onClickChange(this.results);
      }
    }
   

   render() {
    return (
    <div>
      <div className="comboboxes">
        {/*להכנסת נקודת היעד combobox פקד  */}
        <Autocomplete
          id="types"
          options={this.props.types}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="בחר סוג קריאה" variant="outlined" />}
          onChange={(event, value) => this.onChange(event, value, 'types')}
        />
     </div>
     <br></br>
     <div className="comboboxes">
        {/*להכנסת נקודת היעד combobox פקד  */}
        <Autocomplete
          id="times"
          options={this.props.times}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="בחר זמן הקריאה" variant="outlined" />}
          onChange={(event, value) => this.onChange(event, value, 'times')}
        />
        
     </div>
     <br></br>
     <div className="comboboxes">
        {/*להכנסת נקודת היעד combobox פקד  */}
        <Autocomplete
          id="ages"
          options={this.props.ages}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="בחר גיל קריאה" variant="outlined" />}
          onChange={(event, value) => this.onChange(event, value, 'ages')}
        />
     </div>
     <br></br>
     <div className="comboboxes">
        {/*להכנסת נקודת היעד combobox פקד  */}
        <Autocomplete
          id="dates"
          options={this.props.dates}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="בחר תאריך הקריאה" variant="outlined" />}
          onChange={(event, value) => this.onChange(event, value, 'dates')}
        />
     </div>
     <br></br>
     <div className="comboboxes">
        {/*להכנסת נקודת היעד combobox פקד  */}
        <Autocomplete
          id="neighborhoods"
          options={this.props.neighborhoods}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label=" בחר שכונה" variant="outlined" />}
          onChange={(event, value) => this.onChange(event, value, 'neighborhoods')}
        />
     </div>
     <br></br>
     <div className="comboboxes">
        {/*להכנסת נקודת היעד combobox פקד  */}
        <Autocomplete
          id="streets"
          options={this.props.streets}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="בחר רחוב" variant="outlined" />}
          onChange={(event, value) => this.onChange(event, value, 'streets')}
        />
     </div>
        <div className="button">
          <Button  variant="contained" color="primary" onClick={(event:any)=>this.addNewCall(event)}>הוסף קריאה</Button>
        </div>
    </div>);
  }
}