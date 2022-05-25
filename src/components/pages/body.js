import React from 'react'
import {Card,Button,Container,ProgressBar,Image } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import '../css/styles.css';
import Boy from'../images/boy.webp'
import Sample from '../images/sample1.png'
import Header from './Header';
import { FiHome,FiCode } from "react-icons/fi";
import About from './About';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}

function body() {
  return (
    <div>
      <Header/>
      <div class="section-1">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="col1">
              <div class="col">
                <div className="hero-content-inner">
                  <h1>
                    <div className="hero-content-line">
                      <div className="hero-content-line-inner">Hi, I am Segni Teshome</div>
                    </div>
                    <div className="hero-content-line">
                      <div className="hero-content-line-inner">Designer & Developer</div>
                    </div>
                  </h1>
                  <p>
                    I am a fullstack web developer and front end webapp designer
                    with good communication skills and good grip of version control
                  </p>
                  <Button className='btn-1' variant="dark" href={'About'}>More About Me</Button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
          <FadeInSection>
          <div class="col2">
              <Card>
                <Card.Body>
                  <Card.Img src={Boy} />
                </Card.Body>
              </Card>
            </div>
          </FadeInSection>
            
          </div>
        </div>
      </div>
      <FadeInSection>
        <Container>
        <div class="section-2">
        <div class="row no-gutters">
          <div class="col">
            <div class="col1">
              <Card className="text-center11">
                <Card.Body>
                  <Card.Text>
                  <ProgressBar now={60} label={'60'} />PYTHON<br/>
                  <ProgressBar now={70} label={'70'} />JAVASCRIPT<br/>
                  <ProgressBar now={80} label={'80'} />JAVA<br/> 
                  <ProgressBar now={90} label={'90'} />HTML & CSS<br/>
                  <ProgressBar now={90} label={'70'} />REACT<br/>
                  </Card.Text>
                  <Card.Text>
                  <strong>Age:</strong> 24 <br/>
                  <strong>Occupation:</strong> software engineer <br/>
                  <strong>Location:</strong> Addis ababa<br/>
                  <strong>Tier:</strong> Mid Tier<br/>
                  <strong>Education:</strong> Bachelors degree in computer science and enginering<br/>
                  </Card.Text>
                  <Card.Text>
                    Out of the box thinker with ability and interest in practical working environment and experience in
                    Python. React, React-Django, Flutter,
                    And vanilla JavaScript. <br/>
                    With working experience in computer science projects and project management skills. 
                    Also good experience and agility in designing a minimalistic and attractive UI for web and mobile.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col">
            <div class="col2">
            <Card className="text-center12">
                <Card.Body>
                <Card.Text>
                    Python <br/>
                    Out of the box thinker with ability and interest in practical working environmen<br/>
                    JavaScript <br/>
                    Out of the box thinker with ability and interest in practical working environmen<br/>
                    Java <br/>
                    Out of the box thinker with ability and interest in practical working environmen<br/>
                    HTML & CSS <br/>
                    Out of the box thinker with ability and interest in practical working environmen<br/>
                    React <br/>
                    Out of the box thinker with ability and interest in practical working environmen<br/>
                 </Card.Text>
                  <Card.Text>
                  VSC and version control <br/>
                    Out of the box thinker with ability and interest in practical working environmen<br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
        </Container>
      </FadeInSection>   
    </div>



  )
}

export default body







