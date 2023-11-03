import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./shop.css";
import axios from "axios";
import { formatMoney } from "../../helps/formatMoney";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // Option
  const material = [
    { text: "Âm thanh gia đình", value: 1 },
    { text: "Loa xách tay", value: 2 },
    { text: "Tai nghe", value: 3 },
    { text: "Khác ", value: 4 },
    { text: "Đang cập nhật ", value: 5 },
  ];
  const style = [
    { text: "Kim loại", value: 1 },
    { text: "Gỗ", value: 2 },
    { text: "Nhựa", value: 3 },
  ];

  const [materialOption, setMaterialOption] = useState("");
  const [styleOption, setStyleOption] = useState("");
  //Glass
  interface Glass {
    glassId: number;
    glassName: string;
    glassPrice: number;
    glassSale: number;
    img1: string;
  }
  const [glasses, setGlasses] = useState<Glass[]>([]);
  const loadGlass = () => {
    if (materialOption == "" && styleOption == "") {
      axios
        .get(`http://localhost:8080/api/v1/shop/glasses`)
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else if (styleOption == "" && materialOption != "") {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyMaterial=${materialOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else if (styleOption != "" && materialOption == "") {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyStyle=${styleOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/shop/glasses?keyStyle=${styleOption}&keyMaterial=${materialOption}`
        )
        .then((res) => setGlasses(res.data.data))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    loadGlass();
  }, [styleOption, materialOption]);

  // Detail
  const handleDetail = (id: number) => (
    navigate(`/detail/${id}`),
    window.scroll({
      top: 0,
    })
  );

  return (
    <>
      <Header />
      <div>
        <div className="shop-product">
          <h1>Sản phẩm</h1>
        </div>
        <div className="shop-text">
          <h2>JBL</h2>
          <p>
            JBL là nhà sản xuất thiết bị âm thanh của Mỹ [1] có trụ sở tại Los
            Angeles, California , Hoa Kỳ. JBL phục vụ khách hàng gia đình và thị
            trường chuyên nghiệp.
          </p>
        </div>
        <div className="row">
          <div className="col-2">
            <h3>Loại</h3>
            <ul>
              {material.map((e, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    value={e.value}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMaterialOption(e.target.value);
                      } else {
                        setMaterialOption("");
                      }
                    }}
                  />
                  {e.text}
                </li>
              ))}
            </ul>

            <h3>Hình dáng</h3>
            <ul>
              {style.map((e, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    value={e.value}
                    onChange={(e) => setStyleOption(e.target.value)}
                  />
                  {e.text}
                </li>
              ))}
            </ul>
            <h3>Khoảng giá</h3>
            <ul>
              <li>
                <input type="checkbox" />
                100.000đ - 1000.000đ
              </li>
              <li>
                <input type="checkbox" />
                1.000.000đ - 5trieuđ
              </li>
              <li>
                <input type="checkbox" />
                Trên 5.000.000đ
              </li>
            </ul>
          </div>
          <div className="col-10" style={{ width: "80%" }}>
            <div className="shop-kinhs">
              <ul className="shop-product1">
                {glasses.length > 0 &&
                  glasses.map((e: Glass, i) => (
                    <li className="shop-product2" key={i}>
                      <div className="addimg" style={{ position: "relative" }}>
                        <img className="" src={e.img1} alt="" />
                        <p className="addtocart">
                          <i
                            style={{ fontSize: "20px" }}
                            className="fa-solid fa-cart-shopping"
                          ></i>
                        </p>
                        <p className="sale">SALE</p>
                      </div>

                      <br />
                      <span
                        className="shop-product3"
                        onClick={() => handleDetail(e.glassId)}
                      >
                        {e.glassName}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <s className="shop-product4">
                          {formatMoney(e.glassPrice)}
                        </s>
                        <span
                          className="shop-product4"
                          style={{
                            color: "red",
                            fontWeight: "bolder",
                            fontStyle: "italic",
                          }}
                        >
                          {formatMoney(e.glassPrice * (1 - e.glassSale))}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ padding: " 0% 5%", marginBottom: "6%" }}>
          <div className="product-one">
            <h1>SẢN PHẨM MỚI NHẤT</h1>
            <div className="" style={{ display: "flex", gap: "23%" }}>
              <div style={{ width: "18%" }}>
                <img
                  width={"550px"}
                  className="product-img"
                  src="https://vcdn-vnexpress.vnecdn.net/2016/04/23/VNE-Sound-6207-1461383366.jpg"
                  alt=""
                />
              </div>
              <div style={{ width: "61%" }}>
                <Slider {...settings1}>
                  <div className="product-new1">
                    <img
                      src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwbaef4a9d/JBL_PULSE4_HERO_WHITE_001.png?sw=537&sfrm=png"
                      alt=""
                    />
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw0ad290cd/1_JBL_PULSE_5_HERO_34364_x2.png?sw=537&sfrm=png"
                      alt=""
                    />
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw26f960d4/1_JBL_FLIP6_HERO_PINK_29399_x1.png?sw=537&sfrm=png"
                      alt=""
                    />
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1d073a5f/JBL_FLIP_ESSENTIAL_2_HERO_36360_x3.png?sw=537&sfrm=png"
                      alt=""
                    />
                  </div>
                  <div className="product-new1">
                    <img
                      src="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwe126bf89/JBL_Flip5_Product%20Photo_Hero_Fiesta%20Red.png?sw=537&sfrm=png"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
