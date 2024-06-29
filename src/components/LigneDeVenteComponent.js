import React, { useState, useEffect } from 'react';
import { getAllLignesDeVente, deleteLigneDeVente, generatePdfForLigneDeVente } from '../api/ligneDeVenteApi';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom';

const LigneDeVenteComponent = () => {
    const [lignesDeVente, setLignesDeVente] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLignesDeVente = async () => {
            try {
                const lignesDeVenteData = await getAllLignesDeVente();
                setLignesDeVente(lignesDeVenteData);
            } catch (error) {
                setError('Error fetching lignes de vente: ' + error.message);
                console.error('Error fetching lignes de vente:', error);
            }
        };
        fetchLignesDeVente();
    }, []);

    const handleDeleteLigneDeVente = async (id) => {
        try {
            await deleteLigneDeVente(id);
            setLignesDeVente(lignesDeVente.filter(ligneDeVente => ligneDeVente.LigneDeVenteID !== id));
        } catch (error) {
            setError('Error deleting ligne de vente: ' + error.message);
            console.error('Error deleting ligne de vente:', error);
        }
    };

    const handleGeneratePdf = async (id) => {
        try {
            await generatePdfForLigneDeVente(id);
        } catch (error) {
            setError('Error generating PDF: ' + error.message);
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#FFB6C1' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    Gestion des Lignes de Vente
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter une Nouvelle Ligne de Vente
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/addLigneDeVente"
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Ligne de Vente
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20, backgroundColor: '#FFB6C1', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Liste des Lignes de Vente
                    </Typography>
                    <List>
                        {lignesDeVente.map((ligneDeVente) => (
                            <ListItem key={ligneDeVente.LigneDeVenteID} divider style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: 5, marginBottom: 10 }}>
                                <ListItemText
                                    primary={`Ligne de Vente #${ligneDeVente.LigneDeVenteID}`}
                                    secondary={
                                        <Box>
                                            <Typography variant="body2" color="textPrimary">
                                                Quantité: {ligneDeVente.Quantite}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Prix Unitaire: {ligneDeVente.PrixUnitaire}€
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Montant: {ligneDeVente.Montant}€
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Vente ID: {ligneDeVente.vente}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Produit ID: {ligneDeVente.produit}
                                            </Typography>
                                        </Box>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" component={Link} to={`/editLigneDeVente/${ligneDeVente.LigneDeVenteID}`}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteLigneDeVente(ligneDeVente.LigneDeVenteID)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="print" onClick={() => handleGeneratePdf(ligneDeVente.LigneDeVenteID)}>
                                        <PrintIcon />
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

export default LigneDeVenteComponent;
