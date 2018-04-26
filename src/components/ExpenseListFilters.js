import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused:null,

    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
            <input type="text" onChange={(event) => {
                this.props.dispatch(setTextFilter(event.target.value))
            }}/>
            <select value={this.props.filters.sortBy} onChange={(event) => {
               if(event.target.value === 'date'){
                   this.props.dispatch(sortByDate());
               }else{
                   this.props.dispatch(sortByAmount());
               }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            startDate = {this.props.filters.startDate}
            startDateId = "StartDate"
            endDate = {this.props.filters.endDate}
            endDateId = "endDate"
            onDatesChange = {this.onDatesChange}
            focusedInput = {this.state.calendarFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = {() => false}
            showClearDates = {true}
            />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
return {
filters: state.filters
};
};

export default connect(mapStateToProps)(ExpenseListFilters);