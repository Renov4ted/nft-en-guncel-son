import React from "react";
import releaseBambu from "../assets/releaseBambu.jpg";
import SLIDERRESIM1 from "../assets/SLIDERRESIM1.jpg"
import SLIDERRESIM2 from "../assets/SLIDERRESIM2.png"
import SLIDERRESIM3 from "../assets/SLIDERRESIM3.png"
import SLIDERRESIM4 from "../assets/SLIDERRESIM4.png"
import SLIDERRESIM5 from "../assets/SLIDERRESIM5.png"

export default function Release() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 3,
      }}
      className="releases"
    >
      <div className="ReleaseImage">
      <img className="Class-El" src={releaseBambu} />
      </div>
  
      <div
        style={{
          backgroundColor: "#FCCB8D",
        }}
        className="release2 "
      >
        <div>
          <div id="roadmap" class="swiffy-slider fatherLi">
            <ul className="slider-container ">
              <li>
                <img
                  className="roadmapImg"
                  src={SLIDERRESIM1}
                />
              </li>
              <li>
                <img
                  className="roadmapImg"
                  src={SLIDERRESIM2}
                />
              </li>
              <li>
                <img
                  className="roadmapImg"
                  src={SLIDERRESIM3}
                />
              </li>
              <li>
                <img
                  className="roadmapImg"
                  src={SLIDERRESIM4}
                />
              </li>
              <li>
                <img
                  className="roadmapImg"
                  src={SLIDERRESIM5}
                />
              </li>
            </ul>

            <button type="button" class="slider-nav"></button>
            <button type="button" class="slider-nav slider-nav-next"></button>

            <div class="slider-indicators">
              <button class="active roadmapButton"></button>
              <button className="roadmapButton"></button>
              <button className="roadmapButton"></button>
              <button className="roadmapButton"></button>
              <button className="roadmapButton"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}