import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
    </UserContextProvider>
  );
}

export default App;
