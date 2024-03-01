import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../store/dataSlice';
import apiClient from '../services/api';

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data.data);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get('/api/users?page=1');
        console.log(data)
        dispatch(setData(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [dispatch]); 

  return (
    <div className='bg-gradient-to-tr from-pink-300 to-pink-600 h-screen p-5'>
      <h1 className='text-center p-5 text-4xl font-mono text-white'>Dashboard</h1>
      <div className="grid grid-cols-12 flex items-center gap-6">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((user) => (
            <div className="bg-pink-600 rounded-lg shadow-lg p-4 flex items-center col-span-6" key={user.id}>
              <img src={user.avatar} alt={user.first_name} className="h-1/2 rounded-full mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-white font-mono">{user.first_name} {user.last_name}</h2>
                <p className="mt-2 text-gray-200 font-mono">{user.email}</p>
              </div>
            </div>
        ))
      ) : (
        <p className='text-white'>No user data available.</p>
      )}
      </div>
    </div>
  );
};

export default Dashboard;
