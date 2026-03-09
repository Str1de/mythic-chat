import '@babel/polyfill';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    StyledEngineProvider,
} from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Chat from '../Chat';
import Nui from '../../util/Nui';

library.add(fab, fas);

const App = ({ hidden }) => {
    const mode = 'dark';
    const muiTheme = createTheme({
        typography: {
            fontFamily: ['Rajdhani', 'sans-serif'],
        },
        palette: {
            primary: {
                main: '#00c9b1',
                light: '#4ddfd0',
                dark: '#009a87',
            },
            secondary: {
                main: mode === 'dark' ? '#0f1a1a' : '#ffffff',
                light: mode === 'dark' ? '#162222' : '#F5F6F4',
                dark: mode === 'dark' ? '#0a1212' : '#EBEBEB',
                contrastText: mode === 'dark' ? '#e0f7f5' : '#1a2e2e',
            },
            error: {
                main: '#ff4d6a',
                light: '#ff8096',
                dark: '#c0003a',
            },
            success: {
                main: '#00c9b1',
                light: '#4ddfd0',
                dark: '#009a87',
            },
            warning: {
                main: '#f0b429',
                light: '#f5ce6e',
                dark: '#b07d00',
            },
            info: {
                main: '#38bdf8',
                light: '#7dd3fc',
                dark: '#0284c7',
            },
            text: {
                main: mode === 'dark' ? '#e0f7f5' : '#1a2e2e',
                alt: mode === 'dark' ? '#7fb8b3' : '#4a7a76',
                info: mode === 'dark' ? '#4a8a86' : '#4a8a86',
                light: '#ffffff',
                dark: '#000000',
            },
            alt: {
                green: '#00c9b1',
                greenDark: '#003d38',
            },
            border: {
                main: mode === 'dark' ? 'rgba(0,201,177,0.06)' : 'rgba(0,201,177,0.06)',
                light: '#4ddfd0',
                dark: '#0d2020',
                input: mode === 'dark'
                    ? 'rgba(0, 201, 177, 0.18)'
                    : 'rgba(0, 201, 177, 0.18)',
                divider: mode === 'dark'
                    ? 'rgba(0, 201, 177, 0.12)'
                    : 'rgba(0, 201, 177, 0.12)',
            },
            mode: 'dark',
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '@import': "url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap')",
                    body: {
                        '.fade-enter': { opacity: 0 },
                        '.fade-exit': { opacity: 1 },
                        '.fade-enter-active': { opacity: 1 },
                        '.fade-exit-active': { opacity: 0 },
                        '.fade-enter-active, .fade-exit-active': {
                            transition: 'opacity 500ms',
                        },
                    },
                    '*': {
                        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                            WebkitAppearance: 'none',
                            margin: 0,
                        },
                        '&::-webkit-scrollbar': {
                            width: 4,
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(0,201,177,0.35)',
                            borderRadius: 4,
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#00c9b1',
                            transition: 'background ease-in 0.15s',
                        },
                    },
                    html: {
                        background: process.env.NODE_ENV != 'production'
                            ? '#0a1212'
                            : 'transparent',
                        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                            WebkitAppearance: 'none',
                            margin: 0,
                        },
                        'textarea:focus, input:focus': { outline: 'none' },
                    },
                    '@keyframes critical': {
                        '0%, 49%': { backgroundColor: '#0a1212' },
                        '50%, 100%': { backgroundColor: '#0d1f1f' },
                    },
                    '@keyframes critical-border': {
                        '0%, 49%': { borderColor: 'rgba(0,201,177,0.4)' },
                        '50%, 100%': { borderColor: '#00c9b1' },
                    },
                    '@keyframes msgSlideIn': {
                        '0%': { opacity: 0, transform: 'translateX(-8px)' },
                        '100%': { opacity: 1, transform: 'translateX(0)' },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: { background: '#0a1212' },
                },
            },
        },
    });

    useEffect(() => {
        Nui.send('loaded');
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <Chat />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

App.propTypes = {
    hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ hidden: state.app.hidden });

export default connect(mapStateToProps)(App);
