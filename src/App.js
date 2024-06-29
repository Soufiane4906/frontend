import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, AppBar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ProductIcon from '@mui/icons-material/LocalOffer';
import SalesIcon from '@mui/icons-material/ShoppingCart';
import LineSalesIcon from '@mui/icons-material/ListAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeComponent from './components/HomeComponent';
import ClientComponent from './components/ClientComponent';
import ProduitComponent from './components/ProduitComponent';
import AddProduitComponent from './components/AddProduitComponent';
import VenteComponent from './components/VenteComponent';
import LigneDeVenteComponent from './components/LigneDeVenteComponent';
import AddClientComponent from './components/AddClientComponent';
import EditClientComponent from './components/EditClientComponent';
import AddVenteComponent from './components/AddVenteComponent';
import EditVenteComponent from './components/EditVenteComponent';
import EditProduitComponent from './components/EditProduitComponent';
import AddLigneDeVenteComponent from './components/AddLigneDeVenteComponent';
import EditLigneDeVenteComponent from './components/EditLigneDeVenteComponent';
import Login from './components/Login';
import Register from './components/Register';
import authService from './services/authService';
import FactureComponent from './components/FactureComponent';
import AddFactureComponent from './components/AddFactureComponent';
import EditFactureComponent from './components/EditFactureComponent';
import './styles.css';

const drawerWidth = 240;

// const PrivateRoute = ({ children }) => {
//     return authService.getCurrentUser() ? children : <Navigate to="/login" />;
// };

const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <AppBar position="fixed" style={{ zIndex: 1201 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Sales Management
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className="sidebar"
                    PaperProps={{ style: { width: drawerWidth, backgroundColor: 'rgb(239 239 239)' } }}
                >
                    <Toolbar />
                    <div style={{ overflow: 'auto' }}>
                        <List>
                            <ListItem button component="a" href="/home">
                                <ListItemIcon><HomeIcon style={{ color: 'rgb(0 128 255);' }} /></ListItemIcon>
                                <ListItemText primary="Home" style={{ color: 'rgb(0 128 255);' }} />
                            </ListItem>
                            <ListItem button component="a" href="/clients">
                                <ListItemIcon><PeopleIcon style={{ color: 'rgb(0 128 255);' }} /></ListItemIcon>
                                <ListItemText primary="Clients" style={{ color: 'rgb(0 128 255);' }} />
                            </ListItem>
                            <ListItem button component="a" href="/produits">
                                <ListItemIcon><ProductIcon style={{ color: 'rgb(0 128 255);' }} /></ListItemIcon>
                                <ListItemText primary="Produits" style={{ color: 'rgb(0 128 255);' }} />
                            </ListItem>
                            <ListItem button component="a" href="/ventes">
                                <ListItemIcon><SalesIcon style={{ color: 'rgb(0 128 255);' }} /></ListItemIcon>
                                <ListItemText primary="Ventes" style={{ color: 'rgb(0 128 255);' }} />
                            </ListItem>
                            <ListItem button component="a" href="/lignes-de-vente">
                                <ListItemIcon><LineSalesIcon style={{ color: 'rgb(0 128 255);' }} /></ListItemIcon>
                                <ListItemText primary="Lignes de Vente" style={{ color: 'rgb(0 128 255);' }} />
                            </ListItem>
                            <ListItem button component="a" href="/factures">
                                <ListItemIcon><ReceiptIcon style={{ color: 'rgb(0 128 255);' }} /></ListItemIcon>
                                <ListItemText primary="Factures" style={{ color: 'rgb(0 128 255);' }} />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main style={{ flexGrow: 1, padding: '20px', marginTop: '64px', marginLeft: drawerWidth + 20, background: '#fff' }}>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/home" element={<HomeComponent />} />
                        <Route path="/clients" element={<ClientComponent />} />
                        <Route path="/addClient" element={<AddClientComponent />} />
                        <Route path="/updateClient/:id" element={<EditClientComponent />} />
                        <Route path="/produits" element={<ProduitComponent />} />
                        <Route path="/addProduit" element={<AddProduitComponent />} />
                        <Route path="/editProduit/:id" element={<EditProduitComponent />} />
                        <Route path="/ventes" element={<VenteComponent />} />
                        <Route path="/lignes-de-vente" element={<LigneDeVenteComponent />} />
                        <Route path="/editLigneDeVente/:id" element={<EditLigneDeVenteComponent />} />
                        <Route path="/addLigneDeVente" element={<AddLigneDeVenteComponent />} />
                        <Route path="/addVente" element={<AddVenteComponent />} />
                        <Route path="/editVente/:id" element={<EditVenteComponent />} />
                        <Route path="/factures" element={<FactureComponent />} />
                        <Route path="/addFacture" element={<AddFactureComponent />} />
                        <Route path="/editFacture/:id" element={<EditFactureComponent />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
