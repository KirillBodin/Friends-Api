const {Router} = require('express');
const router = Router();
const Friend = require('../models/friends');

router.get('/', (req, res) => {
    Friend.count({is_accepted:true}, (err, count) => {
        if (count) res.send(200,count)
        else {
            res.status(404);
            res.send("No data")};
    });
});


module.exports = router