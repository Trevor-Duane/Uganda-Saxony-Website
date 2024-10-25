import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import './Toggeable.css'

const ToggeableDiv = ({question, answer}) => {

    const [isVisible, setIsVisible] = React.useState(false);


    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
      };
  return (
    <div className="toggeable-container">
          <div className="toggle-container-header">
            <div className="toggle-tittle">
              <p>{question}</p>
            </div>
            <div className="toggle-icon" onClick={toggleVisibility}>
              {isVisible ? (
                <FaMinus size={18} color="#fff" />
              ) : (
                <FaPlus size={18} color="#fff" />
              )}
            </div>
          </div>
          {isVisible && (
            <div className="toggeable-text-container">
              <p>
                {typeof answer === 'function' ? answer() : answer}
              </p>
            </div>
          )}
        </div>
  )
}

export default ToggeableDiv