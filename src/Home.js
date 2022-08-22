import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="container">
            <form method="post">
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" className="form-control" placeholder="Opara Linus Ahmed"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="userpassword">Email Address <span className="redAsterick">*</span></label>
                    <small className="form-text text-muted">The purchase reciept would be sent to this address</small>
                    <input type="password" name="userpassword" className="form-control" placeholder="OparaLinusAhmed@devmail.com"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="address1">Address 1</label>
                    <input type="text" name="address1" className="form-control" placeholder="The address of the user goes here"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" name="address2" className="form-control" placeholder="and here"></input>
                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <label htmlFor="lg">Local Government</label>
                        <input type="text" name="lg" className="form-control" placeholder="Surulere"></input>
                    </div>
                    <div className="col-6">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" className="form-control" defaultValue={'Lagos'}>
                            <option value="Lagos" disabled>Lagos</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Delta">Delta</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-5">
                        <Link to="/bill"><button type="submit" className="btn form-control" id="nextBtn">Next</button></Link>
                    </div>
                    <div className="col-3">
                        <Link to="/" className="form-control cancel">Cancel Payment</Link>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default Home;