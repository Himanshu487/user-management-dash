// Dashboard Page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Make sure to import your Navbar component
import UserDetailsTab from './UserDetailsTab'; // Import your UserDetailsTab component
// import AccountCreationTab from './AccountCreationTab'; // Import your AccountCreationTab component

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Router>
        <header className="bg-blue-500 text-white py-4">
          {/* Heading */}
          <h1 className="text-5xl text-center font-bold">User Management Dashboard</h1>
        </header>
        <Navbar />
        {/* Navbar and Routing */}
        <main className="flex-grow p-4">
          <Routes>
            {/* <Route path="/dashboard/userDetails" element={<UserDetailsTab />} /> */}
            <Route path="/" element={<UserDetailsTab />} />
            {/* <Route path="/dashboard/accountCreation" element={<AccountCreationTab />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default Dashboard;
