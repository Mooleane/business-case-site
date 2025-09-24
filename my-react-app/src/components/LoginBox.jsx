import FillerBox from "./FillerBox"

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
                    </form>
                    <button className="btn btn-inbetween">Login</button>
                    <a href="Signup"><br/>Create an Account</a>
                </section>

            </section>
        </>
    )
}