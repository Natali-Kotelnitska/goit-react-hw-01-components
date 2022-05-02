import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import s from './Statistics.module.css';
console.log(s);

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      {/* <h2 className="title">{title}</h2> */}
      <ul className={s.statList}>
        {stats.map(item => (
          <StatisticItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;
