import s from './Feedback.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class Feedback extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleBtn = event => {
    const name = event.target.name;
    const { onChange } = this.props;
    onChange(name);
  };

  render() {
    const { good, neutral, bad, total, positive } = this.props;
    return (
      <div className={s.Feedback}>
        <b>Please leave feedback</b>
        <div className={s.buttonWrapper}>
          <button name="good" type="button" onClick={this.handleBtn}>
            Good
          </button>
          <button name="neutral" type="button" onClick={this.handleBtn}>
            Neutral
          </button>
          <button name="bad" type="button" onClick={this.handleBtn}>
            Bad
          </button>
        </div>
        <h1>Statistics</h1>

        <span className={s.Counter__value}>Good:{good}</span>
        <span className={s.Counter__value}>Neutral:{neutral}</span>
        <span className={s.Counter__value}>Bad:{bad}</span>
        <span className={s.Counter__value}>Total:{total}</span>
        <span className={s.Counter__value}>
          Positive feedback:{Math.round(positive)}%
        </span>
      </div>
    );
  }
}
