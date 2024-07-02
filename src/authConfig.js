// src/authConfig.js
export const msalConfig = {
    auth: {
        clientId: 'cfb8a528-10ce-4bcd-b677-5cae7c4132d3',
        authority: 'https://login.microsoftonline.com/muraguwamwerugmail.onmicrosoft.com',
        redirectUri: 'http://localhost:5173/'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ['user.read']
};
