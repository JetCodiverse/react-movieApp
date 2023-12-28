const Footer = () => {
  return (
    <footer className="footer-a footer-a-container">
      <ul className="ul-footer-menu">
        <li>
          <ul className="footer-a-ul">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </li>
        <li>
          <h6 className="footer-brand">
            &copy; MovieLynx 2023. All Rights Reserved.
          </h6>
        </li>
        <li>
          <ul className="footer-icons-ul">
            <li>
              <div className="f-icons">
                <img className="footer-icons" src="/icons/fb-icon-lg.png" />
              </div>
            </li>
            <li>
              <div className="f-icons">
                <img className="footer-icons" src="/icons/git-icon-lg.png" />
              </div>
            </li>
            <li>
              <div className="f-icons">
                <img className="footer-icons" src="/icons/insta-icon-lg.png" />
              </div>
            </li>
            <li>
              <div className="f-icons">
                <img className="footer-icons" src="/icons/linkin-icon-lg.png" />
              </div>
            </li>
            <li>
              <div className="f-icons">
                <img
                  className="footer-icons"
                  src="/icons/twitter-icon-lg.png"
                />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
