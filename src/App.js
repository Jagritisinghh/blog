import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BlogPost from "./components/BlogPost"

import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogPost />} />

      </Routes>
    </Router>
  );
}

export default App;
