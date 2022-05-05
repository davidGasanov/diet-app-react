import { useState, useEffect, React } from "react";
import { TextField } from "@mui/material";

function RegistrationTextinput({ updateValidList, validList, label, helperText, validation }) {
  const [valid, setValid] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setShowError(false);
    setValid(validation.test(e.target.value));
  };

  useEffect(()=>{
  
  if(valid && !validList.includes(label)){
    updateValidList([...validList, label])
  } else if (!valid && validList.includes(label)){
    const updatedValidList = [...validList]
    const index = validList.indexOf(label);
    updatedValidList.splice(index,1);
    updateValidList(updatedValidList);

  }


  },[valid])

  const inputProps = {
    onBlur: () => {
      if (!valid) {
        setShowError(true);
      }
    },
  };

  return (
    <TextField
      inputProps={inputProps}
      error={showError}
      required
      onChange={handleChange}
      helperText={showError && helperText}
      label={label}
      variant="outlined"
    />
  );
}

export default RegistrationTextinput;
