//DOC: ToggleButton.jsx
// Description:
// The ToggleButton component is a reusable React component that functions as a toggle button. It allows users to switch between two states, indicated by the `isChecked` prop, and can display different labels for each state.

// Props:
// isChecked: A boolean indicating the current toggle state.
// onToggle: A callback function to handle the toggle action, which receives the button's unique id.
// labels: An array of two strings, representing the labels for each state (e.g., ['Off', 'On']).
// id: A unique identifier for the toggle button.

// Usage Example:
// const [isToggled, setIsToggled] = useState(false);
// const handleToggle = (id) => {
//   setIsToggled(!isToggled);
//   console.log(id);
// };
// <ToggleButton
//   isChecked={isToggled}
//   onToggle={handleToggle}
//   labels={['Off', 'On']}
//   id="toggle-1"
// />

import PropTypes from 'prop-types';

export const ToggleButton = ({ isChecked, onToggle, labels, id }) => {
  return (
    <button
      className={`mx-auto flex h-7 w-12 cursor-pointer items-center rounded-full p-1 ${
        isChecked ? 'bg-green-600' : 'bg-[#B0BEC5]'
      }`}
      onClick={() => onToggle(id)}
    >
      <p
        className={`flex h-full w-1/2 transform items-center justify-center rounded-full bg-white text-[10px] font-bold uppercase transition-transform ${
          isChecked ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {labels && <span className="m-1">{isChecked ? labels[1] : labels[0]}</span>}
      </p>
    </button>
  );
};

ToggleButton.propTypes = {
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func,
  labels: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
