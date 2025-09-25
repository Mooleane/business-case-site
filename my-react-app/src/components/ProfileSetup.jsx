export default function ProfileSetup() {
    return (
        <section id="container">
            <section className="profile-setup">
                <form>
                    <p>
                        <label htmlFor="age">Age: </label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age" 
                            min="1" 
                            max="120" 
                            required 
                        />
                        <br/><br/>
                        <label htmlFor="country">Country: </label>
                        <select id="country" name="country" required>
                            <option value="">Select a country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                        </select>
                        <br/><br/>
                        <label htmlFor="state">State: </label>
                        <select id="state" name="state">
                            <option value="">Select a state</option>
                            <option value="pa">PA</option>
                            <option value="ny">NY</option>
                            <option value="ca">CA</option>
                        </select>
                    </p>

                    <p>
                        <label htmlFor="hobbies">Hobbies: </label><br/>
                        <textarea 
                            id="hobbies" 
                            name="hobbies" 
                            rows="4"
                            cols="50" 
                            placeholder="List your hobbies"
                        />
                        <br/><br/>
                        <label htmlFor="work">Work Preferences:</label><br/>
                        <textarea 
                            id="work" 
                            name="work" 
                            rows="4" 
                            cols="50"
                            placeholder="Describe your work preferences"
                        />
                    </p>

                    <section>
                        <button type="submit" className="btn btn-hover btn-secondary">Save</button>
                    </section>
                </form>
            </section>
        </section>
    )
}