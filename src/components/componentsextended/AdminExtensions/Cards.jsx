import { Card, styled, Typography } from "@mui/material";

export const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 0,
    boxShadow: "1px 1px 10px  darkgrey",
    borderRadius: "10px",
  });

export const StyledTypography = styled(Typography)({
    fontWeight:'bold'
  });