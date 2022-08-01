import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function BadgePaperComponent({data,height,width,bg,color}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: width,
                    height: height,
                    background:`${bg}`,
                    textAlign:'center',
                    color:`${color}`
                },
            }}
        >
            <Paper elevation={2}>{data}</Paper>
        </Box>
    );
}