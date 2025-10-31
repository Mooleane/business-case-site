import { Link } from "react-router-dom";
import FillerBox from "./FillerBox";

export default function SignupBox() {
    return (
        <>
            <section  id="container">
                <section className="signup-box">
                    <form>
                        <input className="btn btn-secondary" 
                            type="email"
                            placeholder="Email"
                        />
                        <input className="btn btn-secondary"
                            type="text"
                            placeholder="Username"
                        />
                        <input className="btn btn-secondary"
                            type="password"
                            placeholder="Password"
                        />
                        <input className="btn btn-secondary"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </form>
                    <form>
                        <input
                            type="checkbox"
                            name="TOS"
                        />
                        <label>I agree to the </label>
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <a>.</a>
                        <br/>
                        <br/>
                        <Link to="/Profile" className="btn btn-hover btn-inbetween">Sign Up</Link>
                    </form>
                    <br/>
                    <Link to="/Login">Login instead?</Link>
                </section>
                <FillerBox />
            </section>
        </>
    )
}