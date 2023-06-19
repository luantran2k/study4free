import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './pages/layouts/Root';
import HomePage from './pages/Home';
import ExamsPage from './pages/Exams';
import VocabulariesPage from './pages/Vocabularies';
import GrammarPage from './pages/Grammar';
import AdminLayout from './pages/layouts/Admin';
import Authentication from './pages/Authentication/Authentication';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="exams" element={<ExamsPage />} />
          <Route path="vocabularies" element={<VocabulariesPage />} />
          <Route path="grammar" element={<GrammarPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="login" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
