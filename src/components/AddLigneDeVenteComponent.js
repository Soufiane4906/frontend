import React, { useState } from 'react';
import { addLigneDeVente } from '../api/ligneDeVenteApi';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';

const AddLigneDeVenteComponent = () => {
    const [newLigneDeVente, setNewLigneDeVente] = useState({
        Quantite: 0,
        PrixUnitaire: 0,
        Montant: 0,
        vente: '',
        produit: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLigneDeVente({ ...newLigneDeVente, [name]: value });
    };

    const handleAddLigneDeVente = async () => {
        try {
            await addLigneDeVente(newLigneDeVente);
            setNewLigneDeVente({
                Quantite: 0,
                PrixUnitaire: 0,
                Montant: 0,
                vente: '',
                produit: ''
            });
            window.location.href = '/lignes-de-vente';
        } catch (error) {
            console.error('Error adding ligne de vente:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#f0ebff' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter une Nouvelle Ligne de Vente
                    </Typography>
                    <TextField
                        label="Quantité"
                        fullWidth
                        margin="normal"
                        name="Quantite"
                        type="number"
                        value={newLigneDeVente.Quantite}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Prix Unitaire"
                        fullWidth
                        margin="normal"
                        name="PrixUnitaire"
                        type="number"
                        value={newLigneDeVente.PrixUnitaire}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Montant"
                        fullWidth
                        margin="normal"
                        name="Montant"
                        type="number"
                        value={newLigneDeVente.Montant}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Vente ID"
                        fullWidth
                        margin="normal"
                        name="vente"
                        value={newLigneDeVente.vente}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Produit ID"
                        fullWidth
                        margin="normal"
                        name="produit"
                        value={newLigneDeVente.produit}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddLigneDeVente}
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Ligne de Vente
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddLigneDeVenteComponent;
