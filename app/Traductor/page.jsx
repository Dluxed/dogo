"use client"
import { useState, useEffect } from 'react';
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react'; //Componentes a usar
import "./page.css";
import axios from 'axios';//importar axios para el traductor


//Funcion de traducir, se ejecutan las acciones necesarias para responder y realizar una traduccion
export default function pageTranslator() {
    const [inputText, setInputText] = useState(""); //Valor inicial y valor a cambiar
    const [detectLanguageKey, setdetectedLanguageKey] = useState(''); //Lenguaje a traducir, detecta que lenguaje hay en el primer textbox
    const [selectedLanguageKey, setLanguageKey] = useState(''); //Ver key de lenguaje seleccionado en la lista
    const [languagesList, setLanguagesList] = useState([]); //Lista de lenguajes
    const [resultText, setResultText] = useState(''); //Texto resultado
    //Obtener los lenguajes y utilizar la api axios para obtener idiomas, dar una respuesta de traduccion con los idiomas seleccionados.
    const getLanguageSource = () => {
         axios.post('https://libretranslate.de/detect', {
             q: inputText
         })
             .then((response) => {
                setdetectedLanguageKey(response.data[0].language)
             })
     }
     useEffect(() => {
         axios.get('https://libretranslate.de/languages')
             .then((response) => {
                 setLanguagesList(response.data)
             })
     getLanguageSource()}, [inputText])

     //Constante de leguagueKey
     const languageKey = (selectedLanguage) => {
         setLanguageKey(selectedLanguage.target.value)
     }
    
    //Constante para seleccionar objetivos a traducir
     const translateText = () => {
         getLanguageSource();
         let data = {
             q : inputText,
             source: detectLanguageKey,
             target: selectedLanguageKey
         }
         axios.post(`https://libretranslate.de/translate`, data)
         .then((response) => {
             setResultText(response.data.translatedText)
         })
     }

    //valores a mostrar en la página
    return (
        <>
            <div>
             <div className="app-header">
                 <h2 className="header">Dogo Traductor</h2>
             </div> 
             <div className='app-body'>
                 <div>
                     <Form>
                         <Form.Field
                             control={TextArea}
                             placeholder='Escribe aquí el texto a traducir..'
                             onChange={(e) => setInputText(e.target.value)}
                        />
                        
                         <select className="language-select" 
                         onChange={languageKey}>
                             <option>Please Select Language..</option>
                             {languagesList.map((language) => {
                                 return (
                                     <option value={language.code}>
                                         {language.name}
                                     </option>
                                 )
                             })}
                         </select>
                         <Form.Field
                             control={TextArea}
                             placeholder='Tu traduccción aparece aquí..'
                             value={resultText}
                         />
                         <Button
                             color="orange"
                             size="large"
                             onClick={translateText}
                         >
                             <Icon name='translate' />
                             Translate</Button>
                     </Form>
                 </div>
             </div>
         </div>

        </>

    )
}
