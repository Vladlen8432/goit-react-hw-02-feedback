import { Component } from 'react';
import Statistics from './Statisctics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      hasFeedback: true,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackOptions = ['good', 'neutral', 'bad'];
    const feedbackBlock = this.state.hasFeedback ? (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}
      />
    ) : (
      <Notification message="There is no feedback"/>
    );

    return (
      <div>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={this.handleFeedback}
        />
        {feedbackBlock}

        {this.feedbackBlock > 0 &&<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />}
      </div>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div>

//     </div>
//   );
// };
