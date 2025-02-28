import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUsers } from '../services/GetUsers';
import Navbar from './Navbar';


const Users = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await GetUsers();
            setUsers(response);
            };
        
            fetchUsers();
        }, []);

    return (
        
        <div className="container mx-auto p-4">

      {/* fondo */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="grid gap-4">
        
        <Navbar />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Users</h1>
        
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="text-white bg-gray-800">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link 
                      to={`/posts/${user.id}`} 
                      className="text-white px-4 py-1 rounded hover:bg-[#bdf8ff] hover:border-gray-800 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 bg-gray-500"
                    >
                      Posts
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    )
}

export default Users;