import * as React from 'react';

export default function HeaderLogos({ dgServiceImg }) {
    
    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';

    return (
        <div className="flex items-center w-full justify-end px-2 md:px-5">
            <img src={dgFastenComBr} alt="" className='mx-2 w-[100px]' />
            <p className='text-white mx-1 text-[30px]'>|</p>
            <img src={dgServiceImg} alt="" width="60" className='ml-2' />
        </div>
    );
}
