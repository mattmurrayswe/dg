

import { Head } from '@inertiajs/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Footer from './Footer';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogosDG from './LogosDG';

const drawerWidth = 290;
const dgFastenComBr = '/image/logos-font-fasten/dg-com-br.png';

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
                                <Typography style={{fontFamily: 'Righteous'}} variant="h6" noWrap component="div">
                                    Seus Eventos
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
                            <Toolbar />
                            <Divider />
                            <List>
                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                        >
                            <Toolbar />
                            <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                                sapien faucibus et molestie ac.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                                posuere sollicitudin aliquam ultrices sagittis orci a.
                            </Typography>
                        </Box>
                    </Box>
                </ThemeProvider>
                <Footer />
            </div>
        </div>
    );
}
