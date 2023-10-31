
import HeaderLogos from '../../Duels/HeaderLogos';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline } from '@mui/material';
import Organizador from './Organizador';
import FormIngressos from './FormIngressos';
import Footer from './Footer';
import FormEvento from './FormEvento';

export default function Signup({ }) {

    const dgEvents = '/image/logos-font-fasten/events.png';

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
                    <link rel="icon" href={dgEvents} type="image/x-icon" />
                </Head>
                <HeaderLogos
                    dgServiceImg={dgEvents}
                />
                <ThemeProvider theme={darkTheme}>
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-wrap justify-end max-w-[700px]'>
                            <Organizador />
                            <FormEvento />
                            <FormIngressos />
                            <Button variant="outlined" color='primary' style={{backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous'}}>Criar Evento</Button>
                        </div>
                    </div>
                </ThemeProvider>
                <Footer />
            </div>
        </div>
    );
}
