import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import { Grid } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';


export default function SearchBar(props) {
    const { searchIssue, setsearchIssue } = props
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {

        history.push('/repo');
    }

    return (
        <div className='header'>
            <Grid container justify='center' spacing={2}>
                <Grid item xs={12} container >
                    <Grid item xs={12} sm={8} justify="flex-end">
                        <Typography className={classes.typographyGit} variant="h2" >
                            Github Issue Tracker
                 </Typography>
                    </Grid>
                    <Grid item sm={6} sm={2}  >
                        <Button component={Link} to="/auth" variant="contained" color="primary">
                            SIGN IN
                        </Button>

                    </Grid>
                    <Grid itme xs={6} sm={2} >
                        <Button variant="contained" color="secondary">
                            LOGOUT
                        </Button>

                    </Grid>

                </Grid>


                <form >
                    <Grid item xs={12} sm={7}>

                        <TextField
                            fullWidth
                            className={classes.search}
                            id=""
                            label="Search User"
                            variant="standard"
                            color="primary"
                            margin="none"
                            size="medium"
                            value={searchIssue.searchName}
                            onChange={(e) => setsearchIssue({ ...searchIssue, searchName: e.target.value })}

                        />

                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button className={classes.ButtonSearch} onClick={handleClick} variant="contained" color="primary">
                            Search
                         </Button>

                    </Grid>

                </form>
                <Grid item xs={12}>
                    <img className={classes.svg} src="svg.svg" />

                </Grid>


            </Grid>
        </div>
    )
}
