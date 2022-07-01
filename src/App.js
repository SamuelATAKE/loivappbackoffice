import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Organisations from './pages/organisations/Organisations';
import TeleOperateurs from './pages/teleoperateurs/TeleOperateurs';
import Utilisateurs from './pages/utilisateurs/Utilisateurs';
import Declarations from './pages/declarations/Declarations';
import Assignations from './pages/assignations/Assignations';
import AddOrganisation from './pages/organisations/AddOrganisation';
import AddDeclaration from './pages/declarations/AddDeclaration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/organisations" element={<Organisations />} />
        <Route index path="/ajouter-organisation" element={<AddOrganisation />} />

        <Route index path="/tele-operateurs" element={<TeleOperateurs />} />
        <Route index path="/utilisateurs" element={<Utilisateurs />} />

        <Route index path="/declarations" element={<Declarations />} />
        <Route index path="/ajouter-declaration" element={<AddDeclaration />} />

        <Route index path="/assignations" element={<Assignations />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
