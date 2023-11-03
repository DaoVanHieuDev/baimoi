import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import anh1 from "./anh1.jpg";
import "./homePage.css";
import ModalGlass from "../../commons/ModalGlass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  const id = JSON.parse(localStorage.getItem("idUser") as any);

  const [openModal, setOpenModal] = useState(false);

  const handleShowModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <div>
        {openModal && <ModalGlass handleCloseModal={handleCloseModal} />}{" "}
        <div>
          <Carousel interval={1000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://bizweb.dktcdn.net/100/445/497/themes/900710/assets/slide-img1.png?1698909254512"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://bizweb.dktcdn.net/100/445/497/themes/900710/assets/slide-img2.png?1698909254512"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://bizweb.dktcdn.net/100/445/497/themes/900710/assets/slide-img3.png?1698909254512"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://vn.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dwf5a66460/home-hero-carousel/2023/JBL-VN-MostTrusted-PC.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://vn.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dw4f64e80d/home-hero-carousel/2023/JBL-Tour-One-M2_Teaser-Banner-FA.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="image-container">
          <div className="home-anh1">
            <img
              width={"667px"}
              style={{ borderRadius: "15px" }}
              src="https://bizweb.dktcdn.net/100/445/497/themes/900710/assets/img_botbanner_1.jpg?1696912769507"
              alt=""
            />
            <p className="todo"> CHUYÊN TRANG JBL QUANTINUM</p>
          </div>
          <div className="home-anh1">
            <img
              style={{ borderRadius: "15px" }}
              width={"667px"}
              src="https://bizweb.dktcdn.net/100/445/497/themes/900710/assets/img_botbanner_2.jpg?1696912769507"
              alt=""
            />
            <p className="tada"> PARTYBOX SERIES</p>
          </div>
        </div>
        <div className="list-all">
          <div className="list-product">
            <div className="list-trend">
              <span className="list-hot">HOT TREND</span> <br />
              <span className="list-new"> SẢN PHẨM NỔI BẬT</span>
            </div>
            <div className="list-card">
              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwcb4f6fe2/1.JBL_TUNE_230NC_Product%20image_Hero_Blue.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    JBL TUNE 230NC TWC
                  </Card.Title>
                  <Card.Text>2,720,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw111d8fa9/JBL_GO_3_HERO_GREEN_0384_1605x1605px.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL GO 3
                  </Card.Title>
                  <Card.Text>1,120,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4fc2534e/JBL_CLIP4_HERO_STANDARD_TRIPLE_BLACK_0737_x1.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL CLIP 3
                  </Card.Title>
                  <Card.Text>920,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw33f01384/2_JBL_BOOMBOX_3_SQUAD_FRONT_33269_x2.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL BOMBOX 3
                  </Card.Title>
                  <Card.Text>3,720,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5d123980/JBL_LIVE_FREE_NC+%20TWS_Product%20image_Hero_White.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL LIVE FREE
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwe294b7c3/JBL_LIVE220BT_Product%20Image_Hero_Black.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL QUANTUM 50
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2199fb6c/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=537&sfrm=png"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL PARTYBOX ECORE
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "17rem",
                  borderRadius: "6%",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src="https://bizweb.dktcdn.net/100/445/497/products/be982594-2732-4e83-86d1-f4e11fac866a.jpg?v=1683790395210"
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    JBL LIVE PRO+
                  </Card.Title>
                  <Card.Text>342,000₫</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container-pit"></div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
