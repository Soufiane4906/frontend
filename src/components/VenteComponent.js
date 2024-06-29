import React, { useState, useEffect } from 'react';
import { getAllVentes, deleteVente } from '../api/venteApi';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const VenteComponent = () => {
    const [ventes, setVentes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchVentes = async () => {
            try {
                const ventesData = await getAllVentes();
                debugger;
                if (Array.isArray(ventesData)) {
                    setVentes(ventesData.map(vente => ({
                        ...vente,
                        dateVente: vente.dateVente ? vente.dateVente.split('T')[0] : '', // Formatage de la date
                    })));
                } else {
                    setError('Error: expected an array of ventes');
                }
            } catch (error) {
                setError('Error fetching ventes: ' + error.message);
                console.error('Error fetching ventes:', error);
            }
        };
        fetchVentes();
    }, []);

    const handleDeleteVente = async (id) => {
        try {
            await deleteVente(id);
            setVentes(ventes.filter(vente => vente.id !== id));
        } catch (error) {
            setError('Error deleting vente: ' + error.message);
            console.error('Error deleting vente:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: 'rgb(239 239 239)' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    Gestion des Ventes
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter une Nouvelle Vente
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/addVente"
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Vente
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20, backgroundColor: 'rgb(239 239 239)', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Liste des Ventes
                    </Typography>
                    <List>
                        {ventes.map((vente) => (
                            <ListItem key={vente.id} divider style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: 5, marginBottom: 10 }}>
                                <ListItemText
                                    primary={`Vente #${vente.id}`}
                                    secondary={
                                        <Box>
                                            <Typography variant="body2" color="textPrimary">
                                                Date: {vente.dateVente}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Statut: {vente.statut}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Total: {vente.total}DH
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Client ID: {vente.client ? vente.client.id : 14 }
                                            </Typography>
                                        </Box>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" component={Link} to={`/editVente/${vente.id}`}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteVente(vente.id)}>
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

export default VenteComponent;
