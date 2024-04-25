import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, Typography } from '@mui/material';

const business = [
    {
        value: 'organizador',
        label: 'Organizador de Eventos',
    },
    {
        value: 'entusiasta',
        label: 'Entusiasta Automotivo',
    },
    {
        value: 'proprietario',
        label: 'Proprietário Automotivo',
    },
    {
        value: 'detailer',
        label: 'Detailer/Detalhador',
    },
    {
        value: 'preparador',
        label: 'Preparador',
    },
    {
        value: 'mecanico',
        label: 'Mecânico',
    },
    {
        value: 'importador',
        label: 'Importador Automotivo',
    },
    {
        value: 'importador-pecas',
        label: 'Importador de Peças',
    },
    {
        value: 'importador',
        label: 'Importador de Peças',
    },
];

export default function Fields({ }) {

    return (
        <div className="flex flex-wrap justify-end w-full">
            <Typography variant="subtitle1" color="gray" gutterBottom>
                Inscreva-se
            </Typography>
            <TextField
                label="Email"
                defaultValue="dg@digitalgarage.com.br"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Business"
                defaultValue="Organizador de Eventos"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                select
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            >
            {business.map((option) => (
                <MenuItem className='max-w-[700px]' key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
            </TextField>

        </div>
    );
}
