import FillerBox from "./FillerBox"

export default function SignupBox() {
    return (
        <>
            <section  id="container">
                <section className="signup-box">
                    <form>
                        <input className="btn btn-secondary" 
                            type="text"
                            placeholder="Email"
                        />
                        <input className="btn btn-secondary"
                            type="text"
                            placeholder="Username"
                        />
                        <input className="btn btn-secondary"
                            type="text"
                            placeholder="Password"
                        />
                        <input className="btn btn-secondary"
                            type="text"
                            placeholder="Confirm Password"
                        />
                    </form>
                    <form>
                        <input
                            type="checkbox"
                            name="TOS"
                        />
                        <label for="TOS">I agree to the Terms of Service.</label>
                    </form>
                    <button className="btn btn-secondary">Sign Up</button>
                    <a href="Login"><br/>Login Instead</a>
                </section>
                <FillerBox />
            </section>
        </>
    )
}