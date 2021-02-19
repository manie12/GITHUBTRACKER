import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    typography: {
        textAlign: 'center',
        marginBottom: '0.4em',
        lineHeight: '2em'
    },
    img: {
        height: '2em',
        width: '2em',
        paddingTop: '3em',
        position: 'absolute',
        top: "-1em",
        left: '1em'
    },
    paper: {
        width: '100%',
        position: 'relative'
    },
    filters: {
        width: '70%'
    },
    searchBar: {
        width: '70%'
    },
    tags: {
        width: '100%'
    }

}))