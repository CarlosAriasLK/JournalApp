import { signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn } from '../../../src/store/auth/thunks';
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



});