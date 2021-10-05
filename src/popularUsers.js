const {Router} = require('express');
const router = Router();
const Friend = require('../models/friends');


router.get('/', (req, res) => {
    Friend.aggregate(
        [{$group : {_id : "$user_to", "count" : {$sum : 1}}},
            {$sort : {"count" : -1}},
            {$limit : 3}], function (err, result){
            if (err) {
                res.status(403);
                res.send(err);
            } else {
                res.json({
                    data: result
                })
            }
        })
});

module.exports = router