import * as React from 'react';

export default function HeaderLogos({ }) {

    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';
    const dgDuels = '/image/logos-font-fasten/duels.png';

    return (
        <div className="flex items-center justify-center">
            <img src={dgFastenComBr} alt="" width="170" className='mx-2' />
            <p className='text-white mx-2 text-[40px]'>|</p>
            <img src={dgDuels} alt="" width="90" className='mx-2' />
        </div>
    );
}
