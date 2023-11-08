
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
    const c5 = '/image/club/members/cars/i5.JPG';
    const c6 = '/image/club/members/cars/i6.JPG';
    const c7 = '/image/club/members/cars/i7.JPG';
    const c8 = '/image/club/members/cars/i8.JPG';
    const c9 = '/image/club/members/cars/i9.JPG';
    const c10 = '/image/club/members/cars/i10.JPG';
    const c11 = '/image/club/members/cars/i11.JPG';
    const c12 = '/image/club/members/cars/i12.JPG';
    const c13 = '/image/club/members/cars/i13.JPG';
    const c14 = '/image/club/members/cars/i14.JPG';
    const c15 = '/image/club/members/cars/i15.JPG';
    const c16 = '/image/club/members/cars/i16.JPG';
    const c17 = '/image/club/members/cars/i17.JPG';
    const c18 = '/image/club/members/cars/i18.JPG';
    const c19 = '/image/club/members/cars/i19.JPG';




    const p1 = '/image/club/members/profiles/i1.JPG';
    const p2 = '/image/club/members/profiles/i2.JPG';
    const p3 = '/image/club/members/profiles/i3.JPG';
    const p4 = '/image/club/members/profiles/i4.JPG';
    const p5 = '/image/club/members/profiles/i5.JPG';
    const p6 = '/image/club/members/profiles/i6.JPG';
    const p7 = '/image/club/members/profiles/i7.JPG';
    const p8 = '/image/club/members/profiles/i8.JPG';
    const p9 = '/image/club/members/profiles/i9.JPG';
    const p10 = '/image/club/members/profiles/i10.JPG';
    const p11 = '/image/club/members/profiles/i11.JPG';
    const p12 = '/image/club/members/profiles/i12.JPG';
    const p13 = '/image/club/members/profiles/i13.JPG';
    const p14 = '/image/club/members/profiles/i14.JPG';
    const p15 = '/image/club/members/profiles/i15.JPG';
    const p16 = '/image/club/members/profiles/i16.JPG';
    const p17 = '/image/club/members/profiles/i17.JPG';
    const p18 = '/image/club/members/profiles/i18.JPG';
    const p19 = '/image/club/members/profiles/i19.JPG';













    const dgClub = '/image/logos-font-fasten/JDMEX.png';

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <div>
            <CssBaseline />
            <div className='bg-black pt-14 2xl:px-10'>
                <Head title="JDM EXPERIENCE - EXPOSIÇÃO">
                    <link rel="icon" href={dgClub} type="image/x-icon" />
                </Head>
                <HeaderLogos
                    dgServiceImg={dgClub}
                />
                <div className='flex flex-wrap justify-center'>
                    <ClubCard imgPath={c9} profImg={p9} profName="@68gangperformance" shotType="Backshot Lateral Esquerda" brand="Toyota" model="Supra" year="" rarity="legendary" role="Convidado" clubNumber="1"></ClubCard>
                    <ClubCard imgPath={c10} profImg={p10} profName="@satoshigarage" shotType="Backshot Lateral Esquerda" brand="Nissan" model="Skyline R34" year="" rarity="legendary" role="Convidado" clubNumber="2"></ClubCard>
                    <ClubCard imgPath={c19} profImg={p19} profName="041adesivos" shotType="Backshot Lateral Esquerda" brand="Mercedes-Benz" model="A 45 AMG" year="" rarity="epic" role="Patrocinador" clubNumber="3"></ClubCard>
                    <ClubCard imgPath={c12} profImg={p12} profName="@malvadaogarage" shotType="Backshot Lateral Esquerda" brand="Mitsubishi " model="Lancer" year="" rarity="epic" role="Patrocinador" clubNumber="4"></ClubCard>
                    <ClubCard imgPath={c15} profImg={p15} profName="@gli_dark" shotType="Backshot Lateral Esquerda" brand="Volkswagen " model="Jetta GLI" year="" rarity="uncommon" role="Expositor" clubNumber="5"></ClubCard>
                    <ClubCard imgPath={c6} profImg={p6} profName="@matheus_leindorf" shotType="Frontshot Lateral Esquerda" brand="Chevrolet" model="Onix" year="" rarity="uncommon" role="Expositor" clubNumber="6"></ClubCard>
                    <ClubCard imgPath={c7} profImg={p7} profName="@308gtwhite" shotType="Backshot Lateral Esquerda" brand="Peugeot" model="308" year="" rarity="uncommon" role="Expositor" clubNumber="7"></ClubCard>
                    <ClubCard imgPath={c8} profImg={p8} profName="@bruniinhaid" shotType="Frontshot Lateral Esquerda" brand="Honda" model="Civic" year="" rarity="uncommon" role="Expositor" clubNumber="8"></ClubCard>
                    <ClubCard imgPath={c11} profImg={p11} profName="@mt.lancerex" shotType="Backshot Lateral Esquerda" brand="Mitsubishi " model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="9"></ClubCard>
                    <ClubCard imgPath={c13} profImg={p13} profName="@lancer.red.double" shotType="Backshot Lateral Esquerda" brand="Mitsubishi " model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="10"></ClubCard>
                    <ClubCard imgPath={c14} profImg={p14} profName="@imbackgarage" shotType="Backshot Lateral Esquerda" brand="Mitsubishi " model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="11"></ClubCard>
                    <ClubCard imgPath={c16} profImg={p16} profName="@gabrielneto" shotType="Backshot Lateral Esquerda" brand="Volkswagen " model="Gol G3" year="" rarity="uncommon" role="Expositor" clubNumber="12"></ClubCard>
                    <ClubCard imgPath={c17} profImg={p17} profName="@edemir.adv" shotType="Backshot Lateral Esquerda" brand="Lexus " model="" year="" rarity="uncommon" role="Expositor" clubNumber="13"></ClubCard>
                    <ClubCard imgPath={c18} profImg={p18} profName="@duraaes_oficial" shotType="Backshot Lateral Esquerda" brand="Honda " model="Civic" year="" rarity="uncommon" role="Expositor" clubNumber="14"></ClubCard>
                </div>
                <Footer />
            </div>
        </div>
    );
}
