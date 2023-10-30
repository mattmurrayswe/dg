

import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline, Typography } from '@mui/material';
import Footer from './Footer';
import Produtos from './Produtos';
import Estatisticas from './Estatisticas';
import HeaderLogos from './HeaderLogos';
import Sidebar from './Sidebar';

export default function Home({ }) {

    const dgEvents = '/image/logos-font-fasten/events.png';
    const imgDivulgacao = '/image/events/jdm/divulgacao-1.jpeg';

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <div>
            <CssBaseline />
            <div className='bg-black min-h-screen'>
                <Head title="dg - Events">
                    <link rel="icon" href={dgEvents} type="image/x-icon" />
                </Head>
                <ThemeProvider theme={darkTheme}>
                    <div className='flex gap-16'>
                        <Sidebar />
                        <div className='flex flex-wrap gap-16'>
                            <HeaderLogos
                                dgServiceImg={dgEvents}
                            />
                            <img src={imgDivulgacao} alt="" style={{
                                    height: '540px',
                                    borderRadius: '2%',
                            }}/>
                            <Produtos />
                        </div>
                    </div>
                    {/* <div className='flex flex-wrap first-letter:items-center mb-8 w-full'>
                        <Button variant="outlined" color='primary' style={{ marginRight: '30px', backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous' }}>Eventos Anteriores</Button>
                        <Button variant="outlined" color='primary' style={{ marginRight: '30px', backgroundColor: '#0047FF', color: 'white', fontFamily: 'Righteous' }}>Criar Novo Evento</Button>
                    </div> */}
                </ThemeProvider>
                <Footer />
            </div>
        </div>
    );
}
