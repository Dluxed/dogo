import "./page.css";
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react'; //Componentes a usar
//import axios from 'axios';
import React, { useState, useEffect } from 'react';


//Agarra el translate que no funciona de normal en jsx
export default function Translate(){
     //Regresa componentes
     return (
        <div>
            <div className="app-header">
                <h2 className="header">Dogo Traductor</h2> 
            </div>   {/*Devuelve nombre de la pagina*/}

            <div className='app-body'>
                <div>
                   {/*Un textarea donde se escribe el texto a traducir*/}
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Type Text to Translate..'
                            onChange={(e) => setInputText(e.target.value)}
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
        </div>
    )
}