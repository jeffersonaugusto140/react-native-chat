import React from 'react';

export const themes = {
    light: {
      router: {
        navigationBarStyle: {
          backgroundColor: '#115E54',
        },
        titleStyle: {
          color: '#FFFFFF',
        },
        backButtonTintColor: '#FFFFFF',
        backTitle: 'Back',
      },
      input: {
        fontSize: 20,
        height: 45
      },
      buttonColor: '#115E54'
    },
    dark: {
      router: {
        navigationBarStyle: {
          backgroundColor: 'black',
        },
        titleStyle: {
          color: '#FFFFFF',
        },
        backButtonTintColor: '#FFFFFF',
        backTitle: 'Back',
      },
      input: {
        fontSize: 20,
        height: 45
      },
      buttonColor: '#115E54'
    },
  };

export const ThemeContext = React.createContext(themes.light);
