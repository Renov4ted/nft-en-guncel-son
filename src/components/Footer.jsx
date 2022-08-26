import React from "react";
import PNG1 from "../assets/Footer/1.png";
import BATU from "../assets/Footer/Batu.png";
import FATİH from "../assets/Footer/Fatih.png";
import FURKAN from "../assets/Footer/Furkan.png";
import NAZIRE from "../assets/Footer/Nazire.png";
import MERT from "../assets/Footer/Mert.png";
import PNG2 from "../assets/Footer/2.png";
import PNG3 from "../assets/Footer/7.png";

function Footer() {
  return (
    <div
      className="footerContainer"
      style={{
        backgroundColor: "#81DC93",
      }}
    >
      <div>
        <p className="team__members">TEAM MEMBERS</p>
        <div>
          <input type="radio" name="dot" id="one" />
          <input type="radio" name="dot" id="two" />
          <input type="radio" name="dot" id="three" />

          <div id="team" class="main-card">
            <div class="cards">
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={PNG2} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">BuessAlgo</div>
                    <div class="job">
                      A hardworking business development manager who always has
                      the ideas, initiatives, and activities to make Lucky
                      Pandas Number 1 on Algorand.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={PNG1} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">North </div>
                    <div class="job">
                      An innovator product manager who gives whatever he has to
                      benefit Lucky Pandas and its wonderful community.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={PNG3} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">Lykia</div>
                    <div class="job">
                      An extravert senior manager who knows how to communicate
                      with people.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cards">
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={BATU} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">'Moon</div>
                    <div class="job">
                      Team's extraordinary manager who knows how to get things
                      done quickly, can work constantly, and takes his energy
                      from working.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={NAZIRE} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">Annabel Lee </div>
                    <div class="job">
                      A multitasking content creator dancing into the wonderland
                      of words and images.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={MERT} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name"> 'Smoke</div>
                    <div class="job">
                      {" "}
                      A cheerful Discord Manager who loves the community as much
                      as he loves himself.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cards line3">
              <div class="card ">
                <div class="content">
                  <div class="img">
                    <img src={FURKAN} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">ClowerKnight</div>
                    <div class="job">
                      We don't know much about this developer but we hope he is
                      perfect as his excellent knowledge of coding.
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={FATİH} alt="Lucky Panda's Team Members" />
                  </div>
                  <div class="details">
                    <div class="name">Renovatêd</div>
                    <div class="job">
                      {" "}
                      A sharp-minded programmer who always pushes his limits and
                      Renovates himself.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <label for="one" class=" active one"></label>
            <label for="two" class="two"></label>
            <label for="three" class="three"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
