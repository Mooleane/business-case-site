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
                        <label for="TOS">I agree to the </label>
                        <a for="TOS" href="tos">Terms of Service</a>
                        <a>.</a>
                        <a href="Profile">
                            <button className="btn btn-hover btn-inbetween">Sign Up</button>
                        </a>
                    </form>
                    <a href="Login"><br/>Login instead?</a>
                </section>
                <FillerBox />
            </section>
        </>
    )
}