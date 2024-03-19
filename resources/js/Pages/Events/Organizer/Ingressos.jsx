import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Ingressos({ }) {

    const imgDivulgacao = '/image/events/jdm/divulgacao-1.jpeg';

    return (
        <div className='flex flex-wrap justify-start gap-6 w-full'>
                <Card sx={{ width: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Visitante
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                            Visitante
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            R$ 59,00
                        </Typography>
                        <Typography variant="body2">
                            Almoço, acesso à exposição e demais atrações.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">200</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Expositor
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                            Expositor - Carro + Motorista
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            R$ 79,00
                        </Typography>
                        <Typography variant="body2">
                            Direito à exposição de um veículo e almoço.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">50</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Patrocinador
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                            Patrocinador -  Carro + Motorista
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            R$ 79,00
                        </Typography>
                        <Typography variant="body2">
                            Direito à divulgação de sua marca nos recursos visuais do evento.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">50</Button>
                    </CardActions>
                </Card>
        </div>
    );
}
