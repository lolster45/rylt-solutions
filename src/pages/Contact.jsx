import React, { useState } from 'react';

//styles...
import '../styles/contact.scss';

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const {value, name} = e.target;

        setForm(prev => ({...prev, [name]: value}))
    }



    return (
        <div className='contact-page'>
            <button onClick={() => console.log(form)}>CLICK ME</button>

            <section className='form-wrap'>
                <div>
                    <h1>Lets connect</h1>
                    <p>Shoot me an email if you found my profile interesting enough.</p>
                </div>
                <form>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            maxLength={25}
                            required
                        />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />  
                            {/* {emailIsInvalid &&
                                <span>
                                Invalid
                                <RiErrorWarningFill/>
                                </span>
                            } */}
                    </div>
                    <textarea
                        placeholder="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;