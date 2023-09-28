import * as React from 'react';
import SpotCard from './SpotCard';
import HeaderLogos from './HeaderLogos';
import SpotCardAdd from './SpotCardAdd';
import PageTitle from './PageTitle';

export default function Spots({}) {

    const s1 = '/image/spots/pamplona/s1.PNG';
    const s2 = '/image/spots/pamplona/s2.PNG';
    const s3 = '/image/spots/pamplona/s3.PNG';
    const s4 = '/image/spots/pamplona/s4.PNG';
    const s5 = '/image/spots/pamplona/s5.PNG';
    const s6 = '/image/spots/pamplona/s6.PNG';
    const s7 = '/image/spots/pamplona/s7.PNG';
    const s8 = '/image/spots/pamplona/s8.PNG';
    const s9 = '/image/spots/pamplona/s9.PNG';

    const sp1 = '/image/spotters/s1.jpeg';
    const sp2 = '/image/spotters/s2.jpeg';

    return (
        <div className='bg-black pt-14 px-10'>
            <HeaderLogos/>
            {/* <PageTitle/> */}
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mt-14'>
                <SpotCard imgPath={s1} profImg={sp1} profName="p.sc_caspotter" shotType="Frontshot Lateral Esquerda" brand="Dodge" model="Demon Jailbreak" year="2021" rarity="legendary"></SpotCard>
                <SpotCard imgPath={s4} profImg={sp2} profName="p4mplon4" shotType="Backshot Lateral Esquerda" brand="Lamborghini" model="Huracan Performante" year="2022" rarity="rare"></SpotCard>
                <SpotCard imgPath={s8} profImg={sp1} profName="cwb_spots" shotType="Frontshot Lateral Esquerda" brand="Ferrari" model="488 Pista" year="2022" rarity="epic"></SpotCard>
                <SpotCard imgPath={s6} profImg={sp2} profName="alfa_spots" shotType="Backshot Lateral Esquerda" brand="Lamborghini" model="Aventador SVJ" year="2021" rarity="epic"></SpotCard>
                <SpotCard imgPath={s7} profImg={sp1} profName="sc_caspotter" shotType="Backshot Lateral Esquerda" brand="Jaguar" model="F-Type P300 Cabrio" year="2018" rarity="epic"></SpotCard>
                <SpotCard imgPath={s9} profImg={sp2} profName="p4mplon4" shotType="Frontshot Lateral Direita" brand="Ferrari" model="812 Superfast" year="2019" rarity="epic"></SpotCard>
                <SpotCard imgPath={s5} profImg={sp1} profName="cwb_spots" shotType="Frontshot Lateral Esquerda" brand="Lamborghini" model="Huracan Performante" year="2022" rarity="rare"></SpotCard>
                <SpotCard imgPath={s2} profImg={sp2} profName="alfa_spots" shotType="Backshot Lateral Direita" brand="Porsche" model="GT3 RS 992" year="2024" rarity="legendary"></SpotCard>
                <SpotCard imgPath={s3} profImg={sp1} profName="timbaspots" shotType="Frontshot Lateral Direita" brand="Porsche" model="911 Carrera GTS" year="2019" rarity="uncommon"></SpotCard>
                <SpotCardAdd/>
            </div>
        </div>
    );
}
