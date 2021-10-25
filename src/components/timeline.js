import React from 'react';
import './timeline.css';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.times = props.times;

    this.years = Object.keys(this.times).map(n => parseInt(n));

    let year = this.years[this.years.length - 1];
    this.state = { selectedYear: year, text: this.times[year] };
  }

  chooseYear({ target }) {
    let year = target.innerText;

    this.setState({ selectedYear: parseInt(year), text: this.times[year] })
  }

  render() {
    // the last year (being the latest in the timeline) subtracted by the first year (the oldest)
    let latest   = this.years[this.years.length - 1];
    let duration = latest - this.years[0];

    // lambda function that calculates the percentage from the top based on the year
    let distance = (year) => 100 - (latest - year) / duration * 100;

    return (
      <div className='timeline-wrapper'>
        <div className='timeline'>
          {
            this.years.map(year =>
              <p className={ `timeline__year ${year === this.state.selectedYear ? 'selected' : ''}` } 
                  description={ this.times[year] } 
                  style={ { top: `${ distance(year) }%` } }
                  onClick={evt => this.chooseYear(evt)}>
                    { year }
              </p>)
          }

        </div>

        <p class='timeline__text' style={ { top: `${ distance(this.state.selectedYear) }%` } }>{ this.state.text }</p>
      </div>
    );
  }
}
