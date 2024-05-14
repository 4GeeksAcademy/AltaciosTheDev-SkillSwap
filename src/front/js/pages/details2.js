<div>
<a>Select your gender </a>
<select className="loginput" name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
    <option value="">Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
</select>
</div>
<div>
<a>Select your country </a>
<select className="loginput text-center" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
    <option value="">Country</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Honduras">Honduras</option>
    <option value="Mexico">Mexico</option>
    <option value="USA">United States of America</option>
    <option value="Spain">Spain</option>
</select>
</div>
<div>
<a>Type your city</a>
<input
    className="loginput text-center"
    type="text"
    placeholder="City"
    value={city}
    onChange={(e) => setCity(e.target.value)}
/>
</div>
<div>
<button type="button" className="nextbutton" onClick={prevPage}>
    Previous
</button>
<button type="button" className="nextbutton" onClick={confirmUserRegister}>
    Register
</button>
</div>