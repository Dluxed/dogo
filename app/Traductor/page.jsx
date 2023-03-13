import React from "react";
import "./page.css";

//No sirve xd

export default function Traductor(){
  return (
<body>
    <div class="container">
        <div>
            <div class="header">
                <select class="first">
                </select>
                <select class="second"></select>
            </div>
            <div class="containerTextArea">
                <div>
                    <textarea class="TextHere" placeholder="Inserta texto a traducir aquí"></textarea>  
                </div>
            </div>
            <button class="translate">Translate</button>
        </div>
    </div>
    <script src="script" type="module"></script>
</body>
   );
}

  
