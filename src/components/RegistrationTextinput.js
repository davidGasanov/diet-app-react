import { useState, React } from "react";
import { TextField } from "@mui/material";

function RegistrationTextinput({ label, helperText, validation }) {
  const [valid, setValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setShowError(false);
    setValid(validation.test(e.target.value));
  };

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
