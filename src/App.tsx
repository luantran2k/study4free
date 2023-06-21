import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const routesElement = useRoutes(routes);
  return <>{routesElement}</>;
}

export default App;
