import axios from 'axios';

const API_URL = 'http://localhost:8080/api/produits';

export const addProduit = async (produitData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, {
            nom: produitData.nom,
            prix: produitData.prix,
            quantiteEnStock: produitData.quantiteEnStock,
            description: produitData.description

        });
        return response.data;
    } catch (error) {
        console.error('Error adding produit:', error);
        throw error;
    }
};


export const getAllProduits = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        debugger
        return response.data;
    } catch (error) {
        console.error('Error fetching produits:', error);
        throw error;
    }
};

export const getProduitById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching produit by ID:', error);
        throw error;
    }
};

export const updateProduit = async (id, produitData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, produitData);
        debugger;
        return response.data;
    } catch (error) {
        console.error('Error updating produit:', error);
        throw error;
    }
};

export const deleteProduit = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        debugger;
        return response.data;
    } catch (error) {
        console.error('Error deleting produit:', error);
        throw error;
    }
};
