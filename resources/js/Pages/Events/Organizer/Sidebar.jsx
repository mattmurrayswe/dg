
import * as React from 'react';
import { Link, Typography } from '@mui/material';
import ImageProfile from './ImageProfile';


export default function Sidebar({ }) {

    const jdmLogo = '/image/events/jdm/profile.jpeg';

    return (
        <div className='flex flex-wrap items-center content-start w-1/6'>
            <div className='flex items-center justify-start w-full m-8'>
                <ImageProfile img={jdmLogo} />
                <div>
                    <Typography style={{ color: "white" }}>JDM Experience</Typography>
                    <Typography style={{ color: "white" }}>@jdm.experience</Typography>
                </div>
            </div>
            <div className='flex flex-wrap w-full m-8'>
                <Link className='w-full' href="#">Criar Novo Evento</Link>
                <Link className='w-full' href="#">Ingressos</Link>
                <Link className='w-full' href="#">Produtos</Link>
                <Link className='w-full' href="#">Eventos Anteriores</Link>
                <Link className='w-full' href="#">Painel de Estatísticas</Link>
            </div>
        </div>
    );
}
