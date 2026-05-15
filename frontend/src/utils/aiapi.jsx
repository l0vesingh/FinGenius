import React from "react";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Or http://127.0.0.1:8000

export const fetchRecommendations = async (userId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recommend`, {
      user_id: userId,
    });

    return response.data; // This will be the list of stock recommendations
  } catch (error) {
    console.error('Error fetching recommendations:', error.response?.data || error.message);
    throw error;
  }
};
