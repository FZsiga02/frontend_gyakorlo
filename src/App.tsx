import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/bemutatkozas' element={<Introduction />} />
          <Route path='/kapcsolat' element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  }

}

export default App;
