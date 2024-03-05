import React, { useState } from 'react';

function UserRequest() {
    const [IsFocused, setIsFocused] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to server
    }

    return (
        <div className="userReq">

            <form className="d-flex p-2" action="/send-message" method="post">
                <div className="d-flex col-xl-11">
                    <input type="text" id="first-name" placeholder='First Name' name="first-name" className='m-1' required />
                    {/* <label htmlFor="first-name">First Name</label> */}
                    <input type="text" id="last-name" placeholder='Last Name' name="last-name" className=' m-1' required />
                    {/* <label htmlFor="last-name">Last Name</label> */}
                </div>

                <div className="flex-row col-xl-11">
                    <input type="date" id="birth-date" name="birth-date" placeholder='Birth date' className='m-1' required />
                    <input type="text" id="city" name="city" placeholder='City' className='w-100 m-1' required />
                    {/* <label htmlFor="birth-date">Birth Date</label> */}
                </div>

                <div className="d-flex col-xl-11">
                    <input type="tel" id="phone" name="phone" placeholder='Phone' className=' m-1' required />
                    {/* <label htmlFor="phone">Phone</label> */}

                    <input type="text" id="country" name="country" placeholder='Country' className=' m-1' required />
                    {/* <label htmlFor="country">Country</label> */}
                </div>


                <div className="d-flex col-xl-11">
                    <textarea id="message" name="message" placeholder='Message' className='col-12 m-1' required></textarea>
                    {/* <label htmlFor="message">Message</label> */}
                </div>

                <input type="submit" className="col-xl-5" value="Send Message" />
            </form>        </div>
    );
}

export default UserRequest;