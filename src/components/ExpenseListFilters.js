import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {

  state = {
    calendarFosused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFosused) => {
    this.setState(()=> ({ calendarFosused }))
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} //vrednost filtera iz obj connected funkcije
          onChange={(e) => { // fukcija koja se okida onChange - (e) event je obavezan kao argument
            //props.dispatch je dostupan automatski 
            this.props.dispatch(setTextFilter(e.target.value))
          }} 
        />
        <select 
          value={this.props.filters.sortBy}
          onChange={(e) => {
            // console.log(e.target.value)
            if(e.target.value === 'amount') {
              this.props.dispatch(sortByAmount())
            } else if (e.target.value === 'date') {
              this.props.dispatch(sortByDate())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} 
          endDate={this.props.filters.endDate} 
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFosused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStoreToProps)(ExpenseListFilters)