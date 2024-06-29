import React, { useState } from 'react';
import { addFacture } from '../api/factureApi';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddFactureComponent = () => {
    const [newFacture, setNewFacture] = useState({
        dateFacturation: '',
        montantTotal: '',
        statutPaiement: '',
        pdf: null,
        venteId: ''
    });

    const navigate = useNavigate();

    const handleAddFacture = async () => {
        try {
            await addFacture(newFacture);
            navigate('/factures'); // Redirige vers la liste des factures après l'ajout
        } catch (error) {
            console.error('Error adding facture:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFacture({ ...newFacture, [name]: value });
    };

    const handleFileChange = (e) => {
        setNewFacture({ ...newFacture, pdf: e.target.files[0] });
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: '#FFB6C1' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Ajouter une Nouvelle Facture
                    </Typography>
                    <TextField
                        label="Date Facturation"
                        fullWidth
                        margin="normal"
                        type="date"
                        name="dateFacturation"
                        value={newFacture.dateFacturation}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Montant Total"
                        fullWidth
                        margin="normal"
                        type="number"
                        name="montantTotal"
                        value={newFacture.montantTotal}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Statut Paiement"
                        fullWidth
                        margin="normal"
                        name="statutPaiement"
                        value={newFacture.statutPaiement}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        component="label"
                        style={{ marginTop: 20 }}
                    >
                        Télécharger PDF
                        <input
                            type="file"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddFacture}
                        style={{ marginTop: 20 }}
                    >
                        Ajouter Facture
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddFactureComponent;
