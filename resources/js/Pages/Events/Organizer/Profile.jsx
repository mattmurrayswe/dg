
import * as React from 'react';
import { Typography } from '@mui/material';
import ImageProfile from './ImageProfile';

export default function Profile({ }) {

    const jdmLogo = '/image/events/jdm/profile.jpeg';

    return (
        <div className='flex items-center justify-start w-full mb-8'>
            <ImageProfile img={jdmLogo} />
            <div>
                <Typography style={{ color: "white" }}>JDM Experience</Typography>
                <Typography style={{ color: "white" }}>@jdm.experience</Typography>
            </div>
        </div>
    );
}
