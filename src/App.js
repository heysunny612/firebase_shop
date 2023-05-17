import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Outlet />
    </UserProvider>
  );
}

export default App;
