import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Bill from "./Bill";
import Payment from "./Payment";
import Confirm from "./Confirm";

function Main() {
    return (
        <Router>
            <div className="container content">
                <h1 className="heading">Complete your Purchase</h1>
                <ul className="header" id="headerLinks">
                    <li className="list"><Link className="links activeLink" to="/">Personal Info</Link></li>
                    <li className="list"><Link className="links" to="/bill">Billing Info</Link></li>
                    <li className="list"><Link className="links" to="/payment">Confirm Payment</Link></li>
                </ul>
                <div id="marker"></div>
                <hr />
                <div className="">
                    <Routes>
                    <Route exact path="/" element={ <Home /> }/>
                    <Route path="/bill" element={ <Bill /> }/>
                    <Route path="/payment" element={ <Payment /> }/>
                    <Route path="/confirm" element={ <Confirm /> }/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Main;