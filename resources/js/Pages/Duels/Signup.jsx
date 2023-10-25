
import HeaderLogos from './HeaderLogos';
import SpotCardAdd from './SpotCardAdd';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CssBaseline } from '@mui/material';

const theme1 = createTheme({
    palette: {
        mode: 'dark', // Enable dark mode
    },
    overrides: {
        MuiInputBase: {
            input: {
                color: 'white', // Text color
            },
        },
        MuiInputLabel: {
            root: {
                color: 'white', // Label color
            },
        },
        MuiOutlinedInput: {
            root: {
                '& fieldset': {
                    borderColor: 'white', // Border color for the input
                    borderRadius: '4px', // Border radius
                },
            },
            notchedOutline: {
                borderColor: 'white', // Border color for the notched outline
            },
        },
    },
});

const theme2 = createTheme({
    palette: {
        mode: 'light', // Enable dark mode
    }
});


export default function Signup({ }) {

    return (
        <div>
            <ThemeProvider theme={theme1}>
                <CssBaseline />
                <div className='bg-black pt-14 h-screen'>
                    <Head title="dg - Duels">
                        <link rel="icon" href="/image/logos-font-fasten/duels.png" type="image/x-icon" />
                    </Head>
                    <HeaderLogos />
                    {/* <PageTitle/> */}
                    <div className='flex justify-center mt-14'>
                        <Box
                            className='flex flex-wrap justify-center w-[1000px]'
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                style={{ width: '600px' }}
                                id="email"
                                label="Email"
                                color="secondary"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                style={{ width: '600px' }}
                                id="password"
                                label="Password"
                                type="password"
                                color="secondary"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                style={{ width: '600px', marginTop: '50px' }}
                                id="garageName"
                                label="Garage Name"
                                color="secondary"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                style={{ width: '600px', marginTop: '50px' }}
                                id="marca"
                                label="Marca"
                                color="secondary"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                style={{ width: '600px' }}
                                id="modelo"
                                label="Modelo"
                                color="secondary"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <ThemeProvider theme={theme2}>
                                <div className='flex justify-end w-[600px] m'>
                                    <Button variant="contained" style={{ color : 'black', fontWeight: 700}}>Sign Up</Button>
                                </div>
                            </ThemeProvider>
                        </Box>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}
