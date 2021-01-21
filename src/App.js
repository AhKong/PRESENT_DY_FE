import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from "./page/mainPage";
function App() {


    return (
        <div>
            <Route path="/" component={MainPage} exact/>

        </div>

    );
}

export default App;
