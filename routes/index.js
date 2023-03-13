var express = require ("express");
var router = express.Router();

//Método para verificar el estado autenticado del usuario, devuelve verdadero si inició sesión.
router.get("/",(req,res) => { 
    console.log(req.oidc.isAuthenticated());
    res.render("index", {title: "Dogo Languages",
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

module.exports = router;