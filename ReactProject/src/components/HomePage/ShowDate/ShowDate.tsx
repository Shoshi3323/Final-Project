import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
//import  React from 'date-fns/formatDistanceToNow';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import { MaterialUiPickersDate } from '@material-ui/pickers/np/date';
import './ShowDate.css';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export interface IDateProps {
    selectDate: (date: string | null | undefined) => void;
}


export default class ShowDate extends React.Component<IDateProps> {

    constructor(props: IDateProps) {
        super(props);
    }

    state={
        selectedDate: new Date().toDateString(),
    };
    
    handleDateChange(event: MaterialUiPickersDate, value: string | null | undefined){
        // debugger;
        let date = value;
        this.setState({selectedDate:date})
        this.props.selectDate(date)
      
    }  

    render(){
        return (
            <div className="date-picker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={this.state.selectedDate}
                    onChange={(event,value)=>this.handleDateChange(event,value)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
            </div>);
    
        }
}