import React from "react";
import { Link } from "react-router-dom";

function Confirm() {

    return (
        <div className="container confirmSection">
            <div><i class="fas fa-check"></i></div>
            <h2>Purchase Completed</h2>
            <p>Please check your email for details concerning <br /> this transaction.</p>
            <Link to="/" className="return">Return Home</Link>
        </div>
    );

}

export default Confirm;