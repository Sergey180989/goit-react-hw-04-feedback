export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        height: '30px',
        width: '30px'
      }}
    >
      {options.map(item => (
        <button key={item} name={item} type="button" onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
}