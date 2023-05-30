import { nanoid } from 'nanoid';
import css from './Statistics.module.css';

export const Statistics = props => {
  return (
    <div>
      <ul className={css.statistic_list}>
        {Object.entries(props).map(statistic => (
          <li key={nanoid()}>
            <p>
              {statistic[0] === 'positivePercentage'
                ? 'Positive feedback'
                : statistic[0]}
            </p>
            <span>
              :{' '}
              {statistic[0] === 'positivePercentage'
                ? `${statistic[1]}%`
                : statistic[1]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
