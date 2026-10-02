import "./About.css";

import { IoIosReturnRight } from "react-icons/io";
import ratting from "../assets/ratting.png";
import ajay from "../assets/Ajay.png";
import raj from "../assets/Raj.jpeg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiPerpendicularRings } from "react-icons/gi";
import { FaAdjust } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";



function About() {
  return (
    <main>
<div className="about-page">
<div className="spot">
  <h3>  Spotlight on Engineering</h3>
 
</div>
 <h1 id="About">About</h1>
  <h2 id="header">Webflora Technologies</h2>
  <p id="para">Leading Software Development Company in Patna Bihar</p>

  <div className="button-section">
    <button>EXPLORE VISION → </button>

    <div className="about-icon">
 <IoIosReturnRight />
    </div>

    <div className="about-text">
      <span> Scalable </span>
      
    </div>

    <div className="about-icon">
 <IoIosReturnRight />
    </div>

    <div className="about-text">
      <span> Efficient </span>
      
    </div>

     <div className="about-icon">
 <IoIosReturnRight />
    </div>

    <div className="about-text">
      <span> Secure </span>
      
    </div>
    
   

    
  </div>
</div>
{/*Ratting container */}
<div className="ratting">
  <div className="ratting-card">
     <img src={ratting} alt="Ratting" />
  </div>

  <div className="ratting-card">
     <h2>Highest Rated Tech Agency in Patna</h2>
      <p>Join 150+ businesses who trust Webflora for scalable software and high- performance websites.</p>
  </div>

  <div className="ratting-card">
    <button id="btn"> 5.0
Perfect Score
</button>
   
  </div>
</div>
<div className="second-container">
  <div className="second-card">
    <span>-- Quantifiable Impact</span>
    <h2>SUCCESS<br/> VALIDATED.</h2>
  </div>

  <div className="second-card">
    <p>Empowering global brands with high-<br />performance digital infrastructure.</p>
  </div>
  
</div>
<div className="counter-container">
  <div className="counter-card">
    <h2 className="stat-number">200+</h2>
      <p className="stat-label">PROJECTS DELIVERED</p>
      <p className="stat-description">Successfully engineered systems.</p>
  </div>

  <div className="counter-card">
    <h2 className="stat-number">15+</h2>
      <p className="stat-label">Clients Served</p>
      <p className="stat-description">Across startups and enterprises.</p>
  </div>

  <div className="counter-card">
    <h2 className="stat-number">5+</h2>
      <p className="stat-label">Years Experience</p>
      <p className="stat-description">Mastering the digital landscape.</p>
  </div>

  <div className="counter-card">
    <h2 className="stat-number">99%</h2>
      <p className="stat-label">Client Satisfaction</p>
      <p className="stat-description">Driven by transparent processes.</p>
  </div>
</div>

<div className="webflora">
  <div className="webflora-card">
    <h1>About <span>Webflora</span> <br />Technologies</h1>
    <p>Webflora Technologies is a Patna-based digital solutions company offering web development, mobile app development, custom software, digital marketing, and AI automation services for startups and businesses across India.</p>
    <p>We help businesses improve online visibility, automate operations, and build scalable, performance-driven digital systems using modern technology and data-driven strategies. Our approach combines structured planning, clean execution, and practical solutions to solve real business challenges such as low leads, inefficient workflows, and lack of digital growth.</p>

    <p>Our goal is to make businesses faster, smarter, and more efficient through technology, with every solution designed for scalability, performance, and long-term growth.</p>

    <p>Our goal is to make businesses faster, smarter, and more efficient through technology, with every solution designed for scalability, performance, and long-term growth.</p>

    <p>Beyond custom software engineering, Webflora Technologies is deeply committed to empowering local youths and aspiring tech startups in Bihar. By providing high-quality, practical technical education, hands-on software development internships, and mentoring local student communities, we are actively fostering the next generation of software engineers and entrepreneurs within Patna's growing technological ecosystem.</p>
  </div>

  <div className="webflora-card-right">

<div className="webflora-right">
  <div className="about-webflora-icon">
<FaArrowTrendUp  />
</div>
<h4>Growth Engine</h4>
<span>Measurable business returns</span>
</div>

<div className="webflora-right">
  <div className="about-webflora-icon">
<GiPerpendicularRings />
</div>
<h4>Architecture</h4>
<span>Scalable ecosystems</span>
</div>

<div className="webflora-right">
  <div className="about-webflora-icon">
<FaAdjust   />
</div>
<h4>Automation</h4>
<span>Operational efficiency</span>
</div>


<div className="webflora-right">
  <div className="about-webflora-icon">
<FaPeopleGroup   />
</div>
<h4>Partnership</h4>
<span>Long-term reliability</span>
</div>





  </div>

  


</div>
<div className="self">

  <div className="self-card">

    <div className="img">
 <img src={ajay} alt="Ajay" />
 <h6>Ajay KUmar</h6>
 <span>Director</span>
    </div>

<div className="raj">
 <img src={raj} alt="Raj" />
 <h6>Rajkamal Sharma</h6>
 <span>CEO</span>
 </div>
  
  </div>

  <div className="self-card-right">
    <p>Webflora Technologies was founded to address a real gap in how businesses use technology. The founders recognized that many companies were losing growth opportunities because of outdated tools and manual workflows. Although technology was available, its strategic implementation was often missing.</p>


    <p>Rather than moving to tier-1 metro hubs, the founders made a conscious decision to establish our primary engineering headquarters in Patna. Our goal is to lead high-value IT job creation in Bihar, proving that world-class software development and digital products can be designed and executed locally. By nurturing regional technical talent and offering high-end software development career opportunities, Webflora Technologies is building a robust foundation for software startups in Patna and actively strengthening the technology ecosystem of Patna.</p>


    <p>The journey began with freelance execution focused on high-quality delivery and building client trust. Over time, this evolved into a structured agency model. Today, every project follows a founder-led strategy with direct involvement, clear communication, and strict quality standards. This approach has positioned Webflora as a reliable, long-term software development company and digital partner that grows alongside its clients.</p>

  </div>
</div>

</main>

  );
}

export default About;