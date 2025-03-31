import { fileUpload } from "../../src/helpers/fileUpload";


describe('Pruebas en fileUpload', () => {


    test('Debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s';        
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File( [blob], 'foto.jpg' );
        console.log(file);

        /* const url = await fileUpload( file ); */

        expect( typeof url ).toBe( 'string' );

    });

});