
import React, { useEffect } from 'react';

import { Head } from '@inertiajs/react';
import { AppBar, CssBaseline, Toolbar, Typography, createTheme } from '@mui/material';
import Footer from '../Events/Organizer/Footer';
import HeaderLogos from './HeaderLogos';
import ClubCard from './ClubCard';
import { ThemeProvider } from '@emotion/react';

export default function Home({ }) {

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
    const c20 = '/image/club/members/cars/i20.JPG';
    const c21 = '/image/club/members/cars/i21.JPG';
    const c22 = '/image/club/members/cars/i22.JPG';
    const c23 = '/image/club/members/cars/i23.JPG';
    const c24 = '/image/club/members/cars/i24.JPG';
    const c25 = '/image/club/members/cars/i25.JPG';
    const c26 = '/image/club/members/cars/i26.JPG';
    const c27 = '/image/club/members/cars/i27.JPG';
    const c28 = '/image/club/members/cars/i28.JPG';
    const c29 = '/image/club/members/cars/i29.JPG';
    const c30 = '/image/club/members/cars/i30.JPG';
    const c31 = '/image/club/members/cars/i31.JPG';
    const c32 = '/image/club/members/cars/i32.JPG';
    const c33 = '/image/club/members/cars/i33.JPG';
    const c34 = '/image/club/members/cars/i34.JPG';
    const c35 = '/image/club/members/cars/i35.JPG';

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
    const p20 = '/image/club/members/profiles/i20.JPG';
    const p21 = '/image/club/members/profiles/i21.JPG';
    const p22 = '/image/club/members/profiles/i22.JPG';
    const p23 = '/image/club/members/profiles/i23.JPG';
    const p24 = '/image/club/members/profiles/i24.JPG';
    const p25 = '/image/club/members/profiles/i25.JPG';
    const p26 = '/image/club/members/profiles/i26.JPG';
    const p27 = '/image/club/members/profiles/i27.JPG';
    const p28 = '/image/club/members/profiles/i28.JPG';
    const p29 = '/image/club/members/profiles/i29.JPG';
    const p30 = '/image/club/members/profiles/i30.JPG';
    const p31 = '/image/club/members/profiles/i31.JPG';
    const p32 = '/image/club/members/profiles/i32.JPG';
    const p33 = '/image/club/members/profiles/i33.JPG';
    const p34 = '/image/club/members/profiles/i34.JPG';
    const p35 = '/image/club/members/profiles/i35.JPG';

    const logoJDM = '/image/logos-font-fasten/JDMEX.png';
    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <div>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <Toolbar className='flex justify-between' style={{ backgroundColor: "#121212", color: 'white'}}>
                    <Typography style={{ fontFamily: 'Righteous' }} variant="h6" noWrap component="div">
                        Exposição Digital
                    </Typography>
                    <img src={dgFastenComBr} alt="" className='mx-2 w-[80px]' />
                </Toolbar>
            </ThemeProvider>
            <div className='bg-black pt-4 2xl:px-10'>
                <Head title="dg | JDM Experience">
                    <link rel="icon" href={logoJDM} type="image/x-icon" />
                </Head>
                <HeaderLogos
                    dgServiceImg={logoJDM}
                />
                <div className='flex flex-wrap justify-center'>
                    <ClubCard imgPath={c9} profImg={p9} profName="@68gangperformance" shotType="Backshot Lateral Esquerda" brand="Toyota" model="Supra" year="" rarity="legendary" role="Patrocinador" clubNumber="1" linkInstagram="https://www.instagram.com/68gangperformance/"></ClubCard>
                    <ClubCard imgPath={c10} profImg={p10} profName="@satoshigarage" shotType="Backshot Lateral Esquerda" brand="Nissan" model="Skyline R34" year="" rarity="legendary" role="Patrocinador" clubNumber="2" linkInstagram="https://www.instagram.com/satoshigarage/"></ClubCard>
                    <ClubCard imgPath={c22} profImg={p22} profName="@ducampelo_" shotType="Backshot Lateral Esquerda" brand="Porsche" model="992" year="" rarity="legendary" role="Patrocinador" clubNumber="3" linkInstagram="https://www.instagram.com/ducampelo_/"></ClubCard>
                    <ClubCard imgPath={c19} profImg={p19} profName="041adesivos" shotType="Backshot Lateral Esquerda" brand="Mercedes-Benz" model="A45 AMG" year="" rarity="epic" role="Patrocinador" clubNumber="4" linkInstagram="https://www.instagram.com/041adesivos/"></ClubCard>
                    <ClubCard imgPath={c12} profImg={p12} profName="@malvadaogarage" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="epic" role="Patrocinador" clubNumber="5" linkInstagram="https://www.instagram.com/malvadaogarage/"></ClubCard>
                    <ClubCard imgPath={c23} profImg={p23} profName="@ckleinarage " shotType="Backshot Lateral Esquerda" brand="Honda " model="Civic" year="" rarity="epic" role="Patrocinador" clubNumber="6" linkInstagram=""></ClubCard>
                    <ClubCard imgPath={c20} profImg={p20} profName="@autovidroscajuru" shotType="Backshot Lateral Esquerda" brand="Honda" model="Civic" year="" rarity="epic" role="Patrocinador" clubNumber="7" linkInstagram="https://www.instagram.com/autovidroscajuru/"></ClubCard>
                    <ClubCard imgPath={c35} profImg={p35} profName="@digitalgarage.com.br" shotType="Backshot Lateral Esquerda" brand="Mini" model="Cooper S F56" year="" rarity="rare" role="Apoiador" clubNumber="8" linkInstagram="https://www.instagram.com/digitalgarage.com.br/"></ClubCard>
                    <ClubCard imgPath={c21} profImg={p21} profName="@d3v.garage" shotType="Backshot Lateral Esquerda" brand="BMW" model="320i" year="" rarity="rare" role="Apoiador" clubNumber="9" linkInstagram="https://www.instagram.com/d3v.garage/"></ClubCard>
                    <ClubCard imgPath={c14} profImg={p14} profName="@imbackgarage" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="rare" role="Apoiador" clubNumber="10" linkInstagram="https://www.instagram.com/imbackgarage/"></ClubCard>
                    <ClubCard imgPath={c16} profImg={p16} profName="@gabrielneto" shotType="Backshot Lateral Esquerda" brand="Volkswagen" model="Gol G3" year="" rarity="rare" role="Apoiador" clubNumber="11" linkInstagram="https://www.instagram.com/gabrieltneto/"></ClubCard>
                    <ClubCard imgPath={c15} profImg={p15} profName="@gli_dark" shotType="Backshot Lateral Esquerda" brand="Volkswagen" model="Jetta GLI" year="" rarity="uncommon" role="Expositor" clubNumber="12" linkInstagram="https://www.instagram.com/gli_dark/"></ClubCard>
                    <ClubCard imgPath={c6} profImg={p6} profName="@matheus_leindorf" shotType="Frontshot Lateral Esquerda" brand="Chevrolet" model="Onix" year="" rarity="uncommon" role="Expositor" clubNumber="13" linkInstagram="https://www.instagram.com/matheus_leindorf/"></ClubCard>
                    <ClubCard imgPath={c33} profImg={p33} profName="@leozinlourenco" shotType="Backshot Lateral Esquerda" brand="Volkswagen" model="UP" year="" rarity="uncommon" role="Expositor" clubNumber="14" linkInstagram="https://www.instagram.com/leozinlourenco/"></ClubCard>
                    <ClubCard imgPath={c7} profImg={p7} profName="@308gtwhite" shotType="Backshot Lateral Esquerda" brand="Peugeot" model="308" year="" rarity="uncommon" role="Expositor" clubNumber="15" linkInstagram="https://www.instagram.com/308gtwhite/"></ClubCard>
                    <ClubCard imgPath={c8} profImg={p8} profName="@bruniinhaid" shotType="Frontshot Lateral Esquerda" brand="Honda" model="Civic" year="" rarity="uncommon" role="Expositor" clubNumber="16" linkInstagram="https://www.instagram.com/bruniinhaid/"></ClubCard>
                    <ClubCard imgPath={c11} profImg={p11} profName="@mt.lancerex" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="17" linkInstagram="https://www.instagram.com/mt.lancerex/"></ClubCard>
                    <ClubCard imgPath={c13} profImg={p13} profName="@lancer.red.double" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="18" linkInstagram="https://www.instagram.com/lancer.red.double/"></ClubCard>
                    <ClubCard imgPath={c17} profImg={p17} profName="@edemir.adv" shotType="Backshot Lateral Esquerda" brand="" model="Lexus" year="" rarity="uncommon" role="Expositor" clubNumber="16" linkInstagram="19"></ClubCard>
                    <ClubCard imgPath={c18} profImg={p18} profName="@duraaes_oficial" shotType="Backshot Lateral Esquerda" brand="Honda" model="Civic" year="" rarity="uncommon" role="Expositor" clubNumber="20" linkInstagram="https://www.instagram.com/duraaes_oficial/"></ClubCard>
                    <ClubCard imgPath={c24} profImg={p24} profName="@eclipseblack95" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Eclipse" year="" rarity="uncommon" role="Expositor" clubNumber="21" linkInstagram="https://www.instagram.com/eclipseblack95/"></ClubCard>
                    <ClubCard imgPath={c25} profImg={p25} profName="@piadomazda" shotType="Backshot Lateral Esquerda" brand="" model="Mazda" year="" rarity="uncommon" role="Expositor" clubNumber="22" linkInstagram="https://www.instagram.com/piadomazda/"></ClubCard>                    
                    <ClubCard imgPath={c26} profImg={p26} profName="@autos_cwb" shotType="Backshot Lateral Esquerda" brand="Renault" model="Megane" year="" rarity="uncommon" role="Expositor" clubNumber="23" linkInstagram="https://www.instagram.com/autos_cwb/"></ClubCard>
                    <ClubCard imgPath={c27} profImg={p27} profName="@lancer.jg" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="24" linkInstagram="https://www.instagram.com/lancer.jg/"></ClubCard>
                    <ClubCard imgPath={c28} profImg={p28} profName="@victor.smaniotto_" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Eclipse" year="" rarity="uncommon" role="Expositor" clubNumber="25" linkInstagram=""></ClubCard>
                    <ClubCard imgPath={c29} profImg={p29} profName="@saulofrancisco" shotType="Backshot Lateral Esquerda" brand="" model="BMW" year="" rarity="uncommon" role="Expositor" clubNumber="26" linkInstagram=""></ClubCard>
                    <ClubCard imgPath={c30} profImg={p30} profName="@pridenadaicastro" shotType="Backshot Lateral Esquerda" brand="Mitsubishi " model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="27" linkInstagram=""></ClubCard>
                    <ClubCard imgPath={c31} profImg={p31} profName="@nhegasord" shotType="Backshot Lateral Esquerda" brand="Honda " model="Civic" year="" rarity="uncommon" role="Expositor" clubNumber="28" linkInstagram=""></ClubCard>
                    <ClubCard imgPath={c32} profImg={p32} profName="@mitsubachan46" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="29" linkInstagram="https://www.instagram.com/mitsubachan46/"></ClubCard>
                    <ClubCard imgPath={c34} profImg={p34} profName="@lancerAiko" shotType="Backshot Lateral Esquerda" brand="Mitsubishi" model="Lancer" year="" rarity="uncommon" role="Expositor" clubNumber="30" linkInstagram="https://www.instagram.com/lanceraiko/"></ClubCard>

                </div>
                <Footer />
            </div>
        </div>
    );
}
