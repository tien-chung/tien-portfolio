import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import { ACHIEVEMET_DES } from '../utils/constants';
import whiteBelt from '../assets/img/whiteBelt/white-belt.png';
import yellowBelt from '../assets/img/yellowBelt/yellow-belt.png';
import greenBelt from '../assets/img/greenBelt/green-belt.png';
import { ArrowRightCircle } from "react-bootstrap-icons";

const Achievements = () => {
    
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
    };
      
    return (
      <section className="achievement" id="Achievements">
        <Container>
          <Row>
            <Col>
              <div className="achievement-bx">
                <h2>
                  Learning Achievements
                </h2>
                <p>{ACHIEVEMET_DES}</p>
                <Carousel responsive={responsive} infinite={true} className="achievement-slider">
                  <div className="item">
                    <img src={whiteBelt} alt="white-belt"/>
                    <h5>White Belt</h5>
                  </div>
                  <div className="item">
                    <img src={yellowBelt} alt="yellow-belt"/>
                    <h5>Yellow Belt</h5>
                  </div>
                  <div className="item">
                    <img src={greenBelt} alt="green-belt"/>
                    <h5>Green Belt</h5>
                  </div>
                </Carousel>;
                <button onClick={() => console.log("let's connect!")}>{'Click here to see more'}<ArrowRightCircle size={25}/></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Achievements;