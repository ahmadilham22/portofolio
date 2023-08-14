import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmadilhamang/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://web.facebook.com/ahmadilham2210">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/aaangg__/">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/ahmadilham22">
                <img src={github} alt="" style={{ backgroundColor: 'white' }} />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
