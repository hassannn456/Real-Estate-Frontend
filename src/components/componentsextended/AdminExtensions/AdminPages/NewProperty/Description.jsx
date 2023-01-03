import { Stack } from "@mui/material";
import React from "react";
import { StyledTextField } from "./Info";

const Description = () => {
  return (
    <Stack mt={2}>

      {/* Use textareaautosize instead */}
      <StyledTextField
        sx={{ height: "150px" }}
        id="standard-helpertext"
        variant="standard"
        InputProps={{
            disableUnderline: true,
        }}
        placeholder="Type here..."
        type="text"
        size="small"
        required
        disableunderline="true"
      />
    </Stack>
  );
};

export default Description;
