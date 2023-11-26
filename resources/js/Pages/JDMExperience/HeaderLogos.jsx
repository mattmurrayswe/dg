import * as React from 'react';

export default function HeaderLogos({ dgServiceImg }) {

    return (
        <div className="flex items-center justify-center">
            <img src={dgServiceImg} alt="" width="370" className='mx-2' />
        </div>
    );
}
