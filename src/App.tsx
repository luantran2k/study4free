import { useRoutes } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import { Suspense, useEffect } from 'react';
import { setUser } from './store/slices/authSlice';
import { routes } from './routes';
import LoadingAnimate from './components/common/LoadingAnimate';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  const routesElement = useRoutes(routes);
  return <Suspense fallback={<div className='w-full h-screen flex items-center justify-center'>
    <LoadingAnimate />
  </div>}>
    {routesElement}</Suspense>
}

export default App;
