import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import the components that you will route to
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import RecordList from './components/RecordList'; // Assuming you have a RecordList component
import EditRecord from './components/EditRecord'; // Assuming you have an EditRecord component
import CreateRecord from './components/CreateRecord'; // Assuming you have a CreateRecord component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<EditRecord />} />
        <Route path="/create" element={<CreateRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
