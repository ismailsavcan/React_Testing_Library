import React from 'react'

function Application() {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span title='close'>X</span>
            <img src='https://media.istockphoto.com/id/1352603244/tr/foto%C4%9Fraf/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=612x612&w=0&k=20&c=W8uGSP_yJU3PSlD3EPjIQ5Odhfl3eZyI4LnAMPRZuSs=' 
            alt='a person with a laptop' />
            <div data-testid='custom-element'>Custom HTML element</div>
            <form>
                <div>
                    <label htmlFor='name'>Name  </label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Fullname'
                        value="Ismail"
                        onChange={() => { }} />
                </div>
                <div>
                    <label htmlFor='bio'>Bio  </label>
                    <textarea id='bio' name='bio' />
                </div>
                <div>
                    <label htmlFor='job-location'>Name </label>
                    <select>
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="In">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type='checkbox' id='terms' /> I aggree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
};

export default Application;
