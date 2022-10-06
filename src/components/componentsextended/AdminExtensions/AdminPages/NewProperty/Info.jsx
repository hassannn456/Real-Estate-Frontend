import { Stack, styled, TextField } from "@mui/material";
import React from "react";

export const StyledTextField = styled(TextField)({
  background: "#D3D3D3",
  opacity: "0.6",
  borderRadius: "10px",
  paddingTop: "8px",
  paddingBottom: "6px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "&.Mui-focused fieldset": {
      borderColor: "#D3D3D3",
    },
    // legend: {
    //   marginLeft: "30px",
    // },
  },
  input: {
    "&::placeholder": {
      padding: "14px",
    },
  },
});

const Info = () => {
  return (
    <Stack mt={2} spacing={1}>
      <StyledTextField
        id="standard-helpertext"
        variant="standard"
        InputProps={{
            disableUnderline: true,
        }}
        placeholder="Property Name"
        type="text"
        size="small"
        required
      />

      <StyledTextField
        id="standard-helpertext"
        variant="standard"
        InputProps={{
            disableUnderline: true,
        }}
        placeholder="Price"
        required
        type="number"
        size="small"
      />
      <StyledTextField
        id="standard-helpertext"
        variant="standard"
        InputProps={{
            disableUnderline: true,
        }}
        placeholder="Address"
        type="text"
        required
        size="small"
      />
    </Stack>
  );
};

export default Info;
