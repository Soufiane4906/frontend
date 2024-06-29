import React, { useState } from 'react';
import { addClient } from '../api/clientApi';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';

const AddClientComponent = () => {
    const [newClient, setNewClient] = useState({
        nom: '',
        adresse: '',
        email: '',
        telephone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClient({ ...newClient, [name]: value });
    };

    const handleAddClient = async () => {
        try {
            await addClient(newClient);
            setNewClient({
                nom: '',
                adresse: '',
                email: '',
                telephone: ''
            });
            window.location.href = '/clients';
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#f0ebff' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter un Nouveau Client
                    </Typography>
                    <TextField
                        label="Nom"
                        fullWidth
                        margin="normal"
                        name="nom"
                        value={newClient.nom}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Adresse"
                        fullWidth
                        margin="normal"
                        name="adresse"
                        value={newClient.adresse}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={newClient.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Téléphone"
                        fullWidth
                        margin="normal"
                        name="telephone"
                        value={newClient.telephone}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddClient}
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Client
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddClientComponent;
