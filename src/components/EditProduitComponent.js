import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { updateProduit, getProduitById } from '../api/produitApi';
import { useNavigate } from 'react-router-dom';

const EditProduitComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [editProduit, setEditProduit] = useState({
        nom: '',
        description: '',
        prix: '',
        quantiteEnStock: ''
    });

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const produit = await getProduitById(id);
                debugger;
                setEditProduit(produit);
            } catch (error) {
                console.error('Error fetching produit by ID:', error);
            }
        };
        fetchProduit();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProduit({ ...editProduit, [name]: value });
    };

    const handleUpdateProduit = async () => {
        try {
            await updateProduit(id, editProduit);
            navigate('/produits');
        } catch (error) {
            console.error('Error updating produit:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#FFB6C1' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Modifier le Produit
                    </Typography>
                    <TextField
                        label="Nom"
                        fullWidth
                        margin="normal"
                        name="nom"
                        value={editProduit.nom}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        margin="normal"
                        name="description"
                        value={editProduit.description}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Prix"
                        fullWidth
                        margin="normal"
                        type="number"
                        name="prix"
                        value={editProduit.prix}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Quantité en Stock"
                        fullWidth
                        margin="normal"
                        type="number"
                        name="quantiteEnStock"
                        value={editProduit.quantiteEnStock}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdateProduit}
                        style={{ marginTop: 20 }}
                    >
                        Mettre à jour Produit
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default EditProduitComponent;
