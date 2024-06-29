import React, { useState } from 'react';
import { addProduit } from '../api/produitApi';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddProduitComponent = () => {
    const [newProduit, setNewProduit] = useState({
        nom: '',
        description: '',
        prix: '',
        quantiteEnStock: '',
        image: null
    });

    const navigate = useNavigate();

    const handleAddProduit = async () => {
        try {
            await addProduit(newProduit);
            navigate('/produits'); // Redirige vers la liste des produits après l'ajout
        } catch (error) {
            console.error('Error adding produit:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduit({ ...newProduit, [name]: value });
    };

    const handleFileChange = (e) => {
        setNewProduit({ ...newProduit, image: e.target.files[0] });
    };

    return (
        
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#f0ebff' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter un Nouveau Produit
                    </Typography>
                    <TextField
                        label="Nom"
                        fullWidth
                        margin="normal"
                        name="nom"
                        value={newProduit.nom}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        name="description"
                        value={newProduit.description}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Prix"
                        fullWidth
                        margin="normal"
                        type="number"
                        name="prix"
                        value={newProduit.prix}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Quantité en Stock"
                        fullWidth
                        margin="normal"
                        type="number"
                        name="quantiteEnStock"
                        value={newProduit.quantiteEnStock}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        component="label"
                        style={{ marginTop: 20 }}
                    >
                        Télécharger une Image
                        <input
                            type="file"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddProduit}
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Produit
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddProduitComponent;
