import React from "react";
import "./page.css";
export default function Cursos(){
  return (
<>
{/*Devuelve frase de comienza un curso*/}
<head> ¡Comienza un curso!
</head>
<body>

{/*Contenedor de curso*/}
<div class="Curso">
<h2>Ingles</h2>
<p>En este curso aprenderas a comprender y utilizar expresiones básicas 
    cotidianas destinadas a cubrir necesidades sencillas tales como saludar, 
    presentarse y hacer preguntas.</p>
<p><a href="/CursoIngles">Ir al curso</a></p>{/*Redireccion a pagina CursoIngles*/}
</div> 

{/*Contenedor de curso*/}
<div class="Curso">
<h2>Frances</h2>
<p>En este curso aprenderas a comprender y utilizar preposiciones básicas 
    destinadas a la pronunciacion, tambien cubrira las necesidades sencillas
    como saludos y despedidas.</p>
<p><a href="/CursoFrances">Ir al curso</a></p> {/*Redireccion a pagina CursoFrances*/}
</div>

</body>
</>
  )
}