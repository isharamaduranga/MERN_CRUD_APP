/**Import and require express , Mongoose to app*/
const express = require("express");

/** Import User models which have created */
const Posts = require("../Data_models/posts");

/** Import express Router for send request */
const router = express.Router();

/** SAVE ITEM Posts */
router.post('/post/save'), (req, res) => {
    let newPost = new Posts(req.body);

    newPost.save().then(() => {
        return res.status(200).json({
            success: "Item Saved successfully ..."
        })
    }).catch((err) => {
        return res.status(400).json({
            error: err
        });
    });
}

module.exports = router;