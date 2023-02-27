import React from "react";
import "./page.css";
import "./script";
export default function Traductor(){
  return (

    <body>
      <div class="conatiner">
        <div>
          <div class="header">
            <select class="first">
            </select>
            <button class="iconButton" id="change"><i class="fas fa-exchange-alt"></i></button>
            <select class="second"></select>
          </div>
          <div class="containerTextArea">
            <div>
              <textarea class="fromText" placeholder="Enter text"></textarea>
              <div>
                <button class="read iconButton"><i class="fas fa-volume-up"></i></button>
                <button class="listen iconButton"><i class="fas fa-microphone"></i></button>
              </div>
            </div>
            <div>
              <textarea class="toText" placeholder="Enter text"></textarea>
              <div>
                <button class="read iconButton"><i class="fas fa-volume-up"></i></button>
              </div>
            </div>
          </div>
          <button class="translate">Translate</button>
        </div>
      </div>
      <script src="/script" type="module"></script>
    </body>
  );
}
  
