import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import { updateFacture, getFactureById } from '../api/factureApi';
import { useNavigate } from 'react-router-dom';

const EditFactureComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [editFacture, setEditFacture] = useState({
        dateFacturation: '',
        montantTotal: '',
        statutPaiement: '',
        pdf: null,
        venteId: ''
    });

    useEffect(() => {
        const fetchFacture = async () => {
            try {
                const facture = await getFactureById(id);
                setEditFacture(facture);
            } catch (error) {
                console.error('Error fetching facture by ID:', error);
            }
        };
        fetchFacture();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFacture({ ...editFacture, [name]: value });
    };

    const handleFileChange = (e) => {
        setEditFacture({ ...editFacture, pdf: e.target.files[0] });
    };

    const handleUpdateFacture = async () => {
        try {
            await updateFacture(id, editFacture);
            navigate('/factures');
        } catch (error) {
            console.error('Error updating facture:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" style={{ padding: 20, backgroundColor: 'rgb(239 239 239)' }}>
            <Grid item xs={12} md={6}>
                <Paper style={{ padding: 20, backgroundColor: '#FF69B4' }}>
                    <Typography variant="h6" gutterBottom>
                        Modifier la Facture
                    </Typography>
                    <TextField
                        label="Date Facturation"
                        fullWidth
                        margin="normal"
                        type="date"
                        name="dateFacturation"
                        value={editFacture.dateFacturation}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Montant Total"
                        fullWidth
                        margin="normal"
                        type="number"
                        name="montantTotal"
                        value={editFacture.montantTotal}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Statut Paiement"
                        fullWidth
                        margin="normal"
                        name="statutPaiement"
                        value={editFacture.statutPaiement}
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
                        onClick={handleUpdateFacture}
                        style={{ marginTop: 20 }}
                    >
                        Mettre à jour Facture
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default EditFactureComponent;
