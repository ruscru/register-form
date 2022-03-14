import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, validAge, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);        
    if(inputProps.name==="birthday"){        
        if (!validAge){
            e.target.setCustomValidity("Invalied field.")
        }
        else{
            e.target.setCustomValidity("")
        }
    }
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <div className="wrapperErrorMessage">
        <span className="errorMessage">{errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInput;