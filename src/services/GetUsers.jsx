import React from 'react'
import axios from "axios";

const GetUsers = async () => {

        try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/users`);
                console.log(response.data);
                return response.data; 
            } catch (error) {
                console.log(error.message);
                return null;
            }
        
};

const GetUsersPost = async (id) => {
    
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_URL}/posts?userId=${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    
};


export {GetUsers, GetUsersPost};