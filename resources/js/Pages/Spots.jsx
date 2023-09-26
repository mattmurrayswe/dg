import * as React from 'react';
import SpotCard from './SpotCard';

export default function Spots({}) {

    const imagePath1 = '/image/spots/mini-1.jpg';
    const imagePath2 = '/image/spots/mini-2.jpg';
    const imagePath3 = '/image/spots/mini-3.jpg';
    const imagePath4 = '/image/spots/mini-4.jpg';
    const dgFasten = '/image/dg-fasten.png';
    const dgSpots = '/image/logos-font-fasten/spots.png';

    return (
        <div className='bg-black'>
            <div className="flex justify-center align-middle">
                <div className="align-middle">
                    <img src={dgFasten} alt="" height="200" width="200" />
                </div>
                <div>
                    <img src={dgSpots} alt="" height="150" width="150" />
                </div>
            </div>
            <h1 className="text-white">
                Your Collection
            </h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1'>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
                <SpotCard imgPath={imagePath1}></SpotCard>
                <SpotCard imgPath={imagePath2}></SpotCard>
            </div>

        </div>
    );
}
