import { Box, Stack } from "@mui/material";
import React from "react";
import { StyledTextField } from "./Info";

const Contact = () => {
  return (
    <Box
      mt={2}
      sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
    >
      <Stack p={1} spacing={2} width='100%'>
        <StyledTextField
          id="standard-helpertext"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Phone Number"
          type="number"
          size="small"
          required
        />

        <StyledTextField
          id="standard-helpertext"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Facebook"
          type="text"
          size="small"
        />
      </Stack>

      <Stack p={1} spacing={2} width='100%'>
        <StyledTextField
          id="standard-helpertext"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Instagram"
          type="text"
          size="small"
        />

        <StyledTextField
          id="standard-helpertext"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Twitter"
          type="text"
          size="small"
        />
      </Stack>
    </Box>
  );
};

export default Contact;
