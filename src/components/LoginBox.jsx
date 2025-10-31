import { Link } from "react-router-dom";

export default function LoginBox() {
    return (
        <>
            <section  id="container">
                <section className="login-box">
                    <form>
                        <input className="btn btn-secondary" 
                            type="text"
                            placeholder="Email"
                        />
                        <input className="btn btn-secondary"
                            type="text"
                            placeholder="Password"
                        />
                        <br/>
                        <br/>
                        <Link to="/Dashboard" className="btn btn-hover btn-inbetween">Login</Link>
                    </form>
                    <br/>
                    <Link to="/Signup">Sign up instead?</Link>
                </section>
            </section>
        </>
    )
}