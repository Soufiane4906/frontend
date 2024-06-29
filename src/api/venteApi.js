import axios from 'axios';

const API_URL = 'http://localhost:8080/api/ventes';

export const addVente = async (vente) => {
    try {
        const response = await axios.post(`${API_URL}/create`, vente);
        debugger;
        return response.data;
    } catch (error) {
        console.error('Error adding vente:', error);
        throw error;
    }
};

export const getAllVentes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching ventes:', error);
        throw error;
    }
};

export const getVenteById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching vente by ID:', error);
        throw error;
    }
};

export const updateVente = async (id, vente) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, vente);
        return response.data;
    } catch (error) {
        console.error('Error updating vente:', error);
        throw error;
    }
};

export const deleteVente = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting vente:', error);
        throw error;
    }
};
