import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SpotCard({ imgPath }) {
  const boxShadow = ` 
    0px 0px 10px 5px rgba(240, 6, 6, 0.5), 0px 0px 10px 10px rgb(43 78 174 / 50%)
  `;

  const cardStyle = {
    width: 345,
    boxShadow,
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    backgroundColor: 'black',
  };

  return (
    <Card className="m-5 bg-black" sx={cardStyle}>
      <CardContent>
        <Typography variant="body2" color="white">
          @ps_carspotter
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 260 }} image={imgPath} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mini
        </Typography>
        <Typography variant="body2" color="white">
          Mini Cooper S
        </Typography>
        <Typography variant="body2" color="white">
          2015
        </Typography>
        <Typography variant="body2" color="white">
          Thunder Gray Metálico
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Duel
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
