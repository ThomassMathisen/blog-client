import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
