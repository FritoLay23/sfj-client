import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth.c';
import { useAuthStore } from './store/auth.store';

// Pages - Father
import Public from './pages/Public.p';
import Private from './pages/Private.p';

// Pages - Children
import Home from './pages/publicpages/Home.p';
import About from './pages/publicpages/About.p';
import Login from './pages/publicpages/Login.p';
import NoPageP from './pages/publicpages/NoPage.p';
import IndexP from './pages/privatepages/Index.p';
import UsersP from './pages/privatepages/Users.p';
import QuestionsP from './pages/privatepages/Questions.p';
import GamesP from './pages/privatepages/Games.p';
import ScoresP from './pages/privatepages/Scores.p';

const App = () => {

  const isAuth = useAuthStore(state => state.isAuth);

  return (
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Public Comp={Home} />} />
          <Route path="/about" element={<Public Comp={About} />} />
          <Route path="/login" element={<Public Comp={Login} />} />
          <Route path="*" element={<Public Comp={NoPageP} />} />

          {/* Private Pages */}
          <Route element={<RequireAuth isAllowed={isAuth} />}>
            <Route path="/auth" element={<Private Comp={IndexP} />} />
            <Route path="/auth/users" element={<Private Comp={UsersP} />} />
            <Route path="/auth/questions" element={<Private Comp={QuestionsP} />} />
            <Route path="/auth/games" element={<Private Comp={GamesP} />} />
            <Route path="/auth/scores" element={<Private Comp={ScoresP} />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;