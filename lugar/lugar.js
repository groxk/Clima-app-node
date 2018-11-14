const axios = require('axios');


const getLusgarLatLng = async(direccion) => {

    let endcodUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${endcodUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let direccion_lugar = resp.data.results[0].formatted_address;
    let latitud = resp.data.results[0].geometry.location.lat;
    let longitud = resp.data.results[0].geometry.location.lng;
    return {
        direccion: direccion_lugar,
        lat: latitud,
        lng: longitud
    }
}



/*

.then(respuesta => {

        let formatted_address = respuesta.data.results[0].formatted_address;
        let latitud = respuesta.data.results[0].geometry.location.lat;
        let longitud = respuesta.data.results[0].geometry.location.lng;
        console.log(`formatted_address: ${formatted_address}`);
        console.log(`latitud: ${latitud}`);
        console.log(`longitud: ${longitud}`);
        // console.log(JSON.stringify(respuesta.data, undefined, 2));
        // console.log(respuesta.data);
        // console.log(respuesta.status);
    })
    */

module.exports = { getLusgarLatLng }