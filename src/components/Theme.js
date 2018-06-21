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
      }
    },
    dark: {
      routerHeader: {
        foreground: '#ffffff',
        backgroundColor: 'green',
      },
      sceneStyle: {
        backgroundColor: '#eeeeee',
      }
    },
  };

export const ThemeContext = React.createContext(themes.light);
