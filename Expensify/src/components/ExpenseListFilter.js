import React, { Component } from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate  } from '../actions/filters'



class ExpenseListFilter extends Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} 
          onChange={(e) => {
            dispatch(setTextFilter(e.target.value))
          }
        }
        />
        <select name="{this.props.filters.sortBy}" 
          onChange={(e) => {
            e.target.value === 'amount' ? this.props.dispatch(sortByAmount())
            : this.props.dispatch(sortByDate())
          }
        }>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={calenderFocused => this.setState({ calenderFocused })} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />


      </div>
    )
  }
}




const mapStateToProps  = (state) => (
  { 
    filters : state.filters
  }
);

export default connect(mapStateToProps)(ExpenseListFilter)