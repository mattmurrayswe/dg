import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import InputsEvento from './InputsEvento';

export default function FormEvento({ }) {

    return (
        <div className="flex flex-wrap justify-end">
            <Typography variant="subtitle1" color="gray" style={{ marginTop: '1em' }} gutterBottom>
                Evento
            </Typography>
            <InputsEvento />
        </div>
    );
}
