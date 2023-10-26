import * as React from 'react';
import { Typography } from '@mui/material';

export default function Footer({ }) {

    const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';
    
    return (
        <div className='flex justify-center pb-12 pt-32 w-full'>
            <div className='flex justify-center w-full'>
                <div className='flex items-center md:ml-16 lg:ml-16 xl:ml-16'>
                    <img src={dgFastenComBr} alt="" height="60" className='mr-4' />
                    <p className='text-white text-[40px] m-0 mr-6'>|</p>
                </div>
                <div className='w-fit text-center'>
                    <Typography className='flex justify-start w-fit text-start' style={{ color : "white" }} variant="subtitle2" color="gray" gutterBottom>
                        Copyright © Digital Garage - 2022
                    </Typography>
                    <Typography className='flex justify-start w-fit text-start' style={{ color : "white" }} variant="subtitle2" color="gray" gutterBottom>
                        Rua Bom Jesus, nº 212, sala 1904 | Juvevê, Curitiba, PR, Brazil
                    </Typography>
                <Typography className='flex justify-start w-fit text-start' style={{ color : "white", marginBottom : "0px" }} variant="subtitle2" color="gray" gutterBottom>
                        CNPJ 49.446.832/0001-25
                    </Typography>
                </div>
            </div>
        </div>
    );
}
