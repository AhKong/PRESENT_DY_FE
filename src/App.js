import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from "./page/mainPage";
import MemoryPage from "./page/memoryPage";
function App() {


    return (
        <div>
            <Route path="/" component={MainPage} exact/>
            <Route path="/WeLoveYou" component={MemoryPage}/>
        </div>

    );
}

export default App;
