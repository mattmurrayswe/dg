
import React, { useEffect } from 'react';



import SpotCardAdd from '../Duels/SpotCardAdd';
import { Head } from '@inertiajs/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Footer from '../Events/Organizer/Footer';
import HeaderLogos from './HeaderLogos';
import ClubCard from './ClubCard';

export default function Home({ }) {

    const c1 = '/image/club/members/cars/i1.JPG';
    const c2 = '/image/club/members/cars/i2.JPG';
    const c3 = '/image/club/members/cars/i3.JPG';
    const c4 = '/image/club/members/cars/i4.JPG';

    const p1 = '/image/club/members/profiles/i1.JPG';
    const p2 = '/image/club/members/profiles/i2.JPG';
    const p3 = '/image/club/members/profiles/i3.JPG';
    const p4 = '/image/club/members/profiles/i4.JPG';

    const dgClub = '/image/logos-font-fasten/club.png';

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <div>
            <CssBaseline />
            <div className='bg-black pt-14 2xl:px-10'>
                <Head title="dg - Club">
                    <link rel="icon" href={dgClub} type="image/x-icon" />
                </Head>
                <HeaderLogos
                    dgServiceImg={dgClub}
                />
                <div className='flex flex-wrap justify-center'>
                    <ClubCard imgPath={c1} profImg={p2} profName="renato.a.carneiro" shotType="Frontshot Lateral Esquerda" brand="Puma" model="Puma GTS" year="1980" rarity="legendary" role="Founder" clubNumber="1"></ClubCard>
                    <ClubCard imgPath={c3} profImg={p1} profName="davi_munizz" shotType="Backshot Lateral Esquerda" brand="Mini" model="Mini Cooper S" year="???" rarity="legendary" role="Founder" clubNumber="2"></ClubCard>
                    <ClubCard imgPath={c4} profImg={p4} profName="murraytechlead" shotType="Frontshot Lateral Esquerda" brand="Mini" model="Mini Cooper S" year="???" rarity="legendary" role="Founder" clubNumber="3"></ClubCard>
                    <ClubCard imgPath={c2} profImg={p3} profName="cainanlucasbr" shotType="Backshot Lateral Esquerda" brand="Subaru" model="Forester" year="???" rarity="rare" role="Staff" clubNumber="4"></ClubCard>
                </div>
                <Footer />
            </div>
        </div>
    );
}
