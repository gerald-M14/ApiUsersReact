import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 flex justify-end items-center gap-8">
      <div className="container__inicio">
        <Link className="text-black text-lg font-bold hover:text-blue-400 transition duration-300 ease-in-out" to="/">Home</Link>
      </div>

      <div className="container__Usuario">
        <Link className="text-black text-lg font-bold hover:text-blue-400 transition duration-300 ease-in-out" to="/Users">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
