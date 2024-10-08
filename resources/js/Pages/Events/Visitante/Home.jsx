

import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button, CssBaseline, Fab, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';

import LogoutIcon from '@mui/icons-material/Logout';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupsIcon from '@mui/icons-material/Groups';
import FestivalIcon from '@mui/icons-material/Festival';
import SeusEventos from '../Organizer/SeusEventos';

const drawerWidth = 290;
const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';
const jdmLogo = '/image/events/jdm/profile.jpeg';

export default function Home({ }) {

    const dgEvents = '/image/logos-font-fasten/events.png';

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <div>
            <CssBaseline />
            <div className='bg-black min-h-screen'>
                <Head title="dg - Events">
                    <link rel="icon" href={dgEvents} type="image/x-icon" />
                </Head>
                <ThemeProvider theme={darkTheme}>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppBar
                            position="fixed"
                            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                        >
                            <Toolbar className='flex justify-between'>
                                <Typography style={{ fontFamily: 'Righteous' }} variant="h6" noWrap component="div">
                                    Visitantes
                                </Typography>
                                <img src={dgFastenComBr} alt="" className='mx-2 w-[80px]' />
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            sx={{
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                },
                            }}
                            variant="permanent"
                            anchor="left"
                        >
                            <Toolbar style={{ height: "12em" }}>
                                <Avatar className='mr-3' sx={{ width: 44, height: 44 }} alt="JDM Experience" src={jdmLogo} />
                                <div className='mr-2'>
                                    <Typography variant='subtitle2' style={{ color: "white" }}>JDM Experience</Typography>
                                    <Typography variant='subtitle2' style={{ color: "white" }}>@jdm.experience</Typography>
                                </div>
                                <IconButton size="small" style={{ color: "grey" }} aria-label="delete">
                                    <EditIcon />
                                </IconButton>
                            </Toolbar>
                            <Divider />
                            <List className='h-full' >
                                <ListItem disablePadding>
                                    <ListItemButton >
                                        <ListItemIcon style={{minWidth: '32px'}}  className='flex justify-start'>
                                            <FestivalIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Eventos" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon  style={{minWidth: '32px'}} className='flex justify-start min-w-[30px]'>
                                            <AttachMoneyIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Financeiro" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon  style={{minWidth: '32px'}} className='flex justify-start min-w-[30px]'>
                                            <CheckroomIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Produtos" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon  style={{minWidth: '32px'}} className='flex justify-start min-w-[30px]'>
                                            <ConfirmationNumberIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Ingressos" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon  style={{minWidth: '32px'}} className='flex justify-start min-w-[30px]'>
                                            <GroupsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Participantes" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <Divider />
                            <List className='h-fit flex flex-wrap content-end'>
                                <ListItem className='h-fit' disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon  style={{minWidth: '32px'}} className='flex justify-start min-w-[30px]'>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Sair" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Drawer>
                        <SeusEventos />
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    );
}
