import * as React from 'react';

export default function ImageProfile({ img }) {

    return (
        <img
            className="mr-2"
            src={img}
            alt="Spotter's Profile"
            style={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                border: '2px solid white',
            }}
        />
    );
}
