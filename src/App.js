import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

function App() {
  const { isGettingUser } = useUserContext();
  return (
    <>
      {!isGettingUser ? (
        '로딩중입니다'
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
