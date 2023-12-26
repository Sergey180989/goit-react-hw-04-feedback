import { Notification } from 'components/Notification/Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total ? (
    <>
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p> Total: {total} </p>
      <p> Positive feedback: {positivePercentage} %</p>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
}