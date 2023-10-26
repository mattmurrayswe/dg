import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function Organizador({ }) {

    return (
        <div className="flex flex-wrap justify-end">
            <Typography variant="subtitle1" color="gray" gutterBottom>
                Organizador
            </Typography>
            <TextField
                label="Email"
                defaultValue="leolourenco@jdmexperience.com.br"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Senha"
                defaultValue="JDM Experience"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="password"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Nome do Organizador"
                defaultValue="JDM Experience"
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
