import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Spots({}) {

    const imagePath = '/image/spots/mini-4.jpg';

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imagePath}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mini
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mini Cooper S
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2015
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Thunder Gray Metálico
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small">Duel</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mini
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mini Cooper S
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2015
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Thunder Gray Metálico
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small">Duel</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mini
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mini Cooper S
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2015
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Thunder Gray Metálico
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small">Duel</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mini
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mini Cooper S
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2015
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Thunder Gray Metálico
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small">Duel</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mini
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mini Cooper S
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2015
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Thunder Gray Metálico
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small">Duel</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
            <div className='p-5 bg-gray-800 text-white'>
                <div className='bg-gray-600 rounded-lg border border-gray-500 bg-opacity-75'>
                    <p>@minitrovaostg2</p>
                    <p>Mini Cooper S</p>
                    <p>3/10.000</p>
                </div>
            </div>
        </>
    );
}
