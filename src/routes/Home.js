import React from "react";

function Home() {
  return (
    <div className="home content-cont">
      <div className="cont-cont" >
        <p className="sub-text">WebMaker Version 1.2</p>
        <div className="main-text" >
          <p>Website and User</p>
          <p>Interface</p>
          <p>Intergration</p>
        </div>
        <div>

        </div>
        <p className="sub-text">Create your website in the best way possible.</p>
        <div style={{marginBottom:'30px'}}>
          <button className="btn sub-btn">Subscribe</button>
          <button className="btn dem-btn">Demo</button>
        </div>
      </div>
      <div className="img-cont" >
       <div className="anchr-pnt">
        <img className="phn-img" src="main.png"/>
        <img className="user-img slide" src="1.png"/>
        <img className="loader-img slide6" src="2.png"/>
        <img className="cpp-img slide5" src="3.png"/>
        <img className="tag-img slide4" src="4.png"/>
        <img className="htl-img slide2" src="5.png"/>
        <img className="con-img slide3" src="6.png"/>
       </div>
      </div>
    </div>
  );
}

export default Home;
