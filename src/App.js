
import './App.css';
import LoginPage from './loginPage/loginPage';
import Dashboard from './Dashboard/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}>

        </Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes> 
         </BrowserRouter>

  );
}

export default App;


