import axios from 'axios';

const API_URL = 'http://localhost:8080/api/client';

export const addClient = async (client) => {
    try {
        const response = await axios.post(`${API_URL}/create`, client);
        return response.data;
    } catch (error) {
        console.error('Error adding client:', error);
        throw error;
    }
};

export const getAllClients = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};

export const getClientById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching client by ID:', error);
        throw error;
    }
};

export const updateClient = async (id, client) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, client);
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw error;
    }
};

export const deleteClient = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error;
    }
};
