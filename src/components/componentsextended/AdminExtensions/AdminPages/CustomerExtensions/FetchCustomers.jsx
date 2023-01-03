import data from "../../../HomeExtensions/ReviewsExtension/ApiReviews";
import React, { useState } from "react";
import { Box, Pagination, styled } from "@mui/material";
import ResultsCustomer from "./ResultsCustomer";

const StyleBox = styled(Box)({
  display: "grid",
  placeItems: "center",
});

const FetchCustomers = () => {
  const products = data.products;
  const [page, setPage] = useState(1);

  const PER_PAGE = 12;

  const count = Math.ceil(products.length / PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
  };

  if (products.length > 0) {
    return (
      <>
        {products
          .slice((page -1) * PER_PAGE, (page -1) * PER_PAGE + PER_PAGE)
          .map((prod) => (
            <ResultsCustomer
              key={prod.id}
              id={prod.id}
              name={prod.name}
              image={prod.image}
              location={prod.location}
              date={prod.date}
              time={prod.time}
              contact={prod.contact}
              email={prod.email}
            />
          ))}

        <StyleBox mt={6} sx={{ width: "100%" }}>
          <Pagination
            page={page}
            count={count}
            size="small"
            onChange={handleChange}
          />
        </StyleBox>
      </>
    );
  }
};

export default FetchCustomers;
