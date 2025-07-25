import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./components/Home'));
const NavbarComponent = lazy(() => import('./components/Navbar'));

function App() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );


  const toggleDark = () => {
    const newMode = !darkMode;
    console.log(`tema sekarng : ${darkMode}`)
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename={import.meta.env.VITE_PUBLIC_URL}>
        <div className="pt-20 min-h-screen bg-background text-textColor transition-colors">
          <NavbarComponent toggleDark={toggleDark} toggleLanguage={toggleLanguage} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
