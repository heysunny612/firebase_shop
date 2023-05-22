import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const { isGettingUser } = useUserContext();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {!isGettingUser ? (
        '로딩중입니다'
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </QueryClientProvider>
  );
}

export default App;
