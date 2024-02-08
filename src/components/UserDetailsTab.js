import React, { useState, useEffect } from 'react';
import { getUserData } from '../services/apiWork';
import { useAuth0 } from "@auth0/auth0-react";
 
const UserDetailsTab = () => {
  // States
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
 
  const { isAuthenticated } = useAuth0();


useEffect(()=>{
    const checkUserData = async () => {
        const newUserData = await getUserData()
        console.log(newUserData.data);
        setUsers(newUserData.data);
    }
    checkUserData();
},[])

  const filteredUsers = users.filter(
    (user) =>

      user.first_name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.phone.toLowerCase().includes(searchTerm)
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
 
  let currentUsers;
  {isAuthenticated ? currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser) : currentUsers=[]}

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl mt-2 mb-6 text-pink-600 font-extrabold tracking-wide leading-tight">
  User Details
</h2>
     
      <div className="w-full mt-4 overflow-x-auto">
  <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="pt-2 pb-3">ID</th> 
        <th className="pt-2 pb-3">Name</th>
        <th className="pt-2 pb-3">Email</th>
      </tr>
    </thead>
    <tbody>
       
      {currentUsers.map((user) => (
        <tr
          className={`${
            user.id % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          } hover:bg-gray-100 cursor-pointer`}
          key={user.id}
        >
          <td className="pt-2 pb-2 pl-32">{user.id}</td>
          <td className="pt-2 pb-2 pl-32">{user.first_name}</td>
          <td className="pt-2 pb-2 pl-32">{user.email}</td>
          <td className="pt-2 pb-2 pl-32">{user.creationDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



    
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="modal-overlay fixed inset-0 bg-black opacity-80 "></div>
          <div className="modal-content relative bg-white w-96 pl-6 pb-6 pr-8 rounded-lg shadow-lg">
            <span
              className="close cursor-pointer relative text-3xl top-[1px] left-full text-red-500"
            >
              &times;
            </span>
            <h3 className="text-xl relative inset-0 text-black font-bold font-semibold mb-4">
              User Details
            </h3>
            {selectedUser && (
              <div className="relative">
                <p className="mb-2">
                  <span className="font-bold">Name:</span>{' '}
                  {selectedUser.first_name}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Email:</span> {selectedUser.email}
                </p>
                <button
                  className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Generate Report
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsTab;
