import React, { useEffect, useState } from 'react';
import { Link, Element, Events } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode, faCog,} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import aboutimage from './about-image.svg';
import serviceimage from './service-image.svg';
import mobile from './mobile.svg';
import design from './design.svg';
import responsiveimage from './responsive.svg';
import hostimage from './hosting.svg';
import seoimage from './seo.svg';
import isaac from './isaac.jpg';
import woman from './woman.jpg';
import amaka from './amaka.jpg';
import contactus from './contactus.svg';
import faqimage from './FAQs-pana.svg';

function App() {
  const [isTimes, setIsTimes] = useState(false);
  const [isNavToggled, setIsNavToggled] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleToggle = () => {
    setIsTimes((prevIsTimes) => !prevIsTimes);
    setIsNavToggled((prevIsToggled) => !prevIsToggled);
  };

  const handleScrollEvent = () => {
    if (window.scrollY > 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    const handleScroll = handleScrollEvent;

    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    background: scrolling ? '#6c5ce7' : 'none',
    boxShadow: scrolling ? '0 .2rem .5rem rgba(0,0,0,.4)' : 'none',
  };

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const accordions = [
    { title: 'What is the cost of web & mobile app development?', content: 'Our development costs vary widely, depending on factors like complexity and features.'},
    { title: 'How can I ensure the security of my web or mobile app?', content: 'Security is a top concern. It is crucial to employ industry-standard security practices, such as data encryption, authentication, and authorization mechanisms. Regular security audits and testing are essential to identify vulnerabilities. ' },
    { title: 'What is the difference between web and mobile app development?', content: 'Web app development primarily focuses on creating applications that run in web browsers and can be accessed on various devices with internet connectivity. Mobile app development, on the other hand, is specifically for building applications that are installed and run on mobile devices like smartphones and tablets. The main difference lies in the platform and user experience.' },
    { title: 'How long does it take to develop a web or mobile app?', content: ' The development timeline varies based on the complexity of the app, features, and design. Simple apps can take a few weeks, while more complex projects may take several months.' },
    { title: 'Do you offer mentorship?', content: 'We do offer this service, and there is a fee associated with it.' },
    // Add more accordion items as needed
  ];

  const toggleSection = (index) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const sections = [
    {
      title: 'web apps & mobile apps Development',
      content: 'At our core, we are creators who turn your vision into reality. With our expert website and mobile app development services, your ideas will take shape as powerful digital solutions, empowering your business for success.',
      image: serviceimage,
    },
    {
      title: 'Seamless Access Anytime, Anywhere with Mobile-Friendly Solutions',
      content: 'Experience the power of seamless accessibility with our mobile-friendly services. We ensure that your web and mobile applications are perfectly optimized, providing your customers with a user-friendly experience on any device, anywhere, and at any time.',
      image: mobile,
    },
    {
      title: 'Seamless User Experiences with Responsive Design',
      content: 'Experience the power of responsive design that adapts to any device. We create websites and apps that provide seamless user experiences on desktops, tablets, and smartphones, ensuring your audience can connect with your brand anytime, anywhere.',
      image: responsiveimage,
    },
    {
      title: 'web hosting',
      content: 'Discover the power of reliable web hosting services. We provide your business with a secure and dependable digital home on the internet, ensuring your website is always accessible to your audience, 24/7.',
      image: hostimage,
    },
    {
      title: 'Maximize Your Reach and Relevance with SEO-Friendly Design',
      content: 'Enhance your digital visibility with our SEO-friendly approach. We understand the importance of search engine optimization and ensure your online presence ranks high, attracting more visitors and potential customers.',
      image: seoimage,
    },
    {
      title: 'Crafting Remarkable Product Designs',
      content: 'We are passionate about creating product designs that captivate, inspire, and excel. Our design team brings your ideas to life, ensuring your products not only look exceptional but also function flawlessly. Elevate your products with our design expertise.',
      image: design,
    },
  ];
  

  return (
    <div>
    <div className="Header" style={headerStyle}>

      <a href="#home" className="logo"><FontAwesomeIcon icon={faCode} />SZ DEVS.</a>

      <div><FontAwesomeIcon className={`menu ${isTimes ? 'faTimes' : ''}`} icon={isTimes ? faTimes : faBars}
      onClick={handleToggle}
      /></div>

      <div className={`Navbar ${isNavToggled ? 'nav-toggle' : ''}`}>
        <ul>
          <li><Link to="home" smooth={true}>home</Link></li>
          <li><Link to="about" smooth={true}>about</Link></li>
          <li><Link to="service" smooth={true}>service</Link></li>
          <li><Link to="team" smooth={true}>team</Link></li>
          <li><Link to="contact" smooth={true}>contact</Link></li>
          <li><Link to="faq" smooth={true}>FAQ</Link></li>
        </ul>
      </div>
       
        
    </div>
    <Element name="home" className="home">
      <h1 className='banner'>Web Design & Development service</h1>
      <h3 className='slogan'>you have a vision. we have a team to build it</h3>
      <Link to="about" smooth={true}><button>get started</button></Link>


      <div className="wave wave1"></div>
      
      <div className="fas fa-Cog fa-spin nut1"><FontAwesomeIcon icon={faCog} /></div>
      <div className='fas fa-Cog fa-spin-pulse nut2'><FontAwesomeIcon icon={faCog} /></div>

        </Element>

        {/* Home section ends */}

        {/* About section start */}

        <Element  name="about" className="about">
        <h1 className="heading"> about us</h1>

        <div className="row">
      <div className="content">
        <h3> We build websites & apps that build your business</h3>
        <p>
          {expanded
            ? 'Discover the potential of your business with our innovative web and mobile solutions. We specialize in creating digital platforms that are finely tuned to your unique needs, driving growth and success for your brand.'
            : 'Discover the potential of your business with our innovative web and mobile solutions.'}
        </p>
        <button className="btn" onClick={toggleExpand}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div className="image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
        </Element>

        {/* About section ends */}

        {/* Service section start */}

        <Element  name="service" className="service">

          <h1 className="heading">Our Service</h1>

          {sections.map((section, index) => (
  <div className={`row ${index % 2 === 0 ? "even" : ""}`} key={index}>
    {index % 2 === 0 ? (
      <div className="image">
        <img src={section.image} alt={section.title} />
      </div>
    ) : null}
    <div className="content">
      <h3>{section.title}</h3>
      <p>
        {expandedSections[index] ? section.content : section.content.slice(0, 100)}
      </p>
      <button className="btn" onClick={() => toggleSection(index)}>
        {expandedSections[index] ? "Read Less" : "Read More"}
      </button>
    </div>
    {index % 2 === 0 ? null : (
      <div className="image">
        <img src={section.image} alt={section.title} />
      </div>
    )}
  </div>
))}


        </Element>


        {/* Service section ends */}

  {/*Team section start */}

        <Element id="team" name="team" className="team">

          <h1 className="heading">our team</h1>

          <div className="row">

            <div className="card">
              <div className="image">
                <img src={isaac} alt=""/>
              </div>
              <div className="info">
                <h3>Isaac Dominic</h3>
                <span>web developer</span>
                <div className="icons">
                  <a href="#" className='fa-brands'><FaFacebook /></a>
                  <a href="#" className='fa-brands'><FaInstagram /></a>
                  <a href="#" className='fa-brands'><FaTwitter /></a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={woman} alt=""/>
              </div>
              <div className="info">
                <h3>Soludo</h3>
                <span>Fullstack developer</span>
                <div className="icons">
                  <a href="#" className='fa-brands'><FaFacebook /></a>
                  <a href="#" className='fa-brands'><FaInstagram /></a>
                  <a href="#" className='fa-brands'><FaTwitter /></a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={amaka} alt=""/>
              </div>
              <div className="info">
                <h3>Amaka</h3>
                <span>Product Designer</span>
                <div className="icons">
                  <a href="#" className='fa-brands'><FaFacebook /></a>
                  <a href="#" className='fa-brands'><FaInstagram /></a>
                  <a href="#" className='fa-brands'><FaTwitter /></a>
                </div>
              </div>
            </div>

          </div>

        </Element>

        {/*Team section ends */}

         {/*Contact section start */}

         <Element  name="contact" className="contact">

         <h1 className="heading">contact us</h1>

         <div className="row">

          <div className="image">
            <img src={contactus} alt="" />
          </div>

          <div className="form-container">
            <form action="https://formsubmit.co/niksavage5@gmail.com" method="POST">

              <div className="inputBox">
                <input type='text' name="f-name" id="f-name" placeholder='First name' />
                <input type='text' name="l-name" id="l-name" placeholder='Last name' />
              </div>

              <input type='email' name="email" id="email" placeholder='Email'/>
              <textarea name='' cols='30'rows='10' placeholder='Write your message' style={{ resize: `none` }}></textarea>
              <input type='submit' value='send' />


            </form>
          </div>

         </div>


         </Element>

         {/*Contact section ends */}

         {/*FAQ section start */}

         <Element name='faq' className='faq'>

         <div className="heading">FAQ</div>

         <div className="row">

          <div className="image">
            <img src={faqimage} alt="" />
          </div>

          <div className="accordion-container">

          <div className="accordion">
      {accordions.map((accordion, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => handleAccordionClick(index)}
          >
            <span>{openAccordion === index ? '-' : '+'}</span> <h3>{accordion.title}</h3>
          </div>
          <div
            className={`accordion-body ${openAccordion === index ? 'open' : ''}`}
          >
            {openAccordion === index && accordion.content}
          </div>
        </div>
      ))}
    </div>
          </div>
         </div>

         </Element>

         {/*FAQ section ends */}

         {/*Footer section start */}

         <Element name='footer' className="footer">

          <h1>Copyright © 2023 Spazzik Devs| All rights reserved</h1>

          <div className="icons">
                  <a href="#" className='fa-brands'><FaFacebook /></a>
                  <a href="#" className='fa-brands'><FaInstagram /></a>
                  <a href="#" className='fa-brands'><FaTwitter /></a>
                  <a href="#" className='fa-brands'><FaGithub /></a>
                  <a href="#" className='fa-brands'><FaLinkedin /></a>
                </div>
          
         </Element>

         {/*Footer section ends */}
    </div>


);
}

export default App;
