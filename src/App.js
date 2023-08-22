import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HashRouter, Navigate } from 'react-router-dom';
import {Routes, Route} from "react-router";
import MovieReviewer from './movie-reviewer';


function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/"         element={<Navigate to={"/reviewer/home"}/>}/>
          <Route path="/reviewer" element={<Navigate to={"/reviewer/home"}/>}/>
          <Route path="/reviewer/*" element={<MovieReviewer/>}/>


        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;
