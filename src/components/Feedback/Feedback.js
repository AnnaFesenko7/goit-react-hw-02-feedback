import s from './Feedback.module.css';
import React from 'react';
// import PropTypes from 'prop-types';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handleGood = event => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.countTotalFeedback
    );
  };
  handleNeutral = event => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      this.countTotalFeedback
    );
  };
  handleBad = event => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      this.countTotalFeedback
    );
  };
  countTotalFeedback = () => {
    this.setState(
      prevState => ({
        total: prevState.total + 1,
      }),
      this.countPositiveFeedbackPercentage
    );
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positive: (prevState.good / prevState.total) * 100,
    }));
  };
  render() {
    return (
      <div className={s.Feedback}>
        <b>Please leave feedback</b>
        <div className={s.buttonWrapper}>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <h1>Statistics</h1>

        <span className={s.Counter__value}>Good:{this.state.good}</span>
        <span className={s.Counter__value}>Neutral:{this.state.neutral}</span>
        <span className={s.Counter__value}>Bad:{this.state.bad}</span>
        <span className={s.Counter__value}>Total:{this.state.total}</span>
        <span className={s.Counter__value}>
          Positive feedback:{Math.round(this.state.positive)}%
        </span>
      </div>
    );
  }
}
