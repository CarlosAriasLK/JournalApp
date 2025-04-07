import { signInWithGoogle, loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout, startCreatingUserWithEmailPassword } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal/journalSlice';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');


describe('Pruebas en authThunks', () => {

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );


    test('Debe de invocar el checkingCredentials', async() => {

        await checkingAuthentication()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );

    });

    test('Debe de llamar el checkingCredentials y login', async() => {

        const loginData = { ok: true, ...demoUser };

        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );        
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );        


    });

    test('startGoogleSignIn Debe de llamar el checkingCredentials y logout con mensaje de error', async() => {

        const logoutData = { ok: false, errorMessage: 'Error en google' };

        await signInWithGoogle.mockResolvedValue( logoutData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );        
        expect( dispatch ).toHaveBeenCalledWith( logout( logoutData.errorMessage ) );        


    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y el login', async() => {

        const loginData = { ok: true, ...demoUser };

        const formData = { email: demoUser.email, password: '123456' };


        await loginWithEmailPassword.mockResolvedValue( loginData );


        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

    });


    test('startLoginWithEmailPassword debe de llamar checkingCredentials y el logout', async() => {

        const logoutData = { ok: false, errorMessage: 'Error en el email' };

        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( logoutData );

        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( logoutData.errorMessage ) );

    });



    test('startCreatingUserWithEmailPassword debe llamar el checkingCredential, el registerUserWithEmailPassword y el login', async() => {

        const loginData = { ok: true, ...demoUser };

        const formData = { email: demoUser.email, password: '12345', displayName: demoUser.displayName };


        await registerUserWithEmailPassword.mockResolvedValue( loginData );

        await startCreatingUserWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( demoUser ) );

    });


    test('startCreatingUserWithEmailPassword debe llamar checkingCredentials y el logout', async() => {

        const logoutData = { ok: false, errorMessage: 'Error en el email' };
        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName }

        await registerUserWithEmailPassword.mockResolvedValue( logoutData );

        await startCreatingUserWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( { errorMessage: logoutData.errorMessage} )  );

    });



    test('startLogout debe de llamar logoutFireBase, clearNotes y logout', async() => {

        await startLogout()( dispatch );

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });



});