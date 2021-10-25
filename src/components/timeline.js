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
    return (
      <div className='timeline-wrapper'>
        <div className='timeline'>
          {
            this.years.reverse().map(year =>
              <p className={ `timeline__year ${year === this.state.selectedYear ? 'selected' : ''}` } 
                  description={ this.times[year] } 
                  onClick={evt => this.chooseYear(evt)}>
                    { year }
              </p>)
          }
        </div>

        <div className='timeline__text-wrapper'>
          <p className='timeline__text' style={ { top: `${ this.years.indexOf(this.state.selectedYear) / this.years.length * 100 }%` } }>{ this.state.text }</p>
        </div>
      </div>
    );
  }
}
