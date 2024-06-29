import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { updateLigneDeVente, getLigneDeVenteById } from '../api/ligneDeVenteApi';

const EditLigneDeVenteComponent = () => {
    const { id } = useParams();
    const [editLigneDeVente, setEditLigneDeVente] = useState({
        Quantite: 0,
        PrixUnitaire: 0,
        Montant: 0,
        vente: '',
        produit: ''
    });

    useEffect(() => {
        const fetchLigneDeVente = async () => {
            try {
                const ligneDeVente = await getLigneDeVenteById(id);
                setEditLigneDeVente(ligneDeVente);
            } catch (error) {
                console.error('Error fetching ligne de vente by ID:', error);
            }
        };
        fetchLigneDeVente();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditLigneDeVente({ ...editLigneDeVente, [name]: value });
    };

    const handleUpdateLigneDeVente = async () => {
        try {
            await updateLigneDeVente(id, editLigneDeVente);
            window.location.href = '/lignes-de-vente';
        } catch (error) {
            console.error('Error updating ligne de vente:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h6" gutterBottom>
                        Modifier la Ligne de Vente
                    </Typography>
                    <TextField
                        label="Quantité"
                        fullWidth
                        margin="normal"
                        name="Quantite"
                        type="number"
                        value={editLigneDeVente.Quantite}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Prix Unitaire"
                        fullWidth
                        margin="normal"
                        name="PrixUnitaire"
                        type="number"
                        value={editLigneDeVente.PrixUnitaire}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Montant"
                        fullWidth
                        margin="normal"
                        name="Montant"
                        type="number"
                        value={editLigneDeVente.Montant}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Vente ID"
                        fullWidth
                        margin="normal"
                        name="vente"
                        value={editLigneDeVente.vente}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Produit ID"
                        fullWidth
                        margin="normal"
                        name="produit"
                        value={editLigneDeVente.produit}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdateLigneDeVente}
                        style={{ marginTop: 20 }}
                    >
                        Mettre à jour Ligne de Vente
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default EditLigneDeVenteComponent;
