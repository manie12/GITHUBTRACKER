import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    paper: {
        height: '10em',
        display: 'grid',
        gridTemplateColumns: 'repeat(12,1fr)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goback: {
        gridColumn: '1/2',
        gridRow: '1/3',
        marginLeft: '1em'

    },
    avatar: {
        height: '5.3em',
        width: '5.3em',
        gridColumn: '2/4',
        gridRow: '1/3',
        justifySelf: 'flex-end',
        backgroundColor: '#16202c',
        color: '#fcfcfc',

    },
    typographyName: {
        gridColumn: '4/12',
        gridRow: '1/2',
        justifySelf: 'center',
        backgroundColor: '#16202c',
        width: "40%",
        padding: '0.4em',
        color: '#fcfcfc',
        textAlign: 'center'
    },
    typographyTotal: {
        gridRow: '2/3',
        gridColumn: '7/12',
        justifySelf: 'center',
        backgroundColor: '#16202c',
        width: "40%",
        padding: '0.4em',
        color: '#fcfcfc',
        textAlign: 'center'
    },
    paperRepo: {
        height: '3em',
        textAlign: 'center',
        color: '#3d3d3d'
    },
    typoRepo: {
        margin: '0em 3em',
        padding: '1em 0em',
        backgroundColor: 'grey',
        marginBottom: '1em',
        boxShadow: '4px 4px 7px #16202c'
    }


}));
