
import * as React from 'react';
import { Typography } from '@mui/material';
import ImageProfile from './ImageProfile';

export default function Estatisticas({ }) {

    const jdmLogo = '/image/events/jdm/profile.jpeg';

    return (
        <div className='flex flex-wrap items-center content-start w-1/6'>
            <div className='flex items-center justify-start w-full mb-8'>
                <ImageProfile img={jdmLogo} />
                <div>
                    <Typography style={{ color: "white" }}>JDM Experience</Typography>
                    <Typography style={{ color: "white" }}>@jdm.experience</Typography>
                </div>
            </div>
            {/* <div className='flex flex-wrap items-center mb-8 w-full'>
                <Typography variant="subtitle2" color="gray" className='w-full flex justify-end' style={{ marginTop: '3px', marginBottom: '7px' }} gutterBottom>
                    All-time Events
                </Typography>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>R$ 103.731,90</Typography>
                    <Typography style={{ color: "grey" }}>Total</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>R$ 53.731,00</Typography>
                    <Typography style={{ color: "grey" }}>Ingressos</Typography>
                </div>
                <div className='flex justify-between w-full mb-3'>
                    <Typography style={{ color: "grey" }}>R$ 50.000,90</Typography>
                    <Typography style={{ color: "grey" }}>Produtos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>33</Typography>
                    <Typography style={{ color: "grey" }}>Eventos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>6.837</Typography>
                    <Typography style={{ color: "grey" }}>Ingressos Vendidos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>5.246</Typography>
                    <Typography style={{ color: "grey" }}>Produtos Vendidos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>2.301</Typography>
                    <Typography style={{ color: "grey" }}>Carros Expostos</Typography>
                </div>
            </div>
            <div className='flex flex-wrap items-center mb-8 w-full'>
                <Typography variant="subtitle2" color="gray" className='w-full flex justify-end' style={{ marginTop: '3px', marginBottom: '7px' }} gutterBottom>
                    Próximo Evento
                </Typography>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>R$ 23.731,90</Typography>
                    <Typography style={{ color: "grey" }}>Total</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>R$ 12.512,30</Typography>
                    <Typography style={{ color: "grey" }}>Ingressos</Typography>
                </div>
                <div className='flex justify-between w-full mb-3'>
                    <Typography style={{ color: "grey" }}>R$ 11.219,60</Typography>
                    <Typography style={{ color: "grey" }}>Produtos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>200/500</Typography>
                    <Typography style={{ color: "grey" }}>Ingressos Vendidos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>30/90</Typography>
                    <Typography style={{ color: "grey" }}>Produtos Vendidos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>45/70</Typography>
                    <Typography style={{ color: "grey" }}>Carros Expostos</Typography>
                </div>
                <div className='flex justify-between w-full'>
                    <Typography style={{ color: "grey" }}>12/20</Typography>
                    <Typography style={{ color: "grey" }}>Patrocinadores</Typography>
                </div>
            </div> */}
        </div>
    );
}
