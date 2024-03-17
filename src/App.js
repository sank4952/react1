//import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Dash from './components/dash';
import Header from './components/Header';
import Uploads from './components/uploads';
import Newdash from './components/newdash';
function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Register />} />
			<Route path="/login" element={<Login/>}/>
			<Route path="/dash" element={<Dash/>}/>
			<Route path='/head' element={<Header/>}/>
			<Route path='/upload' element={<Uploads/>}/>
			<Route path='/da' element={<Newdash/>}/>
		</Routes>
		</BrowserRouter>
    </div>
  );
}
export default App;
