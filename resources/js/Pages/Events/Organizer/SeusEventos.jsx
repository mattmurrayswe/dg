import * as React from 'react';
import Footer from './Footer';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import Ingressos from './Ingressos';
import Produtos from './Produtos';
import ExposicaoDigital from './ExposicaoDigital';
import InformacoesGerais from './InformacoesGerais';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export function BasicSelect() {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, pb: 3}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selecione o evento</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Selecione o evento"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Churrascada</MenuItem>
                    <MenuItem value={20}>Costelada</MenuItem>
                    <MenuItem value={30}>Shopping Jardim das Américas</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SeusEventos({ }) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Toolbar />
            <BasicSelect></BasicSelect>
            <Box className="flex justify-end" sx={{ width: '100%' }}>
                <CustomTabPanel className="pt-10" value={value} index={0}>
                    <InformacoesGerais />
                </CustomTabPanel>
                <CustomTabPanel className="pt-10 w-full" value={value} index={1}>
                    <Ingressos />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <ExposicaoDigital />
                </CustomTabPanel>
                <CustomTabPanel className="pt-10" value={value} index={3}>
                    <Produtos />
                </CustomTabPanel>
                <Box className="min-w-[260px]" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab style={{ padding: "0px", alignItems: "end", color: "white", textTransform: "none" }} label={
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText className='flex justify-end m-3' primary="Informações Gerais" />
                                    <ListItemIcon style={{ minWidth: '32px' }} className='flex justify-start min-w-[30px]'>
                                        <InfoIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        } {...a11yProps(0)} />
                        <Tab style={{ padding: "0px",alignItems: "end", color: "white", textTransform: "none" }} label={
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText className='flex justify-end m-3' primary="Ingressos" />
                                    <ListItemIcon style={{ minWidth: '32px' }} className='flex justify-start min-w-[30px]'>
                                        <ConfirmationNumberIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        } {...a11yProps(1)} />
                        <Tab style={{ padding: "0px",alignItems: "end", color: "white", textTransform: "none" }} label={
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText className='flex justify-end m-3' primary="Exposição Digital" />
                                    <ListItemIcon style={{ minWidth: '32px' }} className='flex justify-start min-w-[30px]'>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        } {...a11yProps(2)} />
                        <Tab style={{ padding: "0px",alignItems: "end", color: "white", textTransform: "none" }} label={
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText className='flex justify-end m-3' primary="Produtos" />
                                    <ListItemIcon style={{ minWidth: '32px' }} className='flex justify-start min-w-[30px]'>
                                        <CheckroomIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        } {...a11yProps(3)} />
                    </Tabs>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
