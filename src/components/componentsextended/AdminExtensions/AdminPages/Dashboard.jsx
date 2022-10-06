import {
  Avatar,
  Box,
  Button,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import DoughnutChart from "./Charts/DoughnutChart";
import OtherDoughnut from "./Charts/OtherDoughnut";
import HouseIcon from "@mui/icons-material/House";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import LineChart from "./Charts/LineChart";
import { VerticalChart } from "./Charts/VerticalChart";
import DashMapper from "./DashboardExtensions/DashMapper";
import CustomerMapper from "./DashboardExtensions/CustomerMapper";
import { BorderLinearProgress } from "./Charts/HorizontalChart";
// import ReactMapGL from 'react-map-gl';
// import { useState } from "react";
import { useDispatch } from 'react-redux';
import { dashActions } from '../../../Redux/DashSlice';
import { StyledCard, StyledTypography } from "../Cards";

const data = {
  salesLabel: ["Total", "Sale", "Properties for sale"],
  rentLabel: ["Total", "Rent", "Properties for Rent"],
  totalLabel: ["Total", "Customers", "Total Cutomers"],
  cityLabel: ["Total", "Rent", "Total Cities"],
  peopleLabel: ["Customer", "Agents"],
  lineChartIcons: [<HouseIcon />, <HouseIcon />, <ArrowCircleUpIcon />],
  lineLabel: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  VerticalLabel: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  sale: [2000, 700],
  rent: [2000, 500],
  total: [2000, 800],
  city: [2000, 1500],
  people: [2000, 1200],
  lineChartTopText: ["Total Sale", "Total Rent", "than last week"],
  lineChartTopData: [100, 220, "0.8%"],
  lineChart: [100, 220, 400, 280, 550, 350, 1000],
  lineChart2: [300, 1100, 500, 300, 750, 450, 900],
  VerticalChartTopText: ["Total Revenue"],
  VerticalChartTopData: ["$60,000"],
  VerticalChart: [100, 200, 400, 100, 200, 400, 100, 200, 400, 100, 200, 400],
  VerticalChart2: [900, 800, 600, 900, 800, 600, 900, 800, 600, 900, 800, 600],
  HorizontalChart: [60, 80, 70], 
  HorizontalChartText: ["Properties Viewed", "Properties Listed", "Reviews"],
  HorizontalChartUnits: ["/days", "units", "comments"],
  HorizontalChartData: [800, 2456, 456],
};

const StyledTypogrphies = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  color: "darkgrey",
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
}));

const StyledLineTypography = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  color: "darkgrey",
  [theme.breakpoints.up("sm")]: {
    fontSize: "9px",
  },
}));

const StyledChartBox = styled(Box)(({ theme }) => ({
  height: "60px",
  width: "60px",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "100px",
    width: "100px",
  },
}));

const StyledCityChartBox = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "50px",
  position: "relative",
  marginTop: "-6px",
  [theme.breakpoints.up("sm")]: {
    height: "55px",
    width: "55px",
  },
}));

const StyledCAChartBox = styled(Box)(({ theme }) => ({
  height: "140px",
  width: "140px",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "180px",
    width: "180px",
  },
}));

const StyledButton = styled(Button)({
  width: "30px",
  height: "25px",
  fontSize: "8px",
  background: "#D3D3D3",
  color: "black",
});

const Dashboard = () => {

  const dispatch= useDispatch();

  const dashHandler = (num) => {
    dispatch(dashActions.toggle(num));
 }

  // const [viewport, setViewPort] = useState({
  //   latitude: 45.4211,
  //   longitude: -75.6903,
  //   width:'100vw',
  //   height:'100vh', zoom:'10'
  // })

  return (
    // Header
    <Stack sx={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <Box
        mb={2}
        pt={2}
        sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
      >
        <StyledTypography variant="h4">
          Dashboard
        </StyledTypography>
      </Box>

      {/* Data Stacks */}

      <Stack flex={11} mt={1} textAlign="flex-start">

        {/* Top left box with 4 Doughnut charts */}

        <Box
          flex={1}
          mx={2}
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >

          <Stack flex={7} spacing={2} sx={{height: { xs: "220px", sm: "280px" }}}>
            <Stack
              flex={9}
              direction="row"
              sx={{ height: { xs: "220px", sm: "260px" } }}
              spacing={2}
            >

              {/* Chart Doughnut 1 */}

              <StyledCard
                sx={{
                  width: "32%",
                  height: { xs: "110px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack pt={0.2} pr={0.3} sx={{ width: "82%" }}>
                  <StyledTypogrphies>{data.salesLabel[2]}</StyledTypogrphies>
                  <StyledTypography>{data.sale[1]}</StyledTypography>

                  <Stack sx={{ width: "110%" }} alignItems="flex-end">
                    <StyledChartBox>
                      <DoughnutChart
                        xLabels={data.salesLabel}
                        values={data.sale}
                      />
                    </StyledChartBox>
                  </Stack>
                </Stack>
              </StyledCard>
              

              {/* Chart Doughnut 2 */}

              <StyledCard
                sx={{
                  width: "32%",
                  height: { xs: "110px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack pt={0.2} pr={0.3} sx={{ width: "82%" }}>
                  <StyledTypogrphies>{data.rentLabel[2]}</StyledTypogrphies>
                  <StyledTypography>{data.rent[1]}</StyledTypography>

                  <Stack sx={{ width: "110%" }} alignItems="flex-end">
                    <StyledChartBox>
                      <DoughnutChart
                        xLabels={data.rentLabel}
                        values={data.rent}
                      />
                    </StyledChartBox>
                  </Stack>
                </Stack>
              </StyledCard>
              
              {/* Chart Doughnut 3 */}

              <StyledCard
                sx={{
                  width: "32%",
                  height: { xs: "110px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack pt={0.2} pr={0.3} sx={{ width: "82%" }}>
                  <StyledTypogrphies>{data.totalLabel[2]}</StyledTypogrphies>
                  <StyledTypography>{data.total[1]}</StyledTypography>

                  <Stack sx={{ width: "110%" }} alignItems="flex-end">
                    <StyledChartBox>
                      <DoughnutChart
                        xLabels={data.totalLabel}
                        values={data.total}
                      />
                    </StyledChartBox>
                  </Stack>
                </Stack>
              </StyledCard>
            </Stack>
              
            {/* Chart Doughnut 4 */}

            <Stack flex={3}>
              <StyledCard
                sx={{
                  width: "100%",
                  height: { xs: "60px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack p={1} mt={1} direction="row" sx={{ width: "100%" }}>
                  <Box sx={{ width: { xs: "80px", sm: "120px" } }}>
                    <StyledTypogrphies>{data.cityLabel[2]}</StyledTypogrphies>
                    <StyledTypography>{data.city[1]}</StyledTypography>
                  </Box>
                  <Box sx={{ width: "70%" }} />
                  <StyledCityChartBox>
                    <DoughnutChart
                      xLabels={data.cityLabel}
                      values={data.city}
                    />
                  </StyledCityChartBox>
                </Stack>
              </StyledCard>
            </Stack>
          </Stack>

            {/* Revenue Vertical Bar Chart */}

          <Stack
            flex={5}
            sx={{
              marginLeft: { xs: "none", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <StyledCard
              sx={{
                height: { xs: "220px", sm: "280px" },
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <Stack
                px={1}
                pt={1}
                direction="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
              >
                <Stack>
                  <StyledTypogrphies>
                    {data.VerticalChartTopText}
                  </StyledTypogrphies>
                  <StyledTypography>
                    {data.VerticalChartTopData}
                  </StyledTypography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <StyledButton variant="contained">Today</StyledButton>
                  <StyledButton variant="contained">Weekly</StyledButton>
                  <StyledButton variant="contained">Monthly</StyledButton>
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Box
                  pt={0.4}
                  sx={{
                    height: { xs: "160px", sm: "160px", md: "200px" },
                    width: { xs: "280px", sm: "300px", md: "390px" },
                    position: "relative",
                  }}
                >
                  <VerticalChart
                    xLabels={data.VerticalLabel}
                    values={data.VerticalChart}
                    values2={data.VerticalChart2}
                  />
                </Box>
              </Stack>
            </StyledCard>
          </Stack>
        </Box>

        {/* Lower Column Box begins here */}

        <Box
          flex={10}
          mx={2}
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >

          {/* Row 1 */}

          <Box
            flex={3}
            mt={3}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              marginRight: { xs: "0px", sm: "16px" },
            }}
          >

            {/* Horizontal progress Bar Chart */}

            <StyledCard
              sx={{
                height: { xs: "180px", sm: "200px" },
                width: { xs: "60%", sm: "100%" },
                borderRadius: "16px",
              }}
            >
              <Stack spacing={3} mb={2}>

                {/* Bar 1 */}

                <Stack>
                  <Stack
                  mt={0.8}
                    px={0.4}
                    spacing={3}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <StyledTypography sx={{ fontSize: "11px"}}>
                      {data.HorizontalChartText[0]}
                    </StyledTypography>
                    <Typography sx={{ fontSize: "9px" }}>
                      {data.HorizontalChartData[0]}
                      {data.HorizontalChartUnits[0]}
                    </Typography>
                  </Stack>
                  <Stack>
                    <BorderLinearProgress variant="determinate" value={data.HorizontalChart[0]} />
                  </Stack>
                </Stack>

                {/* Bar 2 */}

                <Stack>
                  <Stack
                    px={0.4}
                    spacing={3}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <StyledTypography sx={{ fontSize: "11px"}}>
                      {data.HorizontalChartText[1]}
                    </StyledTypography>
                    <Typography sx={{ fontSize: "9px" }}>
                      {data.HorizontalChartData[1]}
                      {data.HorizontalChartUnits[1]}
                    </Typography>
                  </Stack>
                  <Stack>
                    <BorderLinearProgress variant="determinate" value={data.HorizontalChart[1]} />
                  </Stack>
                </Stack>

                {/* Bar 3 */}

                <Stack>
                  <Stack
                    px={0.4}
                    spacing={3}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <StyledTypography sx={{ fontSize: "11px"}}>
                      {data.HorizontalChartText[2]}
                    </StyledTypography>
                    <Typography sx={{ fontSize: "9px" }}>
                      {data.HorizontalChartData[2]}
                      {data.HorizontalChartUnits[2]}
                    </Typography>
                  </Stack>
                  <Stack>
                    <BorderLinearProgress variant="determinate" value={data.HorizontalChart[2]} />
                  </Stack>
                </Stack>
              </Stack>
            </StyledCard>

              {/* Lower Doughnut Chart */}

            <Stack
              sx={{
                width: { xs: "40%", sm: "100%" },
                marginTop: { xs: "none", sm: "16px" },
                marginLeft: { xs: "8px", sm: "0px" },
              }}
            >
              <StyledCard
                sx={{
                  height: { xs: "180px", sm: "200px" },
                  borderRadius: "16px",
                }}
              >
                <StyledCAChartBox>
                  <OtherDoughnut
                    xLabels={data.peopleLabel}
                    values={data.people}
                  />
                </StyledCAChartBox>
              </StyledCard>
            </Stack>
          </Box>

            {/* Map and Line chart row */}

          <Stack
            flex={5}
            mt={3}
            spacing={2}
            sx={{ marginRight: { xs: "0px", sm: "16px" } }}
          >

            {/* Line Chart block */}

            <StyledCard
              sx={{
                height: { xs: "220px", sm: "260px" },
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <Stack px={1} pt={2} sx={{ width: "100%" }}>

                {/* Icons Stack */}

                <Stack direction="row">
                  <Box sx={{ width: "22%" }} />

                  {/* Line Chart Icon 1 */}

                  <Box sx={{ width: "24%" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          height: "30px",
                          width: "30px",
                          background: "#3974B6",
                        }}
                      >
                        {data.lineChartIcons[0]}
                      </Avatar>
                      <Box>
                        <StyledLineTypography>
                          {data.lineChartTopText[0]}
                        </StyledLineTypography>
                        <StyledTypography
                          sx={{ fontSize: "11px"}}
                        >
                          {data.lineChartTopData[0]}
                        </StyledTypography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Line Chart Icon 2 */}

                  <Box sx={{ width: "24%" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          height: "30px",
                          width: "30px",
                          background: "#0FFF50",
                        }}
                      >
                        {data.lineChartIcons[1]}
                      </Avatar>
                      <Box>
                        <StyledLineTypography>
                          {data.lineChartTopText[1]}
                        </StyledLineTypography>
                        <StyledTypography
                          sx={{ fontSize: "11px"}}
                        >
                          {data.lineChartTopData[1]}
                        </StyledTypography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Line Chart Line 3*/}

                  <Box sx={{ width: "30%" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          height: "30px",
                          width: "30px",
                          background: "#0FFF50",
                        }}
                      >
                        {data.lineChartIcons[2]}
                      </Avatar>
                      <Box>
                        <StyledLineTypography>
                          {data.lineChartTopText[2]}
                        </StyledLineTypography>
                        <StyledTypography
                          sx={{ fontSize: "11px"}}
                        >
                          {data.lineChartTopData[2]}
                        </StyledTypography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>

                {/* Line Chart */}

                <Stack alignItems="center">
                  <Box
                    mr={1}
                    pt={1}
                    sx={{
                      height: { xs: "160px", sm: "200px" },
                      width: { xs: "280px", sm: "280px", md: "390px"},
                      position: "relative",
                    }}
                  >
                    <LineChart
                      xLabels={data.lineLabel}
                      values={data.lineChart}
                      values2={data.lineChart2}
                    />
                  </Box>
                </Stack>
              </Stack>
            </StyledCard>
            
            {/* Map Image */}

            <StyledCard
              sx={{
                height: { xs: "220px", sm: "260px" },
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <Stack alignItems="center">
                <Box
                pl={1}
                  pt={1}
                  sx={{
                    height: { xs: "200px", sm: "240px" },
                    width: { xs: "280px", sm: "300px", md: "380px" },
                    position: "relative",
                  }}
                >
                  {/* <ReactMapGL {...viewport}>
                      Markers here
                    </ReactMapGL> */}
                    
                    <img style={{objectFit:'cover', height:'90%', width:'98%', resize:'both'}} alt='' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBUVFRUWGBcZGhgYGBgaGRgaHBoZGhwgGhsVGxkaJTkjGxwpHxgYJTUlKC0vMjMyGyM4PTgxSS4yMi8BCwsLDg4ODw4ODy8bFxsvLy8vLy8vLy8xLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAKQBMwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYCAwUBB//EAEcQAAIBAwIEAwQGBgcFCQAAAAECEQADIRIxBAUiQRNRYQYycYEUQpGhsdEjUlNicvAVgpLB0+HxM1Rjk6IWQ3ODo7LCw9L/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APs1KUoFKUoFKUoFKVyeN9oeFtAl7qwshioZwpG4YoDpPxoOtSud/TXC6Q30izpIkE3EAjzyacZzfh7Tabl1FaVEE5BbCggbSSAJ3JAoOjWDOBkkAeuKqPtF7U2goS2zxcViLlsurBlYjw1CozByUbBCyJ06jMcDlPLOI41ALgJt2z0N4t22Aze+OgLcJETBAXqA3DGg+hPzXh196/ZHxuIPxNZ8Hxtq6GNu4jhTpYqytBgNBjYwQfgRVT4nkF62Et2/FuIFEsrqrBsiAXuBgIgyxuEyciK0fQwP0dy2wKgMEu6GENPWqoTbEkNMQZGdxIX6o1/jrSf7S7bT+J1X8TVL/o+z+ytf8tPyrdbtKvuqq/AAfhQWuzzGy3uXbbfwuh/A1Lqo8Dy/6Q7BiRbT3iAss5EhBqBgBTJ79Swd6snAcHbs21tW1CoswPViWJ9SSSfnQS6UpQKUpQKUpQKVpS+jEgMpK7gEEiPMdq5nEc/tjFubrfuRoHxuHp33C6iPKg7NKrf9P3f2Nv8A5zf4VZ8P7QdYF5UtoQYcXCwDDIBBQQCNWZ3AHegsNK5v9O8L+3t/2hUnhONt3ATbdXAMHSQYPkY2oJNKicRzCzbIW5dtoSJAd1UkbTk1vtXVYSrBh5ggj7RQbKUpQKUpQKUpQKUpQKUqu+1HNRbVbSt13GCuEaHVGnqHkWI0iOoydIJGAw4r2pt67tq0C963qGmbcBxIGpS4cLqG8CRkTg1CuX7jmXu3Cf3WNsD0AtkY+JJ9a2cFyq6w6La203GvpJnuLa5H9Yg+lSv6BvftbQ/8pz/9goOZcLD/ALy9J2AvXc/9dbE4niAI+kXB6RaaPTU6Fj8SZrRaDhriOsOh0vmRMagAYyukqR/FkAyBuqo2fTL/APvF3+zZ/wAOuXxfAF4PQSH8TUVVHLTOXtgSoMnSAskmTk10KUHMv8LefJa3uDEQRGzK0GD5qwdTkGQSKh8dbHiNd4u4juzA2kVNR1KNQZlURcYogXKbAKJmD25GtVuObdrdrgE/1f8AhjuXIgAdpkWT6PwyWW6LfhadTdIcMB1BjubhJzOST5moqmcCiFhxPE3GS25ICKuPE07IEU3bYVVIIciBA0itjnqdkF0CALV4L+lOo9KlbZ1sJgwQJGGXBmSLYbq0+GJlLaHQLQ3AUIYDZJJG7E5iAN/Jgvj2i9lBcYaS4YmbgRna4LYARJKsYEyWnBmQs/L+Ia5bV2QoWGVM4zHcAwdxIBg5A2qtcbxLXrgcgKqeJbQbkyyyzHYe4IUbZyZxca4V72fVmYi46ozFmQbyTLBX3UEz6iTBGIDjWtTyLaPcOR0r0yDBHiNCSDuJmpd7lVxEL3LttFUS0I9yPQZBJ+XyqzWraqoVQFUAAKBAAGAABsK9dAQQQCDgg5BHlFBwOX82sWxatBboVmCB2VRLucMwnVLMcwuCcwJix1Dscuso2pLVtW21KiqY8pAmsLvMra3VsmdTAEY6ROrSCexOho+A8xITqrnMOfFpThoPneOUH8A+uY7+7ke9kVn7VJc0K0M9pQ/iIpUScaGIYjWMMNGZLrgxiucNxK8QNNsC47MD4cgyBpJFwj3bZWNR7atME9JCRZ4+64c+PcbSQMDQCIDSsASCrCCMHBGDW4e0N9JiLsEgK/hhmMAwDbOvTDAz4TGD3qJxl5xxFxLZBthyXe4DqlnbWqRgqpECdgBM4mWqAbeQE+g2zVR07/PrjYt2wg/WudR+VtDsfMsD6Vp/pjiv1rP/ACbn+LUSlBz+M4VmBaFZy7MQoCL15IIYmU8TTcYEmYMCYroClKBSlKBNa3tKxkjO0948pHatlKDBLarMCJ39e2T3olvSxdCyMRBKErqHbVHvR2naT5ms6UGf0i72vXR81P8A7ga9+l3/APeLn9mz/fbrzhuHuXC+hVIQhSWcr1EBoACnsy/bUrh+R3WbrbQoBjQwYsxI31JsAD8dXaKDTb5lxK7XA/8A4ltT9nh6f76yt+1gA1XFXw5jxEc5gwxVWUBgM4VmODEnFcq0XU6WdRb13EN1xqKBG0AuqwCGKsS0gJIBBALVauWcmSy7XAzMzCCSFURgxpUCdhlpI88morpowIBGxyKzpSgUpSgVq8FdWrSuqI1QJjyneK20oFKVyeccy8MBEANxhifdRdvEf08l3Y4wAzKFT4fmYuXL4dGt3Bclg8TDe4JBjUFUKR2K+RBMrxl/WFZIkTJLEmWY5LMd2J8/uAAAgACsqqNfjL+sK9W4pwCJ+NZ1G5jp8N9aM6gToUMSxBkAac7xQbkuKSQGBI3AIMfGNqxUNpFs6RaV2uAAnqYmQWEQNJkxmSQ2CBXG4ezdtvbXU+p0UBQGNq0qMW8ONJUCGK++vmNoPUtm4YDAeIxIW3b6ifgWjtBJIAHfzoMbvMra3BaDarhKjQuSNWF1na2CYALETIiveZNdQoPBuB51L+kUMq7NcHhOXwpOMap0yJqens7xWsHxbSg6XkK7MlwfxdNwRGSFyNtgO8vKrbBfGVL1wLpNy5bt6jknsIAycCordywjwrcObg0L1mZbHvGcz8c+dTK1WbSqoVFVVGyqAAPgBgVtoFKUoIvMLbtauLbMOyMEMkQxUhTIyMxmqDxvLzw9wakGtk8Q+EbRbVK6FTWRcuFHS65YrBNxSZg6b9x/Ei3be4ROkbeZmAPtNVnmHGm9obwlDK3vByW0wQU90SJIMExInsKCPe5jxF1La3VCKQusKQWZhkamGF6ownkDqzpEOzw9u10J4iJ3UXLmkkwAdGrIxG3b0rPmFxhYa94bm0vUXIQKVBgkK7An0xmBG4NRuIW5buBWSFOghRMwcC5LtDCY3G+DkAPUSVCaukgjLNqY5YmQ0tkn3s1vQMJwCDkAHb4TjfPao9niRpBJwygkvIJwPTYzMeprbw9i09tC3HJbYsxe2z2/dLyEwVdWgAHPdsbQEhGmsFcnIA+0/lWhWS2dCslxSXKsl0XMEluvUQVOcDIxE1jo1K7L4nRcVjoLStoqDqCbMpurcDGGIHkMgJOkk5wO0Mf8vSvfDHaR8Py2PzrUt6cjbt0mCImdQx89vxrZ4ke9A7gzIP8AnQe9Q8j9x/I/dXnijbM/q9/9PXavDexMGPPEfcZr1EBAJBkwc7/5b0DWew+M/mK91nup+WR+f3UyPUff+R/nenieh+ygwuXMY1T26T9mRGdqyMjMkjvtPxEDPw/0JurGQO8j7s17hRkgAdzA3P2bmgWSVLG27qSQxKuxGoAKCUnScKoiMxUj2d9o7jXTw/FBVuliEZRCvgsAo8tIJ8wQQ31WeHxLgRiW1IAAJMlgMeWTE7VOucscWHuupW4ji5bXcrox1aD1A5JUHYLkEYipPtByNriXGsAa3VgyEwrlgRqB+q/rse/YiyVy+Scwa+hdk0gGFYagHEe8AwBGcdx6mupQKUpQKUpQKUpQKq/PhF9ScB0VVPYsrOxWfOGBjuJjYxaK5nP7Orh7gC6iAHCxJJRg4AHc9NBXqVz+AfUbgLEw5K5wEbKRpxEAkehFTJI3yJie+dvyqo2UqTy/lty8viBwiH3JQsXH7T3hCnt5gT3EOY8te0mvWrgPbUroIkO6pM6jEap27UEW2Gd/DRdTxPkFG2tz2GDHcwYGDFk5XyxbIJnVcb33Ign90D6qDso+Jkkk6vZ60q8NaYAA3ES457s7KCWJ7n8AABgAV1qilKUoFKUoFKUoOfzlFaxcDMEGmdREhSMgkDcSBgb7VUA86VIZkwG0B0ZgB7v6VV0AxkgkxMZgibzjmguuFXNtG6ciHcfXI3KLB04gnq7K1alTuTPl5fIUHrXYtPaFpBbd9RXxbpIJYEEXNwAQIAAAiKW7N3jL9sOI4VQxhSjAOjNaawxKaijBdRlgeoCMaguLIIG5Bj41rt2wCtxJR9xcUDXncEkEMDOxkfYKqOv/ANmLfiuSFNlkdfCKzpNyA2n9VYGO4kgQMVzL/LL3DIipaR11BFFrUu/12RU0213JMwJrXeUkl2d2clZedLRIGkFI0iOwjudyTXnF3XS2+l7zDSZUXWZmX6wXxCeqJjbMZG9RWNjiC6Iw0jWAYMnBEny+G3lWfBFrbq6e+kggkw6NuDvAMK0ge8vfM6uCTpyAjiFIUggQAe2CCCGB8mFOI8QMhDW1WYdmVjAOxMHpXVpk50iT5iqjbbtsNRkAl7j6QJUa3Z9I2JjVE422rAIWGIUGDGTPftEA/fPbNZ2uIVoEgMROmQTH6wj3lPZhgiihsqIEbH0Ppt5j5UGtVKmQJiVGTkYJAnAgj7qkK0+nmP8AStZE9IGxEn7/AIkmfvNeuCDI2O+Ac4zG+w86DbStB4kAwR9n4Qcz6RWXiZgiNvWJMCfLPxoNtar9rVHukgkgMupTIKsCsiZVmG+DB7VtpQaV5S/0e1eV2JLW7jqmt2EMSjwSSzDoDoZWFMARnocV7X27K20ugC+6K+gkWwNRKqzBzqUErsAxXY1u9nLpFy5bGUgXP4GYkEfByGb4q5O4rqXeVWWvC8yKzhdIJyB+9pONUY1bxiorl+yVtgjGD4bBGRoKhiQQzKpyF0i3Hn5nJqyV5XtApSlApSlApSlApSlBUuZ8lSxqvoWjUAwMaUtsTMRsFZlMnZFjtUPiNMAsNSAqXX9a3PWI7jTJjvEd6vFcjiOQWmymq0e/hwFP9RgVB9QAfWgx4zn1lQND27pM4V1hVAkuzCdKjAnzI+XnG2r3E2rbW7i20dNTo9tXLagpVSWlVA6p6Tkjyg8PnPJrqq2qbtoZLLo1qgyS6EQxxErMgnpG9df2d42473Ue4XCradSQgjWXBEoACP0YO3c0HO5V7X2lRUvdABNtHRHNtignQulY1aRqAGConpnSLFwHNLN4A27gaZIGQ0AgE6WzAJGY71of6HY/RseHtaurSxtpPaQp7RIqTwl2xcY3LbWrjAaC6FWIHvaNS9tjFBNpSlApSlArje0d1haCqY1sEJBg6YLMAe0hSJ3ziDkdmq/7WtCWTBI8XMYj9FczPbMfbQcbSQrbDGAO0CBH2V6Ej3fsJ/AnY/z61rVicFiJ26YwR5kRO+3pWZcx0ifU4H8/YPWqj3xJ2Ge42j41jpYQNQiY223jv5wKWnmSJaTuIA2GwJn+TQvLBSCNzmMxGMH1n5UC4xiDvKwYke8O3b+c1nDeY/sn86PkgfP7I/P7qyZgN6CInQYJ2H/pzAMf8N3C9ui4v7OpjCcHbvUW8CQXCqYyNRwQAQVIj3WBdT+61YcvUvbVgpVRqQvebw1lGKksWy7Y7BgDIkUGniOEtEKp60ViUT39DudXQCSAxcxEZmNpBt/BclteGni2rfiaRr0jGqMxWnk3LLYK3vEW8c6WSPDU5UlACeqJUkkncCJIrvVFUrjuAu2HYhWuWtSAXCyyiHAVvrOQ7bx7pksSDXtW3irCuj22911ZW+DCD+NUsaiApMOXS05A2Y3RadlnGDqInG1ButcK95tFvT0Zd2nSuJFvBkuZBgHAhj9UNpCMutLgKOsSDnEdLg/WUlTB9DgEEC5cJwy20VEXSo2H3kknJJJJJOSSSagc45T43UrsjqrARp0t3AeQTpkdiDDHPkFZe8wBY4gEwBOQJKmfTaKk8DZu3XuW1VUa2R4mppA1TBXSIfKsCJEFSJrm2ryXVC6ckCSwgMAqloMdUB1BHac9psvstdJFxTpLDQ2uOp1Moutt3IFuAxyRpmYk1Htjkfh3LVw3j0szOIgOzKEWOrpAgYOrvtqabDVb9uEH0Vrhgi2dZBXVIKshMfui5q+CnbcS+R85S+pUQHWJXXrkQCGDgANgifKRO4mK7NKUoFKUoFKUoFKUoFKUoFKUoFVq97Mw7NZvNaVt1GsQASQqm269ILNAMxMCBAqy1xvaHiWVFRCVNwlSwwVQCWK+THAntM9qCtcJqa2lwszOyoxZmJJ6IC6vIA/PcySSdhAJLHpYdOoMVMbxqWDGaWmgREKMAgYgenYfdivLSYVpOwPnmInPoaqJ3LudvbXS63Lq9RUgjxFAOzG4w1CCIMz8d6sPAcat1SyyIJVlaJVhmDBI2IO+xFVNrIO89+5G++3wpwfFXrFxmRUe2+kMhJBlQ58Q3CcZKrGljCj5RV4pXH4bn1hll28JpIK3CFggxOrYqYkGdiNtq7FAqPxPDrcQo6hlYQQf5wfUbVIpQUXmHCNYbRcaUYgq7fXAMwx2W4IyNiokbELqSz4ki2j3AQsFQSuCZAuN0DHbVV7uWwwggEYMETkZBrZQUW+zWhF5fCMFupkhpJJ0kMRjvMbivGQ6gSYOds7DAz3yTt51b+aIzWbyqJY23CjzJUgD7apqFTmWZYnOqJmQIPfMR6VUZuq9pnzAYnHaRuPSa8lSDPSSCOqfhjVuK221gAfzJya08TccGEXU0bfEgaswDEHEiZ3G9Bst3VjcDtE/h5j1rTbsLrHh21Z3MCAo1GOzATpESWMgAY8q9DkW4bNyIKr9Z2+qgJzLGBnuKs/JeW+GC7wbjCDGyLuLa+nmfrH0CgBI5XwfhWwhbUZLM2wLMdRgdhJwPLckyTPpSopXLHKLfjG8dRJIbST0BgANQUbnpBzIBEiDmupSgVD5hxiWk1uWCyqyqsxBY6RhQTuQPnUytV60rqyMAysCrA7EEQQflQU7llm2Q/BvDW2ANm6AuD4ekMuoHS8K0SD1JcHkKtXB8CloQgiTLMTLMfNmOSfwGBAqm8dy7wruhi8YdWX32RWB8RZEF0OnUO50sIJFdL2jvhjaJukWLiSsMAjscw0+9KEEKcEBjGKDc1yxxHFoG1uLavoUlPC1rhrgX3iesrJx0nHcxPZn2ffhOJuaV/REP17Aqzh7ahSSdSgspiB0zEtXO+mG312WTpBt6yRpVngwD7uoW0dtiFABIMgNOttxNzhLj3uJ8MMyoCdKaQtwoW12wGDOdI07iI74C6Uqun2ntC7oYFbZQOl2ZW4pGNOmckh1CkhyVMKZBrocFze1dOlSQ++hxpaPMA+8PVZjvQdKlReL421aCm46IGbSpYhQWgtpE94Vj8jUqgUpSgUpSgUpSgUpSgVxfaLgi9sOoJa2S2kTLIRDqI+tGRG5UDua7VKCiuwIU4KbyNvQ/wAMH8K242+6t/MuDNh2MHwSSysNrZOWRv1VmSG90A6cQJh27YgwAMnbHeqjdSsFY7H5Hz/I1nQK6XswGBuqs+EugKPqq+dap5ADRIHSDtnVXMdwoJOwBJ+AzVm5PY8OxZQ7hF1erQCzH1LSSfM1FT6UpQKUpQKp/N+GCcQ+jAZUuFfq+IzOGYDtOgE+sncmbhVO5jxAa/dYkDTFsCRMJJ1H1JdvkF9aDQHII1QJmPugT3JrF2g6gDjDHG2/xkb/ADrx3WcsIjzWJzM/L++sXAzp2IgtuAPQd/wH21USuEYeNw7eVyR/Xtun/wA6udUbgbTM1tEXrD23YAAaUW4GLOe0hWA7kzAwY6vPubsNaWyQEE3HG+Bq8K3+8REt2mBkykVZKVG4G2627a3G1OEUO3mwAk/bNSaBSlKBSlKCDzLgVvJpYkEGVZY1K20iQRsSDjYmuJZscwtIqAcO6IAqgBmMKICjWygCNpJPmx3q00oKzzh1fhVPFcO6kuFFlSHlmJSCUBGllZpnsY3it3LePQsvDpw11FHvSi+HbYg3CpM76vLuQRjNZ8y5wyvotBWKnrLTpB/ZiPrdyc6cYM443FcTfcO2t1dphUchUGwCmBJA7kZM7DYLTxXLbNzL20JA0hohlHkrjqXc7Eb1U15bxBi29iXMQSwa2NJJB8QZ6ZUaioYnIXyn865mt62iWbjq5aW0kq9sBTl4906tMD624kAmrDwPE+Jbt3NtaK0eWoAx99BUuFt/SXXhr926pTrNlyNThHDAlpk6SVBnUCNLI09VXCzZVFVFUKqgKqgQAoEBQBsAK3UoFKUoFKUoFKUoFKUoFKUoFUO2mlriqAALl4AbABbrqoAA2iB8hV8qkMsXLo/4lw/bduH++g1QQRO8k7mDg4Hkfy3rdrEE7RvPaK8ve6T5AkZIz8RtWu3w/iRYWQ1yQ3mqH/aXPkDAO2oqO9VEy1yi7fQggW7bqQS2XKsPqoPdkHdjIO61b68r2opSlKBSlKBVW51Z0Xyw2urq/rpCNJ9VNuB+61WmuP7SWNVkuPetEXB/CJFzHc+GzwPOKCuQsuSAcgbA/VGP8qxZyB1QFncnIUAtntGI32rclsAzufPE/DHas+XcC1+4uoAJadWZvUQwtjMEnBJ7DsCQRUd32dtabCnTpLM7GRBMudLGc+6FiewArgcJ+l4gWyRq8Z3uLOUW25cAjuJFtJ2Iae9XavIqK9pSlApSlApSlBrvXAqsx2UEn4ASarPEc4vXB0fokPwa4R6k9KeUDV6MK73NWAsXSTAFtyT5AKc1VbYwPgKAiBQANh8/Ukk5JJySckmsqwuXVWNTKs4EkCT5Cd6zqoV0OQ8bobwGPS0m0fI5ZrX4svpqGNInn1u5ZaL8Rb0iRbYvcPYTbdVWf1iXBjyE4xIW6lKVFKUpQKUpQKUpQKUpQKUpQKpfFCL94fvt9sKwH/U1XSqv7ScOqXEuKNJfUG8ndVBWRtq0K4ncgd9IgOdedY0sfekBROpsZCheon4Zrt+zPAG2mpw/iHpm4QToXYxupMyZzPoABo9ngPHuHubdv7Az/wD6qy0ClKUClKUClKUCvCK9pQcZfZzhhgLcA7AX74A+A110OF4dbaBUXSo2HxySZySSSSTkkkmpNKBSlKBSlKBSlKBSlKCJxvDC6jIxIDCJGCO4InG4GCCD3BGKhW+QWh7xuXD5s5UfNbelT8xXYpQQ7PLrKAhbVtQwIYBFEg7gwM/OuHzHk5tujWLTMpVg4DAkEEFP9o3ugG4IBxiBVopQVC3wN9mCC21ud3bTCjuRBOpvIfbVm4LhUtIEQQB9pJ3Zj3JPepNR+Lv6EZ9LtpE6UGpj6KO5oJFcLjualeKsWkIIJZbqgSQWANuPUe8QNlMmARMMX+K4vFs+Da2LCZI/dfBY7e5pAM9bRFdvg+X27ZZlEu0a3bLtAAyT8BgQJkxmgnUpSgUpSgUpSgUpSgUpSgVF43hVuo1txg+W4IMhgezAgEHzFSqUFMsXzwV4fSNOhkZVuJMEBhEoQDOD0prIkT5m2cPfS4iujB0YBlZSCGByCCNxW+lApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB/9k='/>
                </Box>
              </Stack>
            </StyledCard>
          </Stack>
          
          {/* Reviews/Customer row */}

          <Box
            flex={3}
            my={3}
            sx={{ display: "flex", flexDirection: 'column' }}
          >

            {/* Review Block */}

            <StyledCard
              sx={{
                height: { xs: "340px", sm: "380px" },
                width: "100%",
                marginBottom: "16px",
                borderRadius: "16px",
              }}
            >
              <Stack sx={{height:'100%'}}>
                <Stack flex={1} pt={0.8} mb={0.4} alignItems='center' justifyContent='center'>
              <StyledTypography>Customer Review</StyledTypography>
              </Stack>
              <Stack flex={9}>
                    <DashMapper/>
              </Stack>
              <Stack px={1} mb={1.8} flex={2} justifyContent='flex-end'>
                  <Button variant='contained' onClick={(e) => dashHandler('4')} sx={{width:'100%', background:'#3974B6'}}>See More</Button>
              </Stack>
              </Stack>
            </StyledCard>
              
              {/* Customer block */}

            <Stack sx={{ width: "100%"}}>
              <StyledCard
                sx={{
                  height: { xs: "360px", sm: "350px" },
                  borderRadius: "16px",
                }}
              >
                <Stack sx={{height:'100%'}} >
                <Stack flex={1} pt={1.6} pb={0.6} alignItems='center' justifyContent='center'>
              <StyledTypography>Customers</StyledTypography>
              </Stack>
              <Stack flex={9} sx={{width:'14rem'}}  justifyContent='flex-start'>
                    <CustomerMapper/>
              </Stack>
              <Stack px={1} mb={2} flex={2} justifyContent='flex-end'>
                  <Button variant='contained' onClick={(e) => dashHandler('3')} sx={{background:'#3974B6'}}>+Add New Customer</Button>
              </Stack>
              </Stack>
            </StyledCard>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
