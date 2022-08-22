import React from "react";
import { Link } from "react-router-dom";

function Payment() { 

        return (
            <div className="container">
                <div className="paymentSection">
                    <table className="table">
                        <thead>
                            <th>Item Name</th>
                            <th>&#8358; Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data science and usability</td>
                                <td>50,000.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="zero">0.00</td>
                            </tr>
                            <tr>
                                <td colSpan={2} id="horizontal"></td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td>50,000.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-group row">
                        <div className="col-5">
                            <Link to="/confirm"><button type="submit" className="btn form-control" id="nextBtn">Pay</button></Link>
                        </div>
                        <div className="col-6">
                            <Link to="/" className="form-control cancel">Cancel Payment</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Payment;