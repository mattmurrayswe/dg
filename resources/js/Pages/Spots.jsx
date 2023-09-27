import * as React from 'react';
import SpotCard from './SpotCard';
import HeaderLogos from './HeaderLogos';
import SpotCardAdd from './SpotCardAdd';

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
        <div className='bg-black pt-7 px-10'>
            <HeaderLogos/>
            {/* <h1 className="text-white">
                Your Collection
            </h1> */}
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mt-6'>
                <SpotCard imgPath={s1} profImg={sp1} profName="p.sc_caspotter" shotType="Frontshot Lateral Esquerda" brand="Dodge" model="Hellcat" year="2021" color=""></SpotCard>
                <SpotCard imgPath={s4} profImg={sp2} profName="p4mplon4" shotType="Backshot Lateral Esquerda" brand="Lamborghini" model="Huracan" year="2022"></SpotCard>
                <SpotCard imgPath={s8} profImg={sp1} profName="cwb_spots" shotType="Frontshot Lateral Esquerda" brand="Ferrari" model="SF90" year="2022"></SpotCard>
                <SpotCard imgPath={s6} profImg={sp2} profName="alfa_spots" shotType="Backshot Lateral Esquerda" brand="Lamborghini" model="Aventador" year="2021"></SpotCard>
                <SpotCard imgPath={s7} profImg={sp1} profName="sc_caspotter" shotType="Backshot Lateral Esquerda" brand="Jaguar" model="F-Type" year="2018"></SpotCard>
                <SpotCard imgPath={s9} profImg={sp2} profName="p4mplon4" shotType="Frontshot Lateral Direita" brand="Ferrari" model="812" year="2019"></SpotCard>
                <SpotCard imgPath={s5} profImg={sp1} profName="cwb_spots" shotType="Frontshot Lateral Esquerda" brand="Lamborghini" model="Huracan" year="2022"></SpotCard>
                <SpotCard imgPath={s2} profImg={sp2} profName="alfa_spots" shotType="Backshot Lateral Direita" brand="Porsche" model="GT3" year="2024" color=""></SpotCard>
                <SpotCard imgPath={s3} profImg={sp1} profName="timbaspots" shotType="Frontshot Lateral Direita" brand="Porsche" model="911" year="2019" color=""></SpotCard>
                <SpotCardAdd/>
            </div>
        </div>
    );
}
