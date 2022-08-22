import React from "react";
import { NavLink } from "react-router-dom";

function Bill() {


        return (
            <div className="container">
                <form className="cardForm">
                    <div className="form-group">
                        <label htmlFor="cardname">Name on Card <span className="redAsterick">*</span></label>
                        <input type="text" name="cardname" className="form-control" placeholder="Opara Linus Ahmed"></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="cardtype">Card Type <span className="redAsterick">*</span></label>
                        <select id="cardtype" name="cardtype" className="form-control">
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="Verve">Verve</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-6 cdd">
                            <label htmlFor="carddetails">Card details <span className="redAsterick">*</span></label>
                            <input type="text" name="carddetails" className="form-control" placeholder="44960 44960 44960 44960"></input>
                        </div>
                        <div className="col-3 ex">
                            <label htmlFor="expiry">Expiry date <span className="redAsterick">*</span></label>
                            <input type="text" name="expiry" className="form-control" placeholder="04 / 23"></input>
                        </div>
                        <div className="col-3 ex">
                            <label htmlFor="cvv">CVV <span className="redAsterick">*</span></label>
                            <input type="text" name="cvv" className="form-control" placeholder="923"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-5">
                            <NavLink to="/payment"><button type="submit" className="btn form-control" id="nextBtn">Next</button></NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to="/" className="form-control cancel">Cancel Payment</NavLink>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </form>
            </div>
        );
}

export default Bill;