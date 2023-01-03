import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
// import React, { useState } from "react";

const StyledFiltersButton = styled(Button)({
  background: "lightgrey",
  height: "2.8rem",
  width: "7.9rem",
  color: "black",
});

const StyledTypography = styled(Typography)({
    fontSize: '13px',
  });

const StyledFormControlLabel = styled(FormControlLabel)({
    margin: 0
  });
  

const SearchForm = () => {
  const [type, setType] = useState("");

  return (
    <Stack
    sx={{width:'88%'}}
    
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={1.2}
    >
      <Stack >
      <FormControl fullWidth>
            <InputLabel size="small" id="demo-simple-select-label" sx={{color:'darkgrey'}}>Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
                required
                size="small"
              >
                <MenuItem value={"Commercial/Sale"}>Commercial/Sale</MenuItem>
                  <MenuItem value={"House/Sale"}>House/Sale</MenuItem>
                  <MenuItem value={"Farm/Sale"}>Farm House/Sale</MenuItem>
                  <MenuItem value={"Flat/Sale"}>Flat/Sale</MenuItem>
                  <MenuItem value={"Commercial/Rent"}>Commercial/Rent</MenuItem>
                  <MenuItem value={"House/Rent"}>House/Rent</MenuItem>
                  <MenuItem value={"Farm/Rent"}>Farm House/Rent</MenuItem>
                  <MenuItem value={"Flat/Rent"}>Flat/Rent</MenuItem>
              </Select>
              </FormControl>
      </Stack>

      <Stack spacing={1}>
        <Stack direction="row" spacing={0.5}>
        <Stack pr={1}>
          <TextField
            sx={{ width: "100px"}}
            id="standard-helpertext"
            variant="outlined"
            placeholder="Location"
            type="text"
            size="small"
            required
            disableunderline="true"
          />
          </Stack>
          <TextField
            sx={{ width: "74px"}}
            id="standard-helpertext"
            variant="outlined"
            placeholder="Min"
            type="number"
            required
            size="small"
            disableunderline="true"
          />

          <Typography pt={1} fontSize="17px">
            x
          </Typography>
          <TextField
            sx={{ width: "74px" }}
            id="standard-helpertext"
            variant="outlined"
            placeholder="Max"
            type="number"
            required
            size="small"
            disableunderline="true"
          />
        </Stack>
        
        <Typography variant='p' style={{fontWeight: 'bold'}}>Price range: $10 to $10,000</Typography>
        <Stack pl={2}>
        <Slider
          sx={{ width: "96%"}}
          getAriaLabel={() => "Temperature range"}
          //   value={value}
          //   onChange={handleChange}
          valueLabelDisplay="auto"
          //   getAriaValueText={valuetext}
        />
        </Stack>

        <pre style={{fontWeight: 'bold'}}>Bedrooms     Bathrooms </pre>
        <Stack direction="row" spacing={4} pb={1}>
          <TextField
            step={1}
            sx={{ width: "20%" }}
            id="standard-helpertext"
            variant="outlined"
            placeholder="0"
            type="number"
            required
            size="small"
            disableunderline="true"
          />
          <TextField
            sx={{ width: "20%" }}
            id="standard-helpertext"
            variant="outlined"
            placeholder="0"
            type="number"
            required
            size="small"
            disableunderline="true"
          />
        </Stack>

        <Stack direction="row" spacing={2.8} justifyContent="center">
          <Stack spacing={1.4}>
            <StyledFiltersButton>Apartment</StyledFiltersButton>
            <StyledFiltersButton>House</StyledFiltersButton>
            <StyledFiltersButton>Shop</StyledFiltersButton>
          </Stack>
          <Stack spacing={1.4}>
            <StyledFiltersButton>Codominium</StyledFiltersButton>
            <StyledFiltersButton>Office</StyledFiltersButton>
          </Stack>
        </Stack>
      </Stack>

      <Stack >
        <Stack mb={6} mr={2} ml={-1} spacing={1.3} direction="row">
          <FormGroup>
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>AC</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>XBOX</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>TV</StyledTypography>} />
          </FormGroup>

          <FormGroup>
          <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Microwave</StyledTypography>} />
          <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Lawn</StyledTypography>} />
          <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Swimming pool</StyledTypography>} />
          </FormGroup>

          <FormGroup>
          <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Projecter</StyledTypography>} />
          <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Washer</StyledTypography>} />
          <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Wifi</StyledTypography>} />
          </FormGroup>
        </Stack>

        <Stack spacing={1}>
          <Button variant="outlined" sx={{height: "2.7rem"}}>RESET ALL</Button>
          <Stack direction='row' justifyContent='flex-end'>
          <StyledFiltersButton>APPLY FILTER</StyledFiltersButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SearchForm;
