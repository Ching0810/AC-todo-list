import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
import { AuthProvider } from 'context/AuthContext';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='login' element={<LoginPage />}></Route>
            <Route path='signup' element={<SignUpPage />}></Route>
            <Route path='todos' element={<TodoPage />}></Route>
            <Route path='*' element={<HomePage />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div> 
  );
}

// test commit

export default App;
