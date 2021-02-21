import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './Styles';
import { setUser, getUser } from '../../Redux/Actions/UserRest';



export default function Sign() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ FirstName: "", SecondName: "", Email: "", Password: "", ConfirmPassword: "" })
    const [signin, setsignin] = useState(false)
    const classes = useStyles();

    console.log(userData)
    const handleLogin = () => {

        setsignin(prevLogin => !prevLogin)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (signin) {
            dispatch(getUser(userData, history));

        } else {
            dispatch(setUser(userData, history));

        }

    }

    return (
        <div className='sign'>
            {
                signin ? (
                    <div className='signup'>

                        <form onSubmit={handleSubmit}>
                            < TextField required className={classes.textField} id="" fullWidth label="FirstName" variant="standard" color="primary" margin="none" size="small" value={userData.FistName}
                                onChange={(e) => setUserData({ ...userData, FirstName: e.target.value })} />
                            <TextField required className={classes.textField} id="" fullWidth label="SecondName" variant="standard" color="primary" margin="none" size="small" value={userData.SecondName}
                                onChange={(e) => setUserData({ ...userData, SecondName: e.target.value })} />
                            <TextField required className={classes.textField} id="" fullWidth label="Enter Email" variant="standard" color="primary" margin="none" size="small" value={userData.Email}
                                onChange={(e) => setUserData({ ...userData, Email: e.target.value })} />
                            <TextField required className={classes.textField} id="" fullWidth label="Password" variant="standard" color="primary" margin="none" size="small" value={userData.Password}
                                onChange={(e) => setUserData({ ...userData, Password: e.target.value })} />
                            <TextField required className={classes.textField} id="" fullWidth label="ConfirmPassword" variant="standard" color="primary" margin="none" size="small" value={userData.ConfirmPassword}
                                onChange={(e) => setUserData({ ...userData, ConfirmPassword: e.target.value })} />

                            <Button type='submit' fullWidth variant="contained" color="primary">
                                Submit
                           </Button>
                            <Button className={classes.typoLogin} onClick={handleLogin}>Already have an account ? SignUp</Button>
                        </form>


                    </div>

                ) :
                    <div className='signup'>
                        <form onSubmit={handleSubmit}>
                            <TextField required className={classes.textField} id="" fullWidth label="Email" variant="standard" color="primary" margin="none" size="small" value={userData.Email}
                                onChange={(e) => setUserData({ ...userData, Email: e.target.value })} />
                            <TextField required className={classes.textField} id="" fullWidth label="Password" variant="standard" color="primary" margin="none" size="small" value={userData.Password}
                                onChange={(e) => setUserData({ ...userData, Password: e.target.value })} />


                            <Button type='submit' fullWidth variant="contained" color="primary">
                                Login
                    </Button>
                            <Button className={classes.typoLogin} onClick={handleLogin}>Dont have an account ? SignUp</Button>

                        </form>

                    </div>


            }




        </div>



    )
}
