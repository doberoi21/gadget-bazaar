import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'
import ban1 from "./ban1.png";
import ban2 from "./ban2.png";
import ban3 from "./ban3.png";
import pos1 from "./Poster1.jpg";
import pos2 from "./Poster2.jpg";
import pos3 from "./Poster3.jpg";


const Home = () => {
  return (
    <section>
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ban1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ban2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ban3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"2% 1%"}}>
          <div>
              <img src={pos1} style={{height:"250px",width:"350px"}} />
          </div>
          <div>
              <img src={pos2} style={{height:"250px",width:"350px"}} />
          </div>
          <div>
              <img src={pos3} style={{height:"250px",width:"350px"}} />
          </div>
      </div>
    </section>
  );
};

export default Home;

//   <MDBContainer className="h-25">
//         <MDBCarousel
//           activeItem={1}
//           length={3}
//           showControls={true}
//           showIndicators={false}
//           className="z-depth-1"
//           slide
//         >
//           <MDBCarouselInner>
//             <MDBCarouselItem itemId="1">
//               <MDBView>
//                 <img
//                   className="d-block w-100 h-25"
//                   src={trail}
//                   alt="First slide"
//                 />
//               </MDBView>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="2">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src={trail}
//                   alt="Second slide"
//                 />
//               </MDBView>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="3">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src={trail}
//                   alt="Third slide"
//                 />
//               </MDBView>
//             </MDBCarouselItem>
//           </MDBCarouselInner>
//         </MDBCarousel>
//       </MDBContainer>
