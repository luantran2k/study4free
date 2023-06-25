import { useRoutes } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import { Suspense, useEffect } from 'react';
import { setUser } from './store/slices/authSlice';
import { routes } from './routes';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  const routesElement = useRoutes(routes);
  return <Suspense fallback={<h1>Loading...</h1>}>{routesElement}</Suspense>
}

export default App;
