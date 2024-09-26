exports.getContactUs = (req, res) => {
    res.send(`
      <h1>Contact Us</h1>
      <form action="/success" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    `);
  };
  