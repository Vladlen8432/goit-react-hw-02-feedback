// import React, { Component } from 'react';

// class FeedbackWidget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className="feedbackWidget">
//         <h2>Please leave feedback</h2>

//         <div className="feedbackButtons">
//           <button onClick={() => this.handleFeedback('good')}>Good</button>
//           <button onClick={() => this.handleFeedback('neutral')}>
//             Neutral
//           </button>
//           <button onClick={() => this.handleFeedback('bad')}>Bad</button>
//         </div>

//         <div className="feedbackCounts">
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//           <p>Total feedback: {totalFeedback}</p>
//           <p>Positive feedback: {positivePercentage}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default FeedbackWidget;
