exports.postSuccess = (req, res) => {
    const { name, email, message } = req.body;
  
    // In a real app, you could store this data in a database, log it, or process it further.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
    res.send(`
      <h1>Success</h1>
      <p>Thank you, ${name}! Your message has been received.</p>
    `);
  };
  