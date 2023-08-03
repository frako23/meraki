import {useState} from "react";
import "./App.css";
import logo from "../src/assets/img/logo.png";
import searchIcon from "../src/html/images/search-icon.png";
import img1 from "../src/assets/img/almacen-farmacia.jpg";
import img2 from "../src/assets/img/drogueria.jpg";
import rightArrow from "../src/html/images/right-arrow.png";
import playIcon from "../src/html/images/play-icon.png";
import mapIcon from "../src/html/images/map-icon.png";
import callIcon from "../src/html/images/call-icon.png";
import fbIcon from "../src/html/images/fb-icon.png";
import icon3 from "../src/html/images/icon-3.png"
import twitterIcon from "../src/html/images/twitter-icon.png";
import linkedinIcon from "../src/html/images/linkedin-icon.png";
import instagramIcon from "../src/html/images/instagram-icon.png";
import mailIcon from "../src/html/images/mail-icon.png";
import "../src/html/css/bootstrap-reboot.css";
import "../src/html/css/bootstrap.css";
import "../src/html/css/responsive.css";
// import "../src/html/css/owl.carousel.css"

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      {/* <!-- header section start --> */}
      <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a href="index.html">
              <img src={logo} className="logo-meraki" /> <span className="meraki">Droguería Meraki</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggle(!toggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={toggle ? "collapse" : "navbar-collapse"} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="health.html">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="medicine.html">
                  Nuestros Productos
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="news.html">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="client.html">
                  Client
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contáctanos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={searchIcon} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- header section end --> */}
        {/* <!-- banner section start --> */}
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Droguería <br />
                        <span style={{ color: "#151515" }}>Meraki</span>
                      </h1>
                      <p className="banner_text">
                        Bridamos soluciones efectivas con un amplio portafolio de productos
                      </p>
                      <div className="btn_main">
                        {/* <div className="more_bt">
                          <a href="#">Contact Now</a>
                        </div> */}
                        <div className="contact_bt">
                          <a href="#">Contáctanos</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_1">
                        <img src={img1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Health <br />
                        <span style={{ color: "#151515" }}>Care</span>
                      </h1>
                      <p className="banner_text">
                        There are many variations of passages of Lorem Ipsum
                      </p>
                      <div className="btn_main">
                        <div className="more_bt">
                          <a href="#">Contact Now</a>
                        </div>
                        <div className="contact_bt">
                          <a href="#">Get A Quote</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_1">
                        <img src={img1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="banner_taital">
                        Health <br />
                        <span style={{ color: "#151515" }}>Care</span>
                      </h1>
                      <p className="banner_text">
                        There are many variations of passages of Lorem Ipsum
                      </p>
                      <div className="btn_main">
                        <div className="more_bt">
                          <a href="#">Contact Now</a>
                        </div>
                        <div className="contact_bt">
                          <a href="#">Get A Quote</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image_1">
                        <img src={img1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            className="carousel-control-prev"
            href="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i
              className="fa fa-long-arrow-left"
              style={{ fontSize: "24px", paddingTop: "4px" }}
            ></i>
          </a>
          <a
            className="carousel-control-next"
            href="#main_slider"
            role="button"
            data-slide="next"
          >
            <i
              className="fa fa-long-arrow-right"
              style={{ fontSize: "24px", paddingTop: "4px" }}
            ></i>
          </a> */}
        </div>
      </div>
      {/* <!-- banner section end --> */}
      {/* <!-- health section start --> */}
      <div className="health_section layout_padding">
        <div className="container">
          <h1 className="health_taital">Conoce nuestro portafólio de productos</h1>
          <p className="health_text">
            En Droguería Meraki te ofrecemos una gran variedad con una excelente calidad
          </p>
          <div className="quote">
            <div className="getquote_bt_1">
              <a href="#">
                Conoce nuestros productos{" "}
                <span>
                  <img src={rightArrow} />
                </span>
              </a>
            </div>
            </div>
          <div className="health_section layout_padding">
            <div className="row">
              <div className="col-sm-7">
                <div className="image_main">
                  <div className="main">
                    <img
                      src={img2}
                      alt="Avatar"
                      className="image"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {/* <div className="middle">
                    <div className="text">
                      <img src={icon1} style={{ width: "40px" }} />
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-sm-5">
                <div className="image_main_1">
                  <div className="main">
                    <img
                      src={img3}
                      alt="Avatar"
                      className="image"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="middle">
                    <div className="text">
                      <img src={icon1} style={{ width: "40px" }} />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            
          </div>
        </div>
      </div>
      {/* <!-- health section end --> */}
      {/* <!-- knowledge section end --> */}
      <div className="knowledge_section layout_padding">
        <div className="container">
          <div className="knowledge_main">
            <div className="left_main">
              <h1 className="knowledge_taital">La calidad es el único camino al crecimiento</h1>
              <p className="knowledge_text">
              Cada día nos esforzamos para garantizar a todos nuestros clientes una atención óptima, puntual y sobre todo personalizada </p>

         
<p className="knowledge_text">
En Droguería Meraki ¡Somos fieles creyentes del trabajo en equipo! Por tal razón nos esmeramos por llevarte una experiencia única 

              </p>
            </div>
            <div className="right_main">
              <div className="play_icon">
                <a href="#">
                  <img src={playIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- knowledge section end --> */}
      {/* <!-- news section start --> */}
      <div className="news_section layout_padding">
        <div className="container">
          <h1 className="health_taital">¿Porqué elegirnos?</h1>
          <p className="health_text">
          Cada dia nos esforzamos en llevarle la mejor calidad a nuestros clientes, de la mano de una atención inigualable
          </p>
          <div className="news_section_2 layout_padding">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="box_main">
                  <div className="icon_1">
                    <img src="https://cdn-icons-png.flaticon.com/512/3790/3790110.png" className="handshake" />
                  </div>
                  <h4 className="daily_text">Nos enfocamos cada dia en ganar-ganar</h4>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="box_main active">
                  <div className="icon_1">
                  <img src="https://static.thenounproject.com/png/635129-200.png" />
                    
                  </div>
                  <h4 className="daily_text_1">No somos burocráticos</h4>
                  
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="box_main">
                  <div className="icon_1">
                  <img src={icon3} />
                  </div>
                  <h4 className="daily_text_1">Trabajamos siempre en lo urgente</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="getquote_bt">
            <a href="#">
              Contáctanos{" "}
              <span>
                <img src={rightArrow} />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- news section end --> */}
      {/* <!-- contact section start --> */}
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="contact_taital">Contáctanos</h1>
          <div className="news_section_2">
            <div className="row">
              
              <div className="col-md-6">
                <div className="contact_box">
                  <h1 className="book_text">Envianos un correo</h1>
                  <input
                    type="text"
                    className="Email_text"
                    placeholder="Nombre"
                    name="Name"
                  ></input>
                  <input
                    type="text"
                    className="Email_text"
                    placeholder="Apellido"
                    name="Name"
                  ></input>
                  <textarea
                    className="massage-bt"
                    placeholder="Mensaje"
                    rows="5"
                    id="comment"
                    name="Massage"
                  ></textarea>
                  <div className="send_bt">
                    <a href="#">ENVIAR</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact section end --> */}
      {/* <!-- client section start --> */}
      {/* <div className="client_section layout_padding">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="client_taital">What People Say</h1>
                <p className="client_text">
                  It is a long established fact that a reader will be distracted{" "}
                </p>
                <div className="client_section_2">
                  <div className="client_left">
                    <div>
                      <img src={clientImg} className="client_img" />
                    </div>
                  </div>
                  <div className="client_right">
                    <h3 className="distracted_text">Distracted by</h3>
                    <p className="lorem_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                    <div className="quote_icon">
                      <img src={quoteIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="client_taital">What People Say</h1>
                <p className="client_text">
                  It is a long established fact that a reader will be distracted{" "}
                </p>
                <div className="client_section_2">
                  <div className="client_left">
                    <div>
                      <img src={clientImg} className="client_img" />
                    </div>
                  </div>
                  <div className="client_right">
                    <h3 className="distracted_text">Distracted by</h3>
                    <p className="lorem_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                    <div className="quote_icon">
                      <img src={quoteIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="client_taital">What People Say</h1>
                <p className="client_text">
                  It is a long established fact that a reader will be distracted{" "}
                </p>
                <div className="client_section_2">
                  <div className="client_left">
                    <div>
                      <img src={clientImg} className="client_img" />
                    </div>
                  </div>
                  <div className="client_right">
                    <h3 className="distracted_text">Distracted by</h3>
                    <p className="lorem_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                    <div className="quote_icon">
                      <img src={quoteIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#my_slider"
            role="button"
            data-slide="prev"
          >
            <i
              className="fa fa-long-arrow-left"
              style={{ fontSize: "24px", paddingTop: "4px" }}
            ></i>
          </a>
          <a
            className="carousel-control-next"
            href="#my_slider"
            role="button"
            data-slide="next"
          >
            <i
              className="fa fa-long-arrow-right"
              style={{ fontSize: "24px", paddingTop: "4px" }}
            ></i>
          </a>
        </div>
      </div> */}
      {/* <!-- client section end --> */}
      {/* <!-- footer section start --> */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer_logo">
                <a href="index.html">
                  <img src={logo} />
                </a>
              </div>
              <h1 className="adderss_text">Contáctanos</h1>
              <div className="map_icon">
                <img src={mapIcon} />
                <span className="paddlin_left_0">Nuestra ubicación</span>
              </div>
              <div className="map_icon">
                <img src={callIcon} />
                <span className="paddlin_left_0">0212 - 7626435</span>
              </div>
              <div className="map_icon">
                <img src={mailIcon} />
                <span className="paddlin_left_0">ventas.drogueriameraki@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="adderss_text">Nuestros aliados comerciales</h1>
              <div className="hiphop_text_1">
                aqui van los links de las marcas que venden
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="adderss_text">Links de interes</h1>
              <div className="Useful_text">
                Aqui se puede agregar cualquier información
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="adderss_text">Suscribete a nuestra base de datos</h1>
              <input
                type="text"
                className="Enter_text"
                placeholder="Coloca tu correo"
                name="Enter your Emil"
              ></input>
              <div className="subscribe_bt">
                <a href="#">Suscribete</a>
              </div>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src={fbIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={twitterIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={linkedinIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={instagramIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer section end --> */}
      {/* <!-- copyright section start --> */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            20223 Todos los derechos reservados. Desarrollado por{" "}
            <a href="https://www.devix.tech">Devix</a>
          </p>
        </div>
      </div>
      {/* <!-- copyright section end --> */}
    </>
  );
}

export default App;
