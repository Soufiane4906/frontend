import axios from 'axios';

const API_URL = 'http://localhost:8080/api/lignesdevente';

export const addLigneDeVente = async (ligneDeVente) => {
    try {
        const response = await axios.post(`${API_URL}/create`, ligneDeVente);
        return response.data;
    } catch (error) {
        console.error('Error adding ligne de vente:', error);
        throw error;
    }
};

export const getAllLignesDeVente = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lignes de vente:', error);
        throw error;
    }
};

export const getLigneDeVenteById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching ligne de vente by ID:', error);
        throw error;
    }
};

export const updateLigneDeVente = async (id, ligneDeVente) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, ligneDeVente);
        return response.data;
    } catch (error) {
        console.error('Error updating ligne de vente:', error);
        throw error;
    }
};

export const deleteLigneDeVente = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting ligne de vente:', error);
        throw error;
    }
};

export const generatePdfForLigneDeVente = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}/pdf`, {
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `ligne_de_vente_${id}.pdf`);
        document.body.appendChild(link);
        link.click();
    } catch (error) {
        console.error('Error generating PDF for ligne de vente:', error);
        throw error;
    }
};
