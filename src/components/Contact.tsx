import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:wreja2030@gmail.com" data-cursor="disable">
                wreja2030@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <a href="https://maps.google.com/?q=West+Bengal,+India" data-cursor="disable" target="_blank" rel="noreferrer">
                West Bengal, India
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://youtube.com/@washimrejaa9"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/cinematic_vibes_by_washim"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/share/1FM2JECxT2/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Washim Reja</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
