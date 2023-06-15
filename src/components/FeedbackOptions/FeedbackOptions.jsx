import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeavefeedback, options }) => {
  return (
    <div className={css.wrap}>
      {/* Генеруємо список кнопок на основі масиву options */}
      {options.map((name, i) => {
        return (
          <button
            key={i + 1}
            className={css[name]}
            // При кліку на кнопку викликаєтсья функція яка передає назву відгуку як аргумент
            onClick={() => {
              onLeavefeedback(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

// PropTypes
FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
