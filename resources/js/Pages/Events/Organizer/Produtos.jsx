
import HeaderLogos from '../../Duels/HeaderLogos';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Typography } from '@mui/material';
import Footer from './Footer';
import ImageProfile from './ImageProfile';

export default function Produtos({ }) {

    const imgProduto1 = '/image/events/jdm/produto-1.jpeg';
    const imgProduto2 = '/image/events/jdm/produto-2.jpeg';
    const imgProduto3 = '/image/events/jdm/produto-3.jpeg';
    const imgProduto4 = '/image/events/jdm/produto-4.jpeg';

    return (
        <div className='flex flex-wrap justify-start gap-12 w-full'>
            {/* <Typography variant="subtitle2" color="gray" className='w-full flex justify-end' style={{ marginTop: '3px', marginBottom: '7px' }} gutterBottom>
                Produtos
            </Typography> */}
            
            <div className='max-w-[250px]'>
                <img src={imgProduto1} alt="" style={{
                    maxWidth: '250px',
                    borderRadius: '2%',
                }} />
                <div className='mt-2'>
                    <Typography variant="subtitle2" className='h-12' color="white">Copo Long Drink + Chaveiro Abridor + Adesivo</Typography>
                    <Typography variant="subtitle2" color="white">ID: 38291</Typography>
                    <div className='flex justify-between items-center mt-2'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 10,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Unitário</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 1.070,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Arrecadado</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">107/203</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Unidades Vendidas</Typography>
                    </div>
                    <div className='flex justify-end mt-2'>
                        <Button variant="outlined" color='primary' style={{ backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous' }}>Editar</Button>
                    </div>
                </div>
            </div>
            <div>
                <img src={imgProduto2} alt="" style={{
                    maxWidth: '250px',
                    borderRadius: '2%',
                }} />
                <div className='max-w-[250px]'>
                    <Typography variant="subtitle2" className='h-12' color="white">Kit Camisetas - Silhueta + Lancer + Domo</Typography>
                    <Typography variant="subtitle2" color="white">ID: 38291</Typography>
                    <div className='flex justify-between items-center mt-2'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 149,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Unitário</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 2.533,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Arrecadado</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">17/40</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Unidades Vendidas</Typography>
                    </div>
                    <div className='flex justify-end mt-2'>
                        <Button variant="outlined" color='primary' style={{ backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous' }}>Editar</Button>
                    </div>
                </div>
            </div>
            <div>
                <img src={imgProduto3} alt="" style={{
                    maxWidth: '250px',
                    borderRadius: '2%',
                }} />
                <div className='max-w-[250px]'>
                    <Typography variant="subtitle2" className='h-12' color="white">Camisetas Comuns</Typography>
                    <Typography variant="subtitle2" color="white">ID: 38291</Typography>
                    <div className='flex justify-between items-center mt-2'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 59,90</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Unitário</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 9.440,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Arrecadado</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">160/690</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Unidades Vendidas</Typography>
                    </div>
                    <div className='flex justify-end mt-2'>
                        <Button variant="outlined" color='primary' style={{ backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous' }}>Editar</Button>
                    </div>
                </div>
            </div>
            <div>
                <img src={imgProduto4} alt="" style={{
                    maxWidth: '250px',
                    borderRadius: '2%',
                }} />
                <div className='max-w-[250px]'>
                    <Typography variant="subtitle2" className='h-12' color="white">Camiseta Supra Ed. Especial</Typography>
                    <Typography variant="subtitle2" color="white">ID: 38291</Typography>
                    <div className='flex justify-between items-center mt-2'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 59,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Unitário</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">R$ 7.670,00</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Valor Arrecadado</Typography>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Typography variant="h6" className='max-w-[250px] flex justify-end' color="white">130/200</Typography>
                        <Typography variant="subtitle2" className='max-w-[250px] flex justify-end' color="white">Unidades Vendidas</Typography>
                    </div>
                    <div className='flex justify-end mt-2'>
                        <Button variant="outlined" color='primary' style={{ backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous' }}>Editar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
