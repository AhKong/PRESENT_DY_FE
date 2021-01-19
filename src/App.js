import logo from './logo.svg';
import './App.css';
import myImg from './myimg.png'
import  './css/main.css'

function App() {
    return (
        <div style={{backgroundColor:"#5B9BD5",width:"100%",height:""}}>
            <div style={{backgroundColor:"#5B9BD5",width:"100%",height:"70px",margin:"auto"}}>
            </div>
            <div style={{backgroundColor:"#FFC001",width:"70%",height:"300px",margin:"auto",marginTop:"50px"}}>

                <h1>도연아 사랑해^^</h1>
            </div>

            <div className="menu-warp">
                <div className="menu">메뉴1</div>
                <div className="menu">메뉴2</div>
                <div className="menu">메뉴3</div>

            </div>

            <div className="footer">
                dev ahkong
            </div>

        </div>
    );
}

export default App;
