import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';


const Alert = React.forwardRef(
    function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar(props) {
    const [open, setOpen] = React.useState(true);

    const {severity,message} = props;


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }
    return (
        <Stack spacing={5} sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'down', horizontal: 'right' }}
                TransitionComponent={TransitionRight}
            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    <div>{message}</div>
                </Alert>
            </Snackbar>
        </Stack>
    );
}
