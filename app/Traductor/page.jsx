"use client"
import { useState } from 'react';
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
    //Valor inicial y valor a cambiar
    const [inputText, setInputText] = useState("")

    //Crear evento para getLanguageSource
    function getLanguageSource(e) {
        e.preventDefault() //Previene opccion de seleccion automatica de componentes
        console.log(inputText)
    }

    //Accion de onChange
    function inputHandler(e) {
        setInputText(e.target.value)
    }

    //valores a mostrar en la página
    return (
        <>
            <div className="app-header">
                <h2 className="header">Dogo Traductor</h2>
            </div>

            <div className='app-body'>
                <div>
                    {/*Un textarea donde se escribe el texto a traducir*/}
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Type Text to Translate..'
                            onChange={inputHandler}
                        />

                        {/*Selecciona un lenguaje*/}
                        <select className="language-select">
                            <option>Please Select Language..</option>
                        </select>

                        {/*Otro textarea donde se muestra el resultado*/}
                        <Form.Field
                            control={TextArea}
                            placeholder='Your Result Translation..'
                        />

                        {/*Boton para activar la funcion*/}
                        <Button
                            color="blue"
                            size="large"
                            onClick={getLanguageSource}
                        >  {/*Traer icono con el nombre traducir de Semantic UI React*/}
                            <Icon name='translate' />
                            Translate</Button>
                    </Form>
                </div>
            </div>

        </>

    )
}
