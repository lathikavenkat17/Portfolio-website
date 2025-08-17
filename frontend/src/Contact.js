import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "5580f833-d5b1-44c7-b39a-880c4163ac9f"); // Replace with your real key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormDetails({ email: '', message: '' });
      alert("Message sent successfully!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="contact-container">
          <div className="contact-right">
            <img src="/contact-img.svg" alt="Contact" />
          </div>
          <form onSubmit={onSubmit} className="contact-left">
            <div className="contact-left-title">
              <h2>Get in touch</h2>
              <hr />
            </div>
            <input
              type="email"
              name="email"
              value={formDetails.email}
              placeholder="Your Email"
              className="contact-inputs"
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              value={formDetails.message}
              placeholder="Your Message"
              className="contact-inputs"
              onChange={handleInputChange}
              id="message"
              required
            />
            <button className="button" type="submit">Submit</button>
          </form>
        </div>
      </section>
  
      <footer className="footer">
        <a href="https://leetcode.com/u/lathika17/" target="_blank" rel="noopener noreferrer">
          <img src="/leetcode.svg" alt="LeetCode" />
        </a>
        <a href="https://github.com/lathikavenkat17" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/lathika-v-6710322a0/" target="_blank" rel="noopener noreferrer">
          <img src="/link.png" alt="LinkedIn" />
        </a>
        <a 
          href="mailto:lathikavenkat720@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          title="lathikavenkat720@gmail.com"
        >
          <img src="/gmail.png" className="gmail" alt="Gmail" />
        </a>
      </footer>
    </>
  );
};  
export default Contact;

