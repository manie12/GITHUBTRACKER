import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './Styles';

export default function Sign() {
    const [userData, setUserData] = useState({ FirstName: "", SecondName: "", Email: "", Password: "", ConfirmPassword: "" })
    const signin = true
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className='sign'>
            {
                signin ? (
                    <div className='signup'>

                        <form onSubmit={handleSubmit}>
                            < TextField className={classes.textField} id="" fullWidth label="FirstName" variant="standard" color="primary" margin="none" size="small" value={userData.FistName}
                                onChange={(e) => setUserData({ ...userData, FirstName: e.target.value })} />
                            <TextField className={classes.textField} id="" fullWidth label="SecondName" variant="standard" color="primary" margin="none" size="small" value={userData.SecondName}
                                onChange={(e) => setUserData({ ...userData, SecondName: e.target.value })} />
                            <TextField className={classes.textField} id="" fullWidth label="Enter Email" variant="standard" color="primary" margin="none" size="small" value={userData.Email}
                                onChange={(e) => setUserData({ ...userData, Email: e.target.value })} />
                            <TextField className={classes.textField} id="" fullWidth label="Password" variant="standard" color="primary" margin="none" size="small" value={userData.Password}
                                onChange={(e) => setUserData({ ...userData, Password: e.target.value })} />
                            <TextField className={classes.textField} id="" fullWidth label="ConfirmPassword" variant="standard" color="primary" margin="none" size="small" value={userData.ConfirmPassword}
                                onChange={(e) => setUserData({ ...userData, ConfirmPassword: e.target.value })} />

                            <Button type='submit' fullWidth variant="contained" color="primary">
                                Submit
                           </Button>
                        </form>


                    </div>

                ) :
                    <div className='sign'>
                        <form onSubmit={handleSubmit}>
                            <TextField className={classes.textField} id="" fullWidth label="Email" variant="standard" color="primary" margin="none" size="small" value={userData.Email}
                                onChange={(e) => setUserData({ ...userData, Email: e.target.value })} />
                            <TextField className={classes.textField} id="" fullWidth label="Password" variant="standard" color="primary" margin="none" size="small" value={userData.Password}
                                onChange={(e) => setUserData({ ...userData, Password: e.target.value })} />


                            <Button type='submit' fullWidth variant="contained" color="primary">
                                Submit
                    </Button>

                        </form>

                    </div>


            }




        </div>



    )
}
