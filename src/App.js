import { Route, Routes } from 'react-router-dom'
import LandingPage from "./views/LandingPage";
import HomeDetailPage from './views/HomeDetailPage';

function App() {
  return (
    <div className="">
      <Routes>
          <Route path="/room/:id" element={<HomeDetailPage/>} />
          <Route path="/" element={<LandingPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
