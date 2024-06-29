import React, { useState } from 'react';
import { addVente } from '../api/venteApi';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';

const AddVenteComponent = () => {
    const [newVente, setNewVente] = useState({
        dateVente: '',
        statut: '',
        total: 0,
        clientID: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVente({ ...newVente, [name]: value });
    };

    const handleAddVente = async () => {
        try {
            await addVente(newVente);
            setNewVente({
                dateVente: '',
                statut: '',
                total: 0,
                clientID: ''
            });
            window.location.href = '/ventes';
        } catch (error) {
            console.error('Error adding vente:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: 'rgb(239 239 239)' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter une Nouvelle Vente
                    </Typography>
                    <TextField
                        label="Date de Vente"
                        fullWidth
                        margin="normal"
                        name="dateVente"
                        type="date"
                        value={newVente.dateVente}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Statut"
                        fullWidth
                        margin="normal"
                        name="statut"
                        value={newVente.statut}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Total"
                        fullWidth
                        margin="normal"
                        name="total"
                        type="number"
                        value={newVente.total}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="ClientID"
                        fullWidth
                        margin="normal"
                        name="clientID"
                        value={newVente.clientID}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddVente}
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Vente
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddVenteComponent;
