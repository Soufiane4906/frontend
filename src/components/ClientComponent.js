import React, { useState, useEffect } from 'react';
import { getAllClients, deleteClient } from '../api/clientApi';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ClientComponent = () => {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const clientsData = await getAllClients();
                debugger;
                setClients(clientsData);
            } catch (error) {
                setError('Error fetching clients: ' + error.message);
                console.error('Error fetching clients:', error);
            }
        };
        fetchClients();
    }, []);

    const handleDeleteClient = async (id) => {
        try {
            await deleteClient(id);
            setClients(clients.filter(client => client.id !== id));
           
        } catch (error) {
            setError('Error deleting client: ' + error.message);
            console.error('Error deleting client:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#FFB6C1' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    Gestion des Clients
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter un Nouveau Client
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/addClient"
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Client
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20, backgroundColor: '#FFB6C1', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Liste des Clients
                    </Typography>
                    <List>
                        {clients.map((client) => (
                            <ListItem key={client.id} divider style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: 5, marginBottom: 10 }}>
                                <ListItemText
                                    primary={`Client #${client.id}`}
                                    secondary={
                                        <Box>
                                            <Typography variant="body2" color="textPrimary">
                                                Nom: {client.nom}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Adresse: {client.adresse}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Email: {client.email}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Téléphone: {client.telephone}
                                            </Typography>
                                        </Box>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" component={Link} to={`/updateClient/${client.id}`}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClient(client.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    {error && <Typography color="error" variant="body1">{error}</Typography>}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ClientComponent;
