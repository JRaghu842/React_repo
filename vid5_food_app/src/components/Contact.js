const Contact = () => {
  return (
    <div className="contact_container">
      <section>
        <h2>Contact Information</h2>
        <address>
          <p>123 Main Street</p>
          <p>City, State ZIP Code</p>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </address>
      </section>
      <h2 className="abt-h2">Contact Form</h2>
      <section>
        <form className="cnct-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
