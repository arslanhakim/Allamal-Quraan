import React, { useEffect, useRef, useState } from "react";
import "../styles/autofill.css";
import axios from "axios";
import useIntersectionObserver from "./useIntersectionObserver";

const ContactForm = ({ contactRef }) => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [contacts, setContacts] = useState([]);
  const baseURL = "https://allamal-quraan-backend-1.vercel.app";
  // const baseURL = "https://allamalquraan.netlify.app";

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${baseURL}/api/contacts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  const ref = useIntersectionObserver("animate-slideUp");

  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/api/contacts`)
  //     .then((response) => response.json())
  //     .then((data) => setContacts(data))
  //     .catch((error) => console.error("Error fetching contacts:", error));
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: name.current!.value,
      email: email.current!.value,
      phone: phone.current!.value,
      message: message.current!.value,
    };
    try {
      console.log("trying to submit");
      const response = await axios.post(
        // `https://allamal-quraan-backend-git-main-arslanhakims-projects.vercel.app/send`,
        `${baseURL}/send`,
        data
      );
      if (response.status === 200) {
        alert("Message sent successfully!");
        fetchContacts();
        // Reset form fields
        name.current!.value = "";
        email.current!.value = "";
        phone.current!.value = "";
        message.current!.value = "";
      }
    } catch (error) {
      console.error("There was an error sending the message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  const css =
    "w-full p-3 border text-black-dark hover:text-white border-primary rounded bg-white outline-primary placeholder:text-primary hover:bg-primary hover:placeholder-white";

  return (
    <section  className="py-12 bg-white mx-2" ref={contactRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
        <p className="font-normal mb-6 mx-20">
          If you have any other questions or need further assistance, please
          feel free to contact us.
        </p>
        <h2 className="text-2xl font-semibold text-primary mb-6">Contact Us</h2>
        <form className="max-w-xl mx-4 md:mx-auto " onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className={`${css}`}
              placeholder="Name *"
              // value={name}
              name="name"
              ref={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              className={`${css}`}
              placeholder="Email *"
              ref={email}
              required
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              name="phone"
              className={`${css}`}
              placeholder="Phone Number"
              ref={phone}
              // onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              required
              name="message"
              className={`${css}`}
              placeholder="Your Message *"
              ref={message}

              // onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover:bg-white hover:text-black-dark border hover:border-primary border-primary bg-primary text-white font-serif py-3 px-6 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
