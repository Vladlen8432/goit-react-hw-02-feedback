import css from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <h2 className={css.headerFeedback}>Please, leave feedback</h2>

    <div className={css.buttonContainer}>
      {options.map(option => (
        <button
          className={`${css.buttonItem} ${css[`${option}Button`]}`}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default FeedbackOptions;
