import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SpotCard({
  imgPath,
  profImg,
  profName,
  brand,
  model,
  year,
  color
}) {
  const boxShadow = ` 
    0px 0px 10px 5px rgba(240, 6, 6, 0.5), 0px 0px 10px 10px rgb(43 78 174 / 50%)
  `;

  const cardStyle = {
    boxShadow,
    height: '530px',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    backgroundColor: 'black',
  };

  return (
    <Card className="m-5 bg-black" sx={cardStyle}>
      <CardContent sx={ { paddingX: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
          <img
            className="mr-2"
            src={profImg} // Replace with the actual image URL
            alt="Spotter's Profile"
            style={{
              width: '40px', // Adjust the size as needed
              height: '40px', // Adjust the size as needed
              borderRadius: '50%', // Makes the image rounded
              border: '1px solid gray', // Add a grey border
            }}
          />
          <Typography variant="body2" color="white">
          {profName}
          </Typography>
        </div>
      </CardContent>
      <CardMedia sx={{ height: 260 }} image={imgPath} title="green iguana" />
      <CardContent sx={ { paddingX: 0.5 }}>
        <Typography gutterBottom variant="h5" component="div">
          {model}
        </Typography>
        <Typography variant="body2" color="white">
          {brand + ' ' + model}
        </Typography>
        <Typography variant="body2" color="white">
          {year}
        </Typography>
        <Typography variant="body2" color="white">
          {color}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingX: 0.5 }}>
        <Button variant="outlined" size="small">
          Duel
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
