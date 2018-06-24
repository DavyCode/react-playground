import React, { Component } from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate  } from '../actions/filters'



class ExpenseListFilter extends Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} 
          onChange={(e) => {
            this.props.setTextFilter(e.target.value)
          }
        }
        />
        <select name="{this.props.filters.sortBy}" 
          onChange={(e) => {
            e.target.value === 'amount' ? this.props.sortByAmount()
            : this.props.sortByDate()
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

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)