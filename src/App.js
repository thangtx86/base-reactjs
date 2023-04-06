import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Route exact path="/" render={() => <Home />} />
                </header>
            </div>
        </Provider>
    );
}

export default App;
