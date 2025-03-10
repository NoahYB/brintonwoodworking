import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <section className="about-section">
        <h1>About the Craftsman</h1>
        <div className="about-content">
          <div className="craftsman-image">
            <img
              src="https://images.unsplash.com/photo-1614583225523-4276100207fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Craftsman working in workshop"
            />
          </div>
          <div className="craftsman-bio">
            <p>
              With over 20 years of experience in fine woodworking, I've
              dedicated my life to creating beautiful, functional pieces that
              stand the test of time. My journey began as an apprentice in a
              small cabinet shop, where I learned traditional techniques from
              master craftsmen.
            </p>
            <p>
              Today, I bring those time-honored methods together with
              contemporary design principles, creating furniture and cabinetry
              that blends seamlessly with modern living while maintaining the
              warmth and character that only real wood can provide.
            </p>
            <p>
              Each piece I create is handcrafted in my workshop using
              sustainably sourced hardwoods and finished with non-toxic,
              environmentally friendly materials.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong> info@brintonwoodworking.com
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Studio Hours:</strong> Monday-Friday, 9am-5pm
            </p>
            <p>
              <strong>Location:</strong> Portland, Oregon
            </p>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
