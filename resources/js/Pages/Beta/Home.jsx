

import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline } from '@mui/material';

import FormIngressos from '../Events/Organizer/FormIngressos';
import Footer from '../Events/Organizer/Footer';
import FormEvento from '../Events/Organizer/FormEvento';
import HeaderLogos from '../Beta/HeaderLogos';
import Organizador from '../Events/Organizer/Organizador';
import Fields from './Fields';

export default function Home({ }) {

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
                            <Fields />
                            {/* <FormEvento />
                            <FormIngressos /> */}
                            <Button variant="outlined" color='primary' style={{backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous'}}>SOLICITAR CHAVE BETA</Button>
                        </div>
                    </div>
                </ThemeProvider>
                <Footer />
            </div>
        </div>
    );
}
