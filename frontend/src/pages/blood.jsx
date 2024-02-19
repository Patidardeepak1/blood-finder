import React, { useState, useEffect } from 'react';
import {server} from './constant.js'
function BloodTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [bloodGroupFilter, setBloodGroupFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${server}/api/blood/blooddetials`);
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initialize filtered users with all users
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    // Filter users based on blood group, city, and state
    const filteredData = users.filter(user => {
      const bloodGroupMatch = user.bloodgroup.toLowerCase().includes(bloodGroupFilter.toLowerCase());
      const cityMatch = user.city.toLowerCase().includes(cityFilter.toLowerCase());
      const stateMatch = user.state.toLowerCase().includes(stateFilter.toLowerCase());
      return bloodGroupMatch && cityMatch && stateMatch;
    });
    setFilteredUsers(filteredData);
  }, [users, bloodGroupFilter, cityFilter, stateFilter]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4 justify-center items-center uppercase">Find Your Blood Here</h1>
      <div className="flex flex-col md:flex-row mb-4">
    <input
      type="text"
      placeholder="Filter by Blood Group"
      value={bloodGroupFilter}
      onChange={e => setBloodGroupFilter(e.target.value)}
      className="border px-4 py-2 rounded mb-2 md:mr-2 md:mb-0"
    />
    <input
      type="text"
      placeholder="Filter by City"
      value={cityFilter}
      onChange={e => setCityFilter(e.target.value)}
      className="border px-4 py-2 rounded mb-2 md:mr-2 md:mb-0"
    />
    <input
      type="text"
      placeholder="Filter by State"
      value={stateFilter}
      onChange={e => setStateFilter(e.target.value)}
      className="border px-4 py-2 rounded mb-2 md:mb-0"
    />
  </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Blood Group</th>
              <th className="px-4 py-2">Mobile Number</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user._id} className='text-center'>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.bloodgroup}</td>
                <td className="border px-4 py-2">{user.mobile}</td>
                <td className="border px-4 py-2">{user.city}</td>
                <td className="border px-4 py-2">{user.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BloodTable;
