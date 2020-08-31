import React from "react";
import { Link, graphql } from "gatsby";

//Font Awesome
import { AiFillHome, AiOutlineCoffee } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { FaQuestionCircle, FaBook, FaTools, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import contactInfo from "../../site/settings/contact_info";

//Images
import arch from '../../static/images/arch.png';
import coffee from '../../static/images/coffee.png';
import inPerson from '../../static/images/inPerson.png';
import integral from '../../static/images/integral.png';
import laptop from '../../static/images/laptop.jpg';
import programming from '../../static/images/programming.png';
import sine from '../../static/images/sine.svg';
import triangle from '../../static/images/triangle.png';
import unitCircle from '../../static/images/unitCircle.svg';

import './App.css';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const topNav = {
    color: 'black',
    padding: '5px',
    position: 'fixed',
    zIndex: '1',
  }

  const headerCover = {
    fontSize: '25px',
    margin: '50px 0',
    textAlign: 'center',
    width: '100%',
    zIndex: '1',
  }

  const header = {
    color: 'white',
    padding: '5px',
    verticalAlign: 'top',
  }

  const coffeeCover = {
    background: '#f9f8f6',
    background: 'orange',
    height: '100vh',
    //overflow: 'hidden',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient( 109.6deg,  rgba(121,203,202,1) 11.2%, rgba(119,161,211,1) 91.1% )',
    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )',
  }

  const coffeeStyle = {
    minWidth: '50%',
    minHeight: '50%',
    maxWidth: '100%',
    maxHeight: '100%',
    transition: '1s linear',
  }

  const services = {
    // height: '100vh',
  }

  const pricing = {

  }

  var menuState = 'show';

  const showMenu = () => {
    if (menuState === 'hide') {
      document.getElementById('sideNavMenu').style.display = 'none';
      document.getElementById('topNavHamburger').innerHTML = '☰';
      menuState = 'show';
    }
    else {
      document.getElementById('sideNavMenu').style.display = 'block';
      document.getElementById('topNavHamburger').innerHTML = '✕';
      menuState = 'hide';
    }
  }

  return (
    <div>
      <div id='topNav' style={topNav}>
        <button id='topNavHamburger' onClick={showMenu}>☰</button>
        <div id='topNavMenu'>
          <Link to={'/'}><AiFillHome /> Home</Link>
          <Link to={'/#services'}><FaTools /> Services</Link>
          <Link to={'/#pricing'}><IoIosPricetags /> Pricing</Link>
          <Link to={'/#about'}><FaQuestionCircle /> About</Link>
          <Link to={'/#contact'}><MdEmail /> Contact</Link>
          <Link to={'/lessons/'}><FaBook /> Lessons</Link>
        </div>
        <div id='sideNavMenu'>
          <Link to={'/'}><AiFillHome /> Home</Link>
          <a id='' href='#services'><FaTools /> Services</a>
          <a href='#pricing' ><IoIosPricetags /> Pricing</a>
          <a href='#about'><FaQuestionCircle /> About</a>
          <a href='#contact'><MdEmail /> Contact</a>
          <Link to={'/lessons/'}><FaBook /> Lessons</Link>
        </div>
      </div>


      <div style={coffeeCover}>
        <div>
          <div style={headerCover}>
            <div style={header}><AiOutlineCoffee /> Coffee with Math Tutor</div>
          </div>
          <img src={coffee} alt={'coffee'} style={coffeeStyle} />
        </div>
      </div>

      <div id='services' style={services}>

        <div>
          <h3 ><FaTools /> Services Offered</h3>

          <div>
            <div className='card'>
              <div className='concept'>Algebra</div>
              <div className='content'>
                <img className='conceptImage' src={arch} />
              </div>
            </div>
            <div className='card'>
              <div className='concept'>Calculus</div>
              <div className='content'>
                <img className='conceptImage' src={integral} />
              </div>
            </div>
            <div className='card'>
              <div className='concept'>Pre-Calculus</div>
              <div className='content'>
                <img className='conceptImage' src={sine} />
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='concept'>Trigonometry</div>
            <div className='content'>
              <img className='conceptImage' src={unitCircle} />
            </div>
          </div>
          <div className='card'>
            <div className='concept'>Geometry</div>
            <div className='content'>
              <img className='conceptImage' src={triangle} />
            </div>
          </div>
          <div className='card'>
            <div className='concept'>SAT/ACT Math</div>
            <div className='content'>
              <img className='conceptImage' src='https://blog.cambridgecoaching.com/hs-fs/hub/174241/file-248411197-jpg/images/sat-vs-act-resized-600.jpg?width=558&height=434&name=sat-vs-act-resized-600.jpg' />
            </div>
          </div>

        </div>
      </div>


      <div id='pricing' style={pricing}>
        <div>
          <h3><IoIosPricetags /> Pricing</h3>
          <div className='card'>
            <div className='priceTitle'>Services Offered</div>
            <div className='contentPricing' style={{ textAlign: 'left' }}>
              <div>✓ Tutoring</div>
              <div>✓ Homework Help</div>
              <div>✓ Prepared Notes</div>
              <div>✓ Lessons</div>
              <div>✓ Exam Prep</div>
              <div>✓ Placement Exams</div>
            </div>
          </div>
          <div className='card'>
            <div className='priceTitle'>Online: $20/hr</div>
            <div className='contentPricing'>
              <img className='conceptImage' src={laptop} />
            </div>
          </div>
          <div className='card'>
            <div className='priceTitle'>In-Person: $30/hr</div>
            <div className='contentPricing'>
              <img className='conceptImage' src='https://cdn.bocatutor.me/icons/Math-Problem.svg' />
            </div>
          </div>
        </div>
      </div>


      <div id='about' style={pricing}>
        <div>
          <h3><HiOutlineLightBulb /> About</h3>
          <div className='card'>
            <div className='contentAbout' style={{ textAlign: 'left' }}>
              <div>
                <div>
                  <img className='conceptImage' src='https://dulayasaennok.com/dulaya.jpg' />
                  <div className='aboutTitle'>Dulaya Saennok</div>
                </div>
                <p>
                  Dulaya has over five years of experience tutoring math to middle school, high school, and college students.
                  During college he taught three semesters of math.
                Dulaya received his Bachelor's degree in Mechanical Engineering from <span style={{ color: '#ca1326', }}>UNLV</span> in 2015.
                He scored 96th percentile on the ACT Math and received straight A's in math classes from Calculus up to Differential Equations.
                He has professional experience conducting patent research for a US government contractor,
                and he is currently pursuing a career in software development.
                Dulaya is passionate about helping people solve problems and STEM education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id='contact' style={pricing}>
        <div>
          <h3>Contact</h3>
          <div><MdEmail /> email@gmail.com</div>
          <div><FaPhoneAlt /> 702.209.7823</div>
        </div>
      </div>


    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`
