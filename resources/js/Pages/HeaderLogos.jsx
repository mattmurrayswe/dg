import * as React from 'react';

export default function HeaderLogos({ }) {

    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';
    const dgSpots = '/image/logos-font-fasten/spots.png';

    return (
        <div className="flex items-center justify-center">
            <img src={dgFastenComBr} alt="" width="130" className='mx-2' />
            <img src={dgSpots} alt="" width="70" className='mx-2' />
        </div>
    );
}
