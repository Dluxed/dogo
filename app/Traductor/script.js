import lenguages from "./lenguages"

//Componentes a usar
function Codigito(){
    const selectFirst = document.querySelector(".first");
    const selectSecond = document.querySelector(".second");
    const translate = document.querySelector(".translate");
    const fromText = document.querySelector(".fromText");
    const toText = document.querySelector(".toText");
    const language1 = "en-GB";
    const language2 = "es-ES";
    
    for ( const i in lenguages){
        const key = Object.keys(lenguages[i]).toString()
        const value = Object.values(lenguages[i]).toString()
        selectFirst.innerHTML += `<option value=${key}>${value}</option>`
        selectSecond.innerHTML += `<option value=${key}>${value}</option>`
    }
return (
    
        //Funcion para traducir las secciones seleccionadas
        selectFirst.value = language1,
        selectSecond.value = language2,

        //Peticion para mymemory
        translate.addEventListener("click",async _=>{
            if(!fromText.value) return
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${fromText.value}&langpair=${selectFirst.value}|${selectSecond.value}`)
            const data = await res.json()
            toText.value = data.responseData.translatedText
            console.log(data.responseData.translatedText)
            })

    )
 }



export default Codigito