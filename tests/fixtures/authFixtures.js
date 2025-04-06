export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',
    uid: '123ASV',
    email: 'car@gmail.com',
    displayName: 'Carlos Arias',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}

export const notAuthenticated = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'ABC123',
    emial: 'demo@google.com',
    displayName: 'DemoUser',
    photoURL: 'https://demo.jpg',
}