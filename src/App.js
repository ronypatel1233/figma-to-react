import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import Hero from './components/Home';
import About from './components/About';
import Services from './components/Service';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <main>
            <Hero />
            <Services />
            <About />
          </main>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
