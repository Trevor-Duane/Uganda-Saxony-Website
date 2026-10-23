import { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import './Toggeable.css';

const ToggeableDiv = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="toggeable-container">
      <button
        type="button"
        className="toggle-container-header"
        onClick={toggleVisibility}
        aria-expanded={isVisible}
      >
        <span className="toggle-tittle">{question}</span>
        <span className="toggle-icon" aria-hidden="true">
          {isVisible ? <FaMinus size={14} color="#fff" /> : <FaPlus size={14} color="#fff" />}
        </span>
      </button>

      {isVisible && (
        <div className="toggeable-text-container">
          <div className="toggeable-content">
            {typeof answer === 'function' ? answer() : <p>{answer}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggeableDiv;