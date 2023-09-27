import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SpotCardAdd({ }) {
  const boxShadowLegendary = ` 
    1px 0px 10px 5px rgb(240 129 6 / 34%), 0px 0px 10px 10px rgb(174 100 43 / 50%)
  `;
  const boxShadowEpic = ` 
    1px 0px 10px 5px rgb(240 129 6 / 83%), 0px 0px 10px 10px rgb(174 100 43 / 50%)
  `;


  const cardStyle = {
    boxShadow: boxShadowLegendary,
    height: '530px',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    backgroundColor: 'black',
  };

  return (
    <Card className="m-5 bg-black" sx={cardStyle}>
      <CardContent className='flex justify-center items-center h-full text-[150px] text-gray-500'>
        +
      </CardContent>
    </Card>
  );
}
