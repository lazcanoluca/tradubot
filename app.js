const Reverso = require('reverso-api');
const reverso = new Reverso();

async function traducir( texto, de_leng = 'Spanish', a_leng = 'English' ) {
    reverso.getTranslation(texto, de_leng, a_leng, (response) => {
        console.log(response.translation[0]);
        // console.log(response);
    }).catch((err) => {
        console.error(err);
    });

}

traducir('Holaaa');
