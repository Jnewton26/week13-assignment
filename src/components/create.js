import React from "react";

export default class Create extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <div className="col-md-6">
                        <label for="exampleEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control is-valid" name="email" id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                        <div className="form-text" id="emailHelp">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-md-4">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" class="form-control is-valid" id="exampleInputPassword1" />
                    </div>

                    <div class="bd-example row g-3">
                        <div class="col-md-4">
                            <label for="validationServer01" className="form-label">First name</label>
                            <input type="text" className="form-control is-valid" id="validationServer01" value="" required="" />

                        </div>
                        <div class="col-md-4">
                            <label for="validationServer02" className="form-label">Last name</label>
                            <input type="text" className="form-control is-valid" id="validationServer02" value="" required="" />

                        </div>
                        <div className="col-md-4">
                            <label for="validationServerUsername" className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                <input type="text" class="form-control is-valid" id="validationServerUsername"
                                    aria-describedby="inputGroupPrepend3" required="" />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationServer03" className="form-label">City</label>
                            <input type="text" className="form-control is-valid" id="validationServer03" required="" />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="validationServer04" className="form-label">State</label>
                            <select className="form-select is-valid" id="validationServer04" required="">
                                <option selected="" disabled="" value="">Choose...</option>
                                <option>...</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationServer05" className="form-label">Zip</label>
                            <input type="text" className="form-control is-valid" id="validationServer05" required="" />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <a className="d-flex align-items-center" href="/docs/5.0/components/alerts/">Terms and
                                    Conditions</a>

                                <input className="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3"
                                    required="" />
                                <label className="form-check-label" for="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}