
export const fileUpload = async( file ) => {

    /* if ( !file ) throw new Error('No tenemos ninguna archivo a subir'); */

    if ( !file ) return null;

    const cloudUrl = 'https://api.cloudinary.com/v1_1/ddiy604gb/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    
    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !resp.ok ) throw new Error('No se pudo subir imagen')

        const cloudResponse = await resp.json();
        return cloudResponse.secure_url;

    } catch (error) {
        /* console.log(error);
        throw new Error( error.message ); */
        return null;
    }
}; 