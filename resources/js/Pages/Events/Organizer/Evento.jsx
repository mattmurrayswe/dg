import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function Evento({ }) {

    return (
        <div className="flex flex-wrap justify-end">
            <Typography variant="subtitle1" color="gray" style={{ marginTop: '1em' }} gutterBottom>
                Evento
            </Typography>
            <TextField
                label="Nome do Evento"
                defaultValue="Churrascada JDM"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Data de Realização"
                defaultValue="25/11/2023"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Descrição do Evento"
                defaultValue="Desfrute da fusão perfeita entre carros japoneses e churrasco de alta octanagem. O evento Churrascada Automotiva JDM é um encontro épico de entusiastas da cultura automotiva e da culinária grelhada, onde paixão e sabor se unem em grande estilo! 🔥🚗 #ChurrascadaJDM"
                multiline={true}
                rows={5}
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}

            />
        </div>
    );
}
