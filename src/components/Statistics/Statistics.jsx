import { nanoid } from 'nanoid';
import css from './Statistics.module.css';

export const Statistics = props => {
  return (
    <div>
      <ul className={css.statistic_list}>
        {Object.entries(props).map(([name, value]) => (
          <li key={nanoid()}>
            <p>{name === 'positivePercentage' ? 'Positive feedback' : name}</p>
            <span>: {name === 'positivePercentage' ? `${value}%` : value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
