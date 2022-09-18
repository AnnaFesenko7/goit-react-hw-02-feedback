import s from './Statistics.module.css';
export default function Statistics({ state }) {
  return (
    <>
      {Object.entries(state).map(key => {
        if (key[0] === 'positive') {
          return (
            <span className={s.Counter__value}>
              Positive feedback: {Math.round(key[1])} %
            </span>
          );
        }
        return (
          <span className={s.Counter__value}>
            {`${key[0].toUpperCase()}`}: {key[1]}
          </span>
        );
      })}

      {/* <span className={s.Counter__value}>Good: {good}</span>
      <span className={s.Counter__value}>Neutral: {neutral}</span>
      <span className={s.Counter__value}>Bad: {bad}</span>
      <span className={s.Counter__value}>Total: {total}</span>
      <span className={s.Counter__value}>
        Positive feedback: {Math.round(positive)} %
      </span> */}
    </>
  );
}
