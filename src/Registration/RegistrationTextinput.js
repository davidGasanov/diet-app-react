import { useState, useEffect, React } from "react";
import { TextField } from "@mui/material";

function RegistrationTextinput({ updateValidList, validList, label, helperText, validation }) {
  const [valid, setValid] = useState(true);
  const [text, updateText] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setShowError(false);
    setValid(validation.test(e.target.value));
    updateText(e.target.value)
  };

  useEffect(()=>{

    if (valid && text !=="" && !validList?.includes(label)){
      updateValidList(validList=>validList.push(label));
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
