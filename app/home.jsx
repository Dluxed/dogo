const express = require('express');
const app = express;
const { auth } = require('express-openid-connect');
require ('dotenv').config();

//Configuracion para auth0 api
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};
//Para adjuntar las rutas /login, /logout y /callback
app.use(auth(config));

// req.oidc.isAuthenticated se proporciona desde el enrutador de autenticación
app.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});

// La ruta /profile mostrará el perfil de usuario como JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});


export default function Home(){
    return(
        <h1>Home Page</h1>
    )
}
//Falta por añadir promocion a los cursos y al traductor

