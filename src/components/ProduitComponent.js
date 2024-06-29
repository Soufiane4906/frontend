import React, { useState, useEffect } from 'react';
import { getAllProduits, deleteProduit } from '../api/produitApi';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ProduitComponent = () => {
    const [produits, setProduits] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const produitsData = await getAllProduits();
                debugger;
                setProduits(produitsData);
            } catch (error) {
                setError('Error fetching produits: ' + error.message);
                console.error('Error fetching produits:', error);
            }
        };
        fetchProduits();
    }, []);

    const handleDeleteProduit = async (id) => {
        try {
          
            setProduits(produits.filter(produit => produit.id !== id));
            await deleteProduit(id);
        } catch (error) {
            setError('Error deleting produit: ' + error.message);
            console.error('Error deleting produit:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: 'rgb(239 239 239)' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    Gestion des Produits
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter un Nouveau Produit
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/addProduit"
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Produit
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20, backgroundColor: 'rgb(239 239 239)', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                    <Typography variant="h6" gutterBottom>
                        Liste des Produits
                    </Typography>
                    <List>
                        {produits.map((produit) => (
                            <ListItem key={produit.id} divider style={{ backgroundColor: '#FF69B4', color: 'white', borderRadius: 5, marginBottom: 10 }}>
                                <ListItemText
                                    primary={`Produit #${produit.id}`}
                                    secondary={
                                        <Box>
                                            <Typography variant="body2" color="textPrimary">
                                                Nom: {produit.nom}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Description: {produit.description}
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Prix: {produit.prix}€
                                            </Typography>
                                            <Typography variant="body2" color="textPrimary">
                                                Quantité en Stock: {produit.quantiteEnStock}
                                            </Typography>
                                            {produit.image && (
                                                <Box mt={1}>
                                                    <Typography variant="body2" color="textPrimary">
                                                        Image:
                                                    </Typography>
                                                    <img src={`http://localhost:8080/uploads/${produit.image}`} alt={produit.nom} style={{ width: 50, height: 50, borderRadius: 5 }} />
                                                </Box>
                                            )}
                                        </Box>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" component={Link} to={`/editProduit/${produit.id}`}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteProduit(produit.id)}>
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

export default ProduitComponent;
