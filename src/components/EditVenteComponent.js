// EditVenteComponent.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { updateVente, getVenteById } from '../api/venteApi';

const EditVenteComponent = () => {
    const { id } = useParams();
    const [editVente, setEditVente] = useState({
        dateVente: '',
        statut: '',
        total: 0,
        clientID: ''
    });

    useEffect(() => {
        const fetchVente = async () => {
            try {
                const vente = await getVenteById(id);
                setEditVente({
                    ...vente,
                    dateVente: vente.dateVente ? vente.dateVente.split('T')[0] : '', // Formatage de la date
                });
            } catch (error) {
                console.error('Error fetching vente by ID:', error);
            }
        };
        fetchVente();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditVente({ ...editVente, [name]: value });
    };

    const handleUpdateVente = async () => {
        try {
            await updateVente(id, editVente);
            window.location.href = '/ventes';
        } catch (error) {
            console.error('Error updating vente:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h6" gutterBottom>
                        Modifier la Vente
                    </Typography>
                    <TextField
                        label="Date de Vente"
                        fullWidth
                        margin="normal"
                        name="dateVente"
                        type="date"
                        value={editVente.dateVente}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Statut"
                        fullWidth
                        margin="normal"
                        name="statut"
                        value={editVente.statut}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Total"
                        fullWidth
                        margin="normal"
                        name="total"
                        type="number"
                        value={editVente.total}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="ClientID"
                        fullWidth
                        margin="normal"
                        name="clientID"
                        value={editVente.clientID}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdateVente}
                        style={{ marginTop: 20 }}
                    >
                        Mettre à jour Vente
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default EditVenteComponent;
