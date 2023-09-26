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
        <div className='bg-black pt-7'>
            <HeaderLogos/>
            <h1 className="text-white">
                Your Collection
            </h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1'>
                <SpotCard imgPath={s1}></SpotCard>
                <SpotCard imgPath={s2}></SpotCard>
                <SpotCard imgPath={s3}></SpotCard>
                <SpotCard imgPath={s4}></SpotCard>
                <SpotCard imgPath={s5}></SpotCard>
                <SpotCard imgPath={s6}></SpotCard>
                <SpotCard imgPath={s7}></SpotCard>
                <SpotCard imgPath={s8}></SpotCard>
                <SpotCard imgPath={s9}></SpotCard>
            </div>
        </div>
    );
}
