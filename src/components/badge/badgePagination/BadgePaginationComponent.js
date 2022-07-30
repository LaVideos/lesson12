import React from 'react';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const BadgePaginationComponent = ({currentPage,paginate,count}) => {
    const handleChange = (event, value) => {
        paginate(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={count} page={currentPage} onChange={handleChange} variant="outlined" />
        </Stack>
    );
};

export default BadgePaginationComponent;