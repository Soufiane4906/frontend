import React, { useState, useEffect } from 'react';
import { getAllFactures, deleteFacture } from '../api/factureApi';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const FactureComponent = () => {
    const [factures, setFactures] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFactures = async () => {
            try {
                const facturesData = await getAllFactures();
                setFactures(facturesData);
            } catch (error) {
                setError('Error fetching factures: ' + error.message);
                console.error('Error fetching factures:', error);
            }
        };
        fetchFactures();
    }, []);

    const handleDeleteFacture = async (id) => {
        try {
            await deleteFacture(id);
            setFactures(factures.filter(facture => facture.factureID !== id));
        } catch (error) {
            setError('Error deleting facture: ' + error.message);
            console.error('Error deleting facture:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#FFB6C1' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    Gestion des Factures
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter une Nouvelle Facture
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/addFacture"
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Facture
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20, backgroundColor: '#FFB6C1', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Liste des Factures
                    </Typography>
                    <List>
                        {/* {factures.map((facture) => (
                            <ListItem key={facture.factureID} divider style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: 5, marginBottom: 10 }}>
                                <ListItemText
                                    primary={`Facture #${facture.factureID}`}
                                    secondary={
                                        <Box>
                                            <Typography variant="body2" color="textPrimary">
                                                Date Facturation: {facture.dateFacturation}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Montant Total: {facture.montantTotal} DH
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Statut Paiement: {facture.statutPaiement}
                                            </Typography>
                                        </Box>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" component={Link} to={`/editFacture/${facture.factureID}`}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteFacture(facture.factureID)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))} */}
                    </List>
                    {error && <Typography color="error" variant="body1">{error}</Typography>}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FactureComponent;
