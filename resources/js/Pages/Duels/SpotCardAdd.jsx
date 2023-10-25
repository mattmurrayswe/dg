import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function SpotCardAdd({ }) {

  const cardStyle = {
    height: '530px',
    width: '360px',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid rgba(209, 213, 219, 1)', // Use the same color as gray-500
  };

  return (
    <Card className="m-5 bg-gray-500" sx={cardStyle}>
      <CardContent className='flex justify-center items-center h-full text-[80px] text-white'>
        +
      </CardContent>
    </Card>
  );
}
