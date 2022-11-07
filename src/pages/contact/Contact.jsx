import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
      <span className="contactTitle">Contact us</span>
      <form className="contactForm">
        <label>Name</label>
        <input className="contactInput" type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input className="contactInput" type="email" placeholder="Enter your email" />
        <label>Subject</label>
        <input className="contactInput" type="text" placeholder="Subject" />
        <label>Message</label>
        <textarea className="contactInput" type="textarea" placeholder="Write your message here..." />
        <button className="contactButton">Send</button>
      </form>
    </div>
  )
}
