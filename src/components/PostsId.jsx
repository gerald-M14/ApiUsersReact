import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetUsersPost } from '../services/GetUsers';
import Navbar from './Navbar';



const PostsId = () => {
  const { id } = useParams(); 
  const [posts, setPosts] = useState([]);
      
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response  = await GetUsersPost(id);
            if (response ) {
              setPosts(response ); 
            }
          } catch (error) {
            console.error(error.message);
          }
        };

        fetchPosts();

      }, [id]);
      
  return (
    <div className="container mx-auto p-4"> 
      <Navbar />
      {/* fondo */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
                    </div>

        
      <div className="min-h-screen flex flex-col items-center py-8 px-4">

        

            <Link to="/Users" className="absolute top-0 left-0 m-4 text-white px-4 py-2 rounded shadow-md bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"> Back </Link>            
            
          <h1 className="text-5xl font-bold mb-4 pb-7">Posts by user <strong>{id}</strong> </h1>
          
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
            {posts.map((post) => (
              <div 
              key={post.id} 
              className="relative w-64 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-9 space-y-3 overflow-hidden">
                  <div className="w-20 h-20 bg-gray-800 rounded-full absolute -right-8 -top-9">
                  <p className="absolute bottom-3 left-5 text-white text-1xl cursor-default font-medium">{post.userId}</p>
                </div>
                <h1 className="font-bold text-xl mt-5 capitalize cursor-default">{post.title}</h1>
                <p className="text-sm text-zinc-500 leading-6 first-letter:uppercase cursor-default">{post.body}</p>
              </div>
            ))}
          </div>
          

      </div>

    </div>
  )
}

export default PostsId;