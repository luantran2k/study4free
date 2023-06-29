import { useLocation } from 'react-router-dom';

function ResultPage() {
  const { state } = useLocation();
  return <div>ResultPage</div>;
}

export default ResultPage;
