import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Box} from "@mui/material";
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import Snackbar from "../components/SnackBar/SnackBar";

const AddItem = () => {

    const [msg, setMsg] = useState("")

    const initialValues = {
        itemCode: "", itemName: "", description: "", itemQty: "", itemPrice: ""
    }

    const validate = (values) => {
        let errors = {}

        if (!values.itemCode) {
            errors.itemCode = "Item Code Can Not be Blank";
        } else if (!/^ITM-\d{3,5}$/.test(values.itemCode)) {
            errors.itemCode = 'Item Code Must Be Eg: ITM-001 Format';
        }
        if (!values.itemName) {
            errors.itemName = "Item Name is empty , Check Again!!"
        }
        if (!values.description) {
            errors.description = "Description is Empty. Check Again!!"
        }

        if (!values.itemQty) {
            errors.itemQty = "Item Qty  is empty,Check Again!!"
        } else if (!/^\d+$/.test(values.itemQty)) {
            errors.itemQty = 'Item Quantity Must Be Number Format';
        }

        if (!values.itemPrice) {
            errors.itemPrice = "Item Price is empty,Check Again!!"
        } else if (!/^\d+(\.\d{1,2})?$/.test(values.itemPrice)) {
            errors.itemPrice = 'Item Price Must Be Eg:000.00 Format';
        }

        return errors;
    }
    const onSubmit = (values, {resetForm}) => {
        console.log(values)


        axios.post("/item/save", values)
            .then((res) => {
                if (res.data.success) {
                    setMsg('Item Saved Successfully ...');
                    resetForm({values: ''})
                }
            })
            .catch((err) => {
                setMsg('Something Went wrong Not Saved !!!')
            })
    }

    const formik = useFormik({
        initialValues, validate, onSubmit
    });

    return (
        <>
            <div className="d-flex  align-items-center justify-content-center  " style={{height: '90vh'}}>
                <Box
                    className="shadow-lg rounded-4 p-5"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 2, width: '23vw'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={formik.handleSubmit}
                >
                    <h3 className="text-center">~ Add New Item ~</h3>

                    <div>
                        <TextField
                            label="Item Code"
                            id="outlined-size-small"
                            name="itemCode"
                            value={formik.values.itemCode}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.itemCode && formik.touched.itemCode ?
                                <span className="small text-danger">{formik.errors.itemCode}</span> : null}
                        />
                    </div>

                    <div>
                        <TextField
                            label="Item Name"
                            id="outlined-size-small"
                            name="itemName"
                            value={formik.values.itemName}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.itemName && formik.touched.itemName ?
                                <span className="small text-danger">{formik.errors.itemName}</span> : null}
                        />
                    </div>

                    <div>
                        <TextField
                            label="Description"
                            id="fullWidth"
                            name="description"
                            value={formik.values.description}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.description && formik.touched.description ?
                                <span className="small text-danger">{formik.errors.description}</span> : null}
                        />
                    </div>

                    <div>
                        <TextField
                            label="Quantity"
                            id="fullWidth"
                            name="itemQty"
                            value={formik.values.itemQty}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.itemQty && formik.touched.itemQty ?
                                <span className="small text-danger">{formik.errors.itemQty}</span> : null}
                        />
                    </div>

                    <div>
                        <TextField
                            label="Unit Price"
                            id="fullWidth"
                            name="itemPrice"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R.s </InputAdornment>,
                            }}
                            value={formik.values.itemPrice}
                            size="small"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.errors.itemPrice && formik.touched.itemPrice ?
                                <span className="small text-danger">{formik.errors.itemPrice}</span> : null}
                        />
                    </div>

                    <div className="d-flex  align-items-center justify-content-center">
                        <button type="submit" className="btn   mt-4 btn-success align-items-center">
                            Submit
                        </button>
                        <button type="submit" className="btn  ms-3 mt-4 btn-danger align-items-center">
                            <Link to="/" style={{textDecoration: "none", color: "white"}}>
                                Cancel
                            </Link>
                        </button>
                    </div>
                </Box>
            </div>
            {msg ? <Snackbar severity="success" message={msg}/> : ""}
        </>
    );
}

export default AddItem;