import { Paper } from '@material-ui/core';
import { Avatar, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';
export default function Repos() {
    const history = useHistory();
    const classes = useStyles();

    const handleClickIssues = () => {
        history.push('/issues')
    }
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div className='repos'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={6} >
                        <ArrowBack onClick={handleBack} className={classes.goback}></ArrowBack>
                        <Avatar className={classes.avatar}>j</Avatar>
                        <Typography className={classes.typographyName}> Jacob Kipkurui</Typography>
                        <Typography className={classes.typographyTotal}>Repos:34</Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paperRepo}>
                        <Typography>List of Your Repos</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>
                    <Typography className={classes.typoRepo} onClick={handleClickIssues}>Facbook Clown</Typography>

                </Grid>

            </Grid>

        </div>
    )
}
