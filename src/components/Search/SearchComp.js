import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
    const [search, setSearch] = useState("")
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/repo');
    }

    return (
        <div className='header'>
            <Grid container justify='center' spacing={2}>
                <Grid item xs={12} >
                    <Typography className={classes.typographyGit} variant="h2" >
                        Github Issue Tracker
            </Typography>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <TextField
                        className={classes.search}
                        id=""
                        label="Search User"
                        variant="standard"
                        color="primary"
                        margin="none"
                        size="medium"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />

                </Grid>

                <Grid item xs={12} sm={4}>
                    <Button className={classes.ButtonSearch} onClick={handleClick} variant="contained" color="primary">
                        Search
            </Button>

                </Grid>
                <Grid item xs={12}>
                    <img className={classes.svg} src="svg.svg" />

                </Grid>


            </Grid>
        </div>
    )
}
