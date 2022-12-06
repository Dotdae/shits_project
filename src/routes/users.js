const router = require('express').Router();

// Login/Sign up form.


router.get('/access', (req, res) =>{

    res.render('access', {title: 'Acceder'});

});


// Login.

router.get('/login', (req, res) =>{

    res.render('login', {title: 'Iniciar sesion'});

});


// Sign up.

router.get('/signup', (req, res) =>{

    res.render('signup', {title: 'Registrarse'});

});


module.exports = router;