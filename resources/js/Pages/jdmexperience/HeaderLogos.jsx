import * as React from 'react';

export default function HeaderLogos({ dgServiceImg }) {
    
    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';

    return (
        <div className="flex items-center justify-center mb-4">
            <img src={dgServiceImg} alt="" width="300" className='mx-2' />
        </div>
    );
}
