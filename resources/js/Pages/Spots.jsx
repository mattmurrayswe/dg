import * as React from 'react';
import SpotCard from './SpotCard';
import HeaderLogos from './HeaderLogos';

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

    return (
        <div className='bg-black pt-7 px-10'>
            <HeaderLogos/>
            <h1 className="text-white">
                Your Collection
            </h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1'>
                <SpotCard imgPath={s1} shotType="Frontshot Lateral Esquerda" brand="Dodge" model="Hellcat" year="2021" color="Black"></SpotCard>
                <SpotCard imgPath={s4} shotType="Backshot Lateral Esquerda" brand="Lamborghini" model="Huracan" year="2022"></SpotCard>
                <SpotCard imgPath={s8} shotType="Frontshot Lateral Esquerda" brand="Ferrari" model="SF90" year="2022"></SpotCard>
                <SpotCard imgPath={s6} shotType="Backshot Lateral Esquerda" brand="Lamborghini" model="Aventador" year="2021"></SpotCard>
                <SpotCard imgPath={s7} shotType="Backshot Lateral Esquerda" brand="Jaguar" model="F-Type" year="2018"></SpotCard>
                <SpotCard imgPath={s9} shotType="Frontshot Lateral Direita" brand="Ferrari" model="812" year="2019"></SpotCard>
                <SpotCard imgPath={s5} shotType="Frontshot Lateral Esquerda" brand="Lamborghini" model="Huracan" year="2022"></SpotCard>
                <SpotCard imgPath={s2} shotType="Backshot Lateral Direita" brand="Porsche" model="GT3" year="2024" color="Red"></SpotCard>
                <SpotCard imgPath={s3} shotType="Frontshot Lateral Direita" brand="Porsche" model="911" year="2019" color="Grey"></SpotCard>
            </div>
        </div>
    );
}
