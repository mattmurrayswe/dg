import * as React from 'react';

export default function HeaderLogos({ dgServiceImg }) {
    
    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';

    return (
        <div className="flex items-center justify-center mb-14">
            <img src={dgFastenComBr} alt="" width="170" className='mx-2' />
        </div>
    );
}