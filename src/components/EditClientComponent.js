import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { updateClient, getClientById } from '../api/clientApi';

const EditClientComponent = () => {
    const { id } = useParams();
    const [editClient, setEditClient] = useState({
        nom: '',
        adresse: '',
        email: '',
        telephone: ''
    });

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const client = await getClientById(id);
                setEditClient(client);
            } catch (error) {
                console.error('Error fetching client by ID:', error);
            }
        };
        fetchClient();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditClient({ ...editClient, [name]: value });
    };

    const handleUpdateClient = async () => {
        try {
            await updateClient(id, editClient);
            window.location.href = '/clients';
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h6" gutterBottom>
                        Modifier le Client
                    </Typography>
                    <TextField
                        label="Nom"
                        fullWidth
                        margin="normal"
                        name="nom"
                        value={editClient.nom}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Adresse"
                        fullWidth
                        margin="normal"
                        name="adresse"
                        value={editClient.adresse}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={editClient.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Téléphone"
                        fullWidth
                        margin="normal"
                        name="telephone"
                        value={editClient.telephone}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdateClient}
                        style={{ marginTop: 20 }}
                    >
                        Mettre à jour Client
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default EditClientComponent;
