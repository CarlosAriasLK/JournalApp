import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'ddiy604gb',
    api_key: '391564884684438',
    api_secret: 'IU1HE7xduzEuiGJaJaLObtBDb2I',
    secure: true
});

describe('Pruebas en fileUpload', () => {


    test('Debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s';        
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File( [blob], 'foto.jpg' );
        /* const url = await fileUpload( file ); */

        expect( typeof url ).toBe( 'string' );

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
        const cloudResp = await cloudinary.api.delete_resources([ `journal/${ imageId }` ], {
            resource_type: 'image'
        });

        console.log({cloudResp})

    });

    test('Debe de retornar null', async() => {

        const file = new File( [], 'foto.jpg' );
        const url = await fileUpload( file );
        expect( url ).toBe( null );
    });



});