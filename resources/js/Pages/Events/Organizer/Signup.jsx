
import HeaderLogos from '../../Duels/HeaderLogos';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Typography } from '@mui/material';
import Evento from './Evento';
import Organizador from './Organizador';
import Ingressos from './Ingressos';
import Footer from './Footer';

export default function Signup({ }) {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <div>
            <CssBaseline />
            <div className='bg-black pt-14 min-h-screen px-2'>
                <Head title="dg - Events">
                    <link rel="icon" href="/image/logos-font-fasten/instastore.png" type="image/x-icon" />
                </Head>
                <HeaderLogos />
                <ThemeProvider theme={darkTheme}>
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-wrap justify-end max-w-[700px]'>
                            <Organizador />
                            <Evento />
                            <Ingressos />
                            <Button variant="outlined" color='secondary'>Criar Evento</Button>
                        </div>
                    </div>
                </ThemeProvider>
                <Footer />
            </div>
        </div>
    );
}
