import * as React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment, Typography } from '@mui/material';

export default function Ingressos({ }) {

    return (
        <div>
            <Typography variant="subtitle1" color="gray" className='w-full flex justify-end' style={{ marginTop: '1em' }} gutterBottom>
                Ingressos
            </Typography>
            <Typography variant="subtitle2" color="gray" className='w-full flex justify-end' style={{ marginTop: '3px', marginBottom: '7px' }} gutterBottom>
                Tipo 1
            </Typography>
            <div className='w-full flex justify-start'>
            <TextField
                    label="Tipo do Ingresso"
                    defaultValue="Visitante"
                    className='w-fit'
                    style={{ marginBottom: '1em', marginRight: '7px' }}
                    id="outlined-number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Valor"
                    defaultValue="59,00"
                    className='w-fit text-white'
                    style={{ marginBottom: '1em', marginRight: '7px' }}
                    id="outlined-number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment:
                        <InputAdornment position="start" className='p-0'>
                            R$
                        </InputAdornment>,
                    }}
                />
                <TextField
                    label="Quantidade de Ingressos"
                    defaultValue="200"
                    className='w-fit'
                    style={{ marginBottom: '1em' }}
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>

            <TextField
                label="Título do Ingresso"
                defaultValue="Visitante"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Descrição do Ingresso"
                defaultValue="Almoço, acesso à exposição e demais atrações."
                multiline={true}
                rows={2}
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Typography variant="subtitle2" color="gray" className='w-full flex justify-end' style={{ marginTop: '1em', marginBottom: '7px' }}gutterBottom>
                Tipo 2
            </Typography>
            <div className='w-full flex justify-start'>
                <TextField
                    label="Tipo do Ingresso"
                    defaultValue="Expositor"
                    className='w-fit'
                    style={{ marginBottom: '1em', marginRight: '7px' }}
                    id="outlined-number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Valor"
                    defaultValue="79,00"
                    className='w-fit'
                    style={{ marginBottom: '1em', marginRight: '7px' }}
                    id="outlined-number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment:
                        <InputAdornment position="start" className='p-0'>
                            R$
                        </InputAdornment>,
                    }}
                />
                <TextField
                    label="Quantidade de Ingressos"
                    defaultValue="50"
                    className='w-fit'
                    style={{ marginBottom: '1em' }}
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <TextField
                label="Título do Ingresso"
                defaultValue="Expositor - Carro + Motorista"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Descrição do Ingresso"
                defaultValue="Direito à exposição de um veículo e almoço. Obs.: Acompanhantes não receberão credenciais."
                multiline={true}
                rows={2}
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Typography variant="subtitle2" color="gray" className='w-full flex justify-end' style={{ marginTop: '1em', marginBottom: '7px' }} gutterBottom>
                Tipo 3
            </Typography>
            <div className='w-full flex justify-start'>
                <TextField
                    label="Tipo do Ingresso"
                    defaultValue="Patrocinador"
                    className='w-fit'
                    style={{ marginBottom: '1em', marginRight: '7px' }}
                    id="outlined-number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Valor"
                    defaultValue="600,00"
                    className='w-fit'
                    style={{ marginBottom: '1em', marginRight: '7px' }}
                    id="outlined-number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment:
                        <InputAdornment position="start" className='p-0'>
                            R$
                        </InputAdornment>,
                    }}
                />
                <TextField
                    label="Quantidade de Ingressos"
                    defaultValue="20"
                    className='w-fit'
                    style={{ marginBottom: '1em' }}
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <TextField
                label="Título do Ingresso"
                defaultValue="Patrocinador -  Carro + Motorista"
                className='w-full'
                style={{ marginBottom: '1em' }}
                id="outlined-number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Descrição do Ingresso"
                defaultValue="Direito à divulgação de sua marca nos recursos visuais do evento."
                multiline={true}
                rows={2}
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
