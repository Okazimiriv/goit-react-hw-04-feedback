
import React, { Component } from "react";
import Container from "components/Container";
import Statistic from "components/Statistics";
import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Notification from "components/Notification";



class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = (event) => {
    const feedBackType = event.target.textContent.toLowerCase();
    console.log(feedBackType);
    this.setState((prevState) => {
      return {
        [feedBackType]: prevState[feedBackType] + 1
      };   
  });
};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad)
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) return 0;
    return Math.round(( this.state.good * 100 ) / this.countTotalFeedback());
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    console.log(feedbackOptions);
    return (
      <Container>
        <Section title={"Please leave feedback"}>
         <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onFeedbackClick}
        />  
        </Section>
        <Section title={"Statistics"} >
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
       </Section>
      </Container>
    );
  }  
};

export default App;
