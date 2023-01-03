import SearchResults from "./SearchResults";
import data from './DummyData'
import React, { useState } from 'react'
import { Box, styled, TablePagination } from "@mui/material";

const StyleBox = styled(Box)({
  
  display:'grid',
  placeItems: 'center',
});

const FetchData = () => {
    const products = data.products;
    const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(12)

  const handleChangePage = (even, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


    if (products.length > 0) {
        return (
            <>
          {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(prod => (
            <SearchResults
              key={prod.id}
              id={prod.id}
              image={prod.image}
              location={prod.location}
              city={prod.city}
              price={prod.Price}
            />
            
          ))}
          
        <StyleBox mt={6}
        sx={{width: '100%'}}>       
          <TablePagination
          rowsPerPageOptions={[6, 12, 18]}
          component="div"
          count={data.products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </StyleBox>   
          </>
        )
  };
}
  
  export default FetchData;