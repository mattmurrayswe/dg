import * as React from 'react';
import InputsEvento from './InputsEvento';

export default function InformacoesGerais({ }) {

    const imgDivulgacao = '/image/events/jdm/divulgacao-1.jpeg';

    return (
        <div className='flex'>
            <img src={imgDivulgacao} alt="" style={{
                height: '540px',
                borderRadius: '2%',
            }} />
            <div className='ml-4'>
                <InputsEvento />
            </div>
        </div>
    );
}
