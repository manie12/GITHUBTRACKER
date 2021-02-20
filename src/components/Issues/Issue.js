import React from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import {
    Grid, Paper, TextField, Button, InputLabel, MenuItem,
    FormControl, Select

} from '@material-ui/core';
import { useStyles } from './Styles';



export default function Issue(props) {
    const { searchIssue, setsearchIssue } = props
    const classes = useStyles();
    const history = useHistory();
    const handleBackArrow = () => {
        history.goBack();
    }
    return (
        <div className='issue'>
            <Grid container spacing={2}>
                <Paper className={classes.paper} elevation={7}>


                    <Grid item xs={12}>
                        <Typography className={classes.typography} variant='h3'>Issues</Typography>
                        <Typography className={classes.typography} >Repos:Facbook Clown</Typography>
                    </Grid>
                    <img onClick={handleBackArrow} className={classes.img} src='/back.png' alt='back arror' />


                </Paper>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={5}>
                        <form>
                            <Grid container justify='center' spacing={2}>
                                <Grid item xs={12} sm={3} >
                                    <FormControl className={classes.filters}>
                                        <InputLabel id="demo-simple-select-label">Filters</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={searchIssue.select}
                                            onChange={(e) => setsearchIssue({ ...searchIssue, select: e.target.value })}
                                        >
                                            <MenuItem value={"your submission"}>Your Submission</MenuItem>
                                            <MenuItem value={"all issues"}>All issues</MenuItem>
                                            <MenuItem value={"issues"}>issues</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        className={classes.searchBar}
                                        id=""
                                        label="Search"
                                        variant="standard"
                                        color="primary"
                                        margin="none"
                                        size="small"
                                        value={searchIssue.search}
                                        onChange={(e) => setsearchIssue({ searchIssue, search: e.target.value })}

                                    />
                                    <Button variant="contained" color="primary">
                                        Search Issue
                        </Button>

                                </Grid>
                                <Grid item xs={12} sm={3} >
                                    <Typography className={classes.tags}>Tags</Typography>
                                </Grid>

                            </Grid>

                        </form>
                    </Paper>


                </Grid>
            </Grid>

        </div>
    )
}
