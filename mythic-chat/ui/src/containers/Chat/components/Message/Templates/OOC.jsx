import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '7px 10px',
        background: 'rgba(10, 18, 18, 0.75)',
        border: `1px solid rgba(0, 201, 177, 0.14)`,
        borderLeft: `2px solid ${theme.palette.text.alt}`,
        marginBottom: 2,
        minWidth: 160,
        width: 'fit-content',
        maxWidth: '100%',
        height: 'fit-content',
        borderRadius: 4,
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
        animation: '$msgIn 0.18s ease',
    },
    '@keyframes msgIn': {
        '0%': { opacity: 0, transform: 'translateX(-6px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    tag: {
        color: theme.palette.primary.light,
        fontWeight: 600,
        fontSize: '0.78em',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
    },
    author: {
        color: theme.palette.text.alt,
        fontSize: '0.78em',
        borderBottom: `1px solid rgba(0,201,177,0.1)`,
        marginBottom: 4,
        paddingBottom: 4,
        '& small': {
            marginLeft: 5,
            opacity: 0.6,
        },
    },
    content: {
        paddingLeft: 2,
        fontSize: '0.88em',
        color: theme.palette.text.main,
        lineHeight: 1.45,
    },
}));

export default ({ message }) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.author}>
                <span className={classes.tag}>[OOC]</span>{' '}
                {message.author.First} {message.author.Last}
                <small>({message.author.SID})</small>
            </div>
            <div className={classes.content}>{message.message}</div>
        </div>
    );
};
