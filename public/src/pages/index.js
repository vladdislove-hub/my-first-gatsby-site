import * as React from 'react'
import Layout from './layout'
import StackGrid from "react-stack-grid";
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  sitetitle,
  navlinks_text,
  title,
  ttitle,
  titlee,
  undertitle,
  buttonshop,
  buttonshopp,
  infoblock,
  chisla,
  opisaniya,
  opisaniyaa,
  undertitleprod,
  titlle,
  opisaniyya,
  formemail,
  buttonshhop,
  seemore,
  footer,
  footerdescription,
  titlefooter,
  FooterLinks,
  FooterContacts,
  iconsfooter,
  formemail2,
  FooterLinkss,
  sitetitlefooter
 } from './layout.module.css'
 
 
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Container,
    Navbar,
     NavDropdown,
     Nav,
     Brand,
      Row,
      Col,
      Button,
      Carousel,
      Form
    
 } from 'react-bootstrap';
 

const IndexPage = () => {
  return (
    <main>
       <title>London Merchant</title>
 
    <Container>
  <Row>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >
    <StaticImage className={sitetitle}
        alt="Logo"
        src="../images/logo.png"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
    <Nav className="justify-content-end me-5"  className={navlinks_text }  activeKey="/home">
    <Nav.Item className="me-4">
      <Nav.Link >Doors</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-1">Kitchens</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-2">Bedrooms</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-2">Living Room</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link eventKey="link-2">Bathrooms</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-2">Other Products</Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Row>


 <Row>
    <Col xs={12} md={6} className=" mt-lg-5 ">
  
      <h1 className={title} >
We made <br></br> 
for comfort</h1>
      <p className={undertitle}>It is these four words that fully articulate the<br></br> 
         brand's concept.</p>
         <button className={buttonshop}>SHOP NOW</button>
    </Col>
    <Col xs={12} md={6}><StaticImage 
        alt="chair"
        src="../images/bg.png"
      /></Col>
  </Row>
  </Container>
  <div className={infoblock}>
  <Container>
  <Row className='mt-4' >
    <Col   md={1}  xs={5} className="offset-md-1">
     <h1   className={chisla}>451</h1>  
    </Col>
    <Col  md={2} xs={5}>
   <p className={opisaniyaa}>Approved <br></br> projects</p>     
    </Col>

    <Col   md={1}  xs={5}>
     <h1   className={chisla}>16</h1>  
    </Col>
    <Col  md={1}  xs={5}>
   <p className={opisaniyaa}>Highly skilled<br></br> workgroup</p>     
    </Col>

    <Col   md={1}   xs={5}>
     <h1   className={chisla}>1</h1>  
    </Col>
    <Col  md={2}  xs={5}>
   <p className={opisaniyaa}>Central<br></br> London workshop</p>     
    </Col>

    <Col   md={1}   xs={5}>
     <h1   className={chisla}>60</h1>  
    </Col>
    <Col  md={1}  xs={5}>
   <p className={opisaniyaa}>Years of<br></br> experience</p>     
    </Col>

  </Row>
  </Container></div>
  <Container>
<Row>
<Col xs={12}>
<h1 className={title}>who we are</h1>
</Col>
<Col xs={12} md={4} className='mt-5'>
<p className={undertitleprod}>Production & manufacture</p>  
<p className={opisaniya}>The five-step quality control system «5Q» <br></br> practically excludes the release of a finished <br></br> product with a deficiency</p>
<button className={buttonshop}>READ MORE</button>
</Col>

<Col xs={12} md={6} className='mt-4 offset-lg-2'>

<Carousel indicators={false}>
  <Carousel.Item interval={1000}>
  <StaticImage 
        alt="chair"
        src="../images/slide1.png"
      />
       
  
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <StaticImage 
        alt="chair"
        src="../images/slide2.png"
      />
    
  </Carousel.Item>
  <Carousel.Item>
  <StaticImage 
        alt="chair"
        src="../images/slide3.png"
      />
    
  </Carousel.Item>
</Carousel>
</Col>
</Row>


<Row>
  <Col xs={12}>
    <h1 className={titlee} align="center">popular Categories</h1>
  </Col> 
  <Col xs={12} className="mt-5 ">

<StackGrid columnWidth={350} gutterHeight={30} gutterWidth={10}>
<Col>
  <div key="key1">
    <StaticImage alt="chair" src="../images/door.png" />
  </div>
</Col>
<Col>
  <div key="key2">
    <StaticImage alt="chair" src="../images/livingroom.png"/>
  </div> 
</Col>
<Col xs={10} xs={{ order: 1 }}>
  <div key="key3">
      <br></br>  
      <h5 className={titlle}>Large selection of categories</h5>
      <p className={opisaniyya}>MATOA Way Kambas — Sumatran Rhino comes with a material form
         of Makassar Ebony (Diospyros celebica). This wood is chosen
          to represent the Sumatran Rhino’s skin which is designed with
           an overlap effect on its strap to represent Rhino’s skin.</p>
  </div>
</Col>
<Col>
  <div key="key4">
    <StaticImage alt="chair" src="../images/Bathrooms.png"/>
  </div>
  </Col>
  <Col>
  <div key="key5">
    <StaticImage alt="chair" src="../images/Bedrooms.png"/>
  </div>
  </Col>
  <Col>
  <div key="key6">
    <StaticImage alt="chair" src="../images/Other.png"/>
  </div>
    </Col>
</StackGrid>
 
  </Col>
</Row>





<Row>
  <Col xs={12}>
    <br></br>
    <h1 className={titlee} align="center">NEWSLETTER</h1>
  </Col> 
  <Col xs={12}>
    <br></br>
   <p align="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>   <br></br>
  </Col> 
    <Col className='offset-lg-3'  xs={11} md={5}>
   
      <Form.Control className={formemail} placeholder="Enter your e-mail..." />
    </Col>
    <Col  xs={12} md={3} className='mt-1'>
    <button className={buttonshhop}>SUBSCRIBE</button>
    </Col>
</Row>


<Row>
  <Col xs={12} className='mt-5'>
    <br></br><br></br><br></br><br></br>
   <p align="center" className='footerdescription'>Share your setup with</p>   <br></br>
  </Col> 
  <Col xs={12}>
    <h1 className={ttitle} align="center">#London city Merchant</h1>
    <br></br><br></br>
  </Col> 
  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 96.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 97.png"/>
  </Col>
  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 98.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 99.png"/>
  </Col>


  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 100.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 101.png"/>
  </Col>
  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 102.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 103.png"/>
  </Col>


  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 104.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 105.png"/>
  </Col>
  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 106.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 107.png"/>
  </Col>


  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 108.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 109.png"/>
  </Col>
  <Col xs={6} md={3} className='pb-3'>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 110.png"/>
  </Col>
  <Col xs={6} md={3}>
    <StaticImage alt="chair" src="../images/gallery/Rectangle 111.png"/>
  </Col>
</Row>

<Col xs={12}>
<p align="center" className='mt-5'><button className={seemore} >SEE MORE</button></p> 
  </Col> 
</Container>

<div className={footer}>
<Container>
<Row>
    <Col xs={12} lg={3} className='mt-5'>
    <StaticImage className={sitetitlefooter }
        alt="Logo"
        src="../images/logo2.png"
      />
      <p className={footerdescription}>Worldwide furniture store since 2021. We sell over 1000+ branded products on our website</p>
 <a href="" className={FooterLinkss} >Accreditations</a><br></br>
 <a href="" className={FooterLinkss}>Privacy & Cookies</a><br></br>
 <a href="" className={FooterLinkss}> Terms and Condition</a>
    </Col>
  

  <Col xs={6} lg={2} className='mt-5 align-xs-center'>
  <h5 className={titlefooter}>Menu</h5>
  <Nav.Item className="me-4">
      <Nav.Link className={FooterLinks} >Who we are?</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks}  eventKey="link-1">About Us</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks}  eventKey="link-2">Our projects</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks}  eventKey="link-2">Services</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks} eventKey="link-2">Our stores</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-1">
      <Nav.Link className={FooterLinks}  eventKey="link-2">Contact us</Nav.Link>
    </Nav.Item>
    </Col>


    <Col xs={6} lg={2} className='mt-5 '>
    <h5 className={titlefooter}>Products</h5>
  <Nav.Item className="me-4">
      <Nav.Link className={FooterLinks}>Doors</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks} eventKey="link-1">Kitchens</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks}  eventKey="link-2">Bedrooms</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks} eventKey="link-2">Living Room</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link className={FooterLinks} eventKey="link-2">Bathrooms</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-1">
      <Nav.Link className={FooterLinks}  eventKey="link-2">Other Products</Nav.Link>
    </Nav.Item>
    </Col>


    <Col xs={12} lg={2} className='mt-5'>
    <h5 className={titlefooter}>Contacts</h5>
    <p className={FooterContacts}>Vilnius, Lithuania</p>
    <p className={FooterContacts}>+370 777 33344</p>
    <p className={FooterContacts}>www.namecompany.com</p>
    </Col> 

    <Col xs={11} lg={3} className='mt-5'>
    <h5 className={titlefooter}>Stay Updated</h5>
    <Form.Control className={formemail2} placeholder="Enter your e-mail..." />
    <p>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" className={iconsfooter}>
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
    </a>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" className={iconsfooter}>
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
    </a>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" className={iconsfooter}>
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
    </a>
    </p>
    
    </Col> 
</Row>
</Container>
</div>


</main>
  )
    
}

export default IndexPage