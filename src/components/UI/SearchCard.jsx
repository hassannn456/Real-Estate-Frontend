import Card from '@mui/material/Card';
import styled from "@emotion/styled";

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  margin:'16px',
  padding:0,
  boxShadow:'1px 10px 20px 8px grey'
});


export default StyledCard;