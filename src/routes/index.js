const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hello World with AWS EC2!"
        }
    );
})

module.exports = router;