import axios from 'axios';

const API_URL = 'http://localhost:8080/api/facture'; 

export const addFacture = async (factureData) => {

        try {
            const response = await axios.post(`${API_URL}/create` , factureData);
            return response.data;
        } catch (error) {
            console.error('Error adding Facture:', error);
            throw error;
        }
    };
    
 

export const getAllFactures = async () => {
    try {
        const response = await axios.get(API_URL);
        debugger;
        return response.data;
    } catch (error) {
        console.error('Error fetching factures:', error);
        throw error;
    }
};

export const getFactureById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching facture by ID:', error);
        throw error;
    }
};

export const updateFacture = async (id, factureData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, factureData);
        return response.data;
    } catch (error) {
        console.error('Error updating facture:', error);
        throw error;
    }
};

export const deleteFacture = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting facture:', error);
        throw error;
    }
};
