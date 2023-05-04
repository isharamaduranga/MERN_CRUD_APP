/**Import and require express , Mongoose to app*/
const express = require("express");

/** Import User models which have created */
const Items = require("../Data_models/items");

/** Import express Router for send request */
const router = express.Router();

/** SAVE ITEM  */
router.post('/item/save', (req, res) => {
    let newItem = new Items(req.body);
    newItem.save()
        .then(() => {
            return res.status(200).json({
                success: "Item Saved successfully ..."
            });
        })
        .catch((err) => {
        return res.status(400).json({
            error: err
        });
    });
});

/** GET ITEMS  */

module.exports = router;