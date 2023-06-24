import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { setUser } from './store/slices/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  const routesElement = useRoutes(routes);
  return <>{routesElement}</>;
}

export default App;
