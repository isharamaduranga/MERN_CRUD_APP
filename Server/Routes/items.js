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
router.get('/items', (req, res) => {

    Items.find()
        .then(items => {
            return res.status(200).json({
                success: true ,
                existingItems: items ,
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err,
            });
        });
});


/**  UPDATE ITEM */
router.put('/item/update/:id', (req, res) => {
    Items.findByIdAndUpdate(req.params.id,

        //update full body feature - (mongoose feature $set:req.body)
        {
            $set: req.body
        })
        .then(item => {
            return res.status(200).json({
                success: "Update Successfully ..."
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err,
            });
        });
});

/** DELETE ITEM */
router.delete('/item/delete/:id', (req, res) => {
    Items.findByIdAndRemove(req.params.id)
        .then(deletedItem => {
            return res.status(200).json({
                success: "Successfully Deleted Item ...", deletedItem
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err,
            });
        });
})

module.exports = router;