import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        borderBottom: `1px solid rgba(0,201,177,0.06)`,
        '&:last-child': {
            borderBottom: 'none',
        },
    },
    active: {
        color: theme.palette.text.main,
        fontSize: 13,
        fontFamily: 'Rajdhani, sans-serif',
        fontWeight: 600,
    },
    inactive: {
        color: theme.palette.text.alt,
        fontSize: 13,
        fontFamily: 'Rajdhani, sans-serif',
    },
    param: {
        marginLeft: 5,
        color: theme.palette.text.info,
        fontSize: 13,
        fontFamily: 'Rajdhani, sans-serif',
    },
    activeParam: {
        marginLeft: 5,
        color: theme.palette.primary.light,
        fontSize: 13,
        fontFamily: 'Rajdhani, sans-serif',
    },
    helper: {
        marginLeft: 8,
        color: theme.palette.text.info,
        fontSize: 11,
        fontFamily: 'Rajdhani, sans-serif',
        opacity: 0.7,
        '&::before': {
            content: "'›'",
            color: theme.palette.primary.main,
            marginRight: 4,
        },
    },
}));

export default ({ suggestion, isFirst = false, parameterIndex = -1 }) => {
    const classes = useStyles();

    return (
        <ListItem dense className={classes.wrapper}>
            <ListItemText
                primary={
                    <span>
                        <span className={parameterIndex < 0 ? classes.active : classes.inactive}>
                            {suggestion.name}
                        </span>
                        {isFirst && Boolean(suggestion.params) && suggestion.params.length > 0
                            ? suggestion.params.map((p, i) => (
                                <span
                                    key={i}
                                    className={parameterIndex == i ? classes.activeParam : classes.param}
                                >
                                    {' '}[{p.name}]
                                </span>
                            ))
                            : ''}
                    </span>
                }
                secondary={
                    <span className={classes.helper}>
                        {parameterIndex < 0 || !isFirst || !Boolean(suggestion.params) || suggestion.params.length == 0
                            ? suggestion.help
                            : suggestion.params[
                                parameterIndex < suggestion.params.length
                                    ? parameterIndex
                                    : suggestion.params.length - 1
                            ].help}
                    </span>
                }
            />
        </ListItem>
    );
};
