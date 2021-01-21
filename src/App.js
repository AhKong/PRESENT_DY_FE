import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from "./page/mainPage";
import MemoryPage from "./page/memoryPage";
import SongsPage from "./page/SongsPage";
function App() {


    return (
        <div>
            <Route path="/" component={MainPage} exact/>
            <Route path="/WeLoveYou" component={MemoryPage}/>
            <Route path="/congratulations-on-your-graduation" component={SongsPage}></Route>
        </div>

    );
}

export default App;
