import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as React from 'react';

export default function PageTitle({ }) {

    return (
        <Typography sx={{ display: 'flex', alignItems: 'center', color: '#f85c94', fontSize: 24, fontWeight: 'bold'}}>
          <ArrowForwardIcon sx={{fontSize: 26, marginX: 1}} /> {/* Adjust fontSize as needed */}
          YOUR COLLECTION
        </Typography>
      );
}
