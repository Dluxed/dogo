import React from "react";
import "./page.css";
//import Codigito from "./script";


export default function Traductor(){
  return (
<body>
    <div class="conatiner">
        <div>
            <div class="header">
                <select class="first">
                </select>
                <select class="second"></select>
            </div>
            <div class="containerTextArea">
                <div>
                    <textarea class="fromText" placeholder="Enter text"></textarea>  
                </div>
                <div>
                    <textarea class="toText" placeholder="Enter text"></textarea>
                </div>
            </div>
            <button class="translate">Translate</button>
        </div>
    </div>
    <script src="./script.js" type="module"></script>
</body>
   );
}

  
