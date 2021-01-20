// Vamos a trabaja con estos datos, obtenidos y simplificados de jsonplaceholder.typicode.com
/*
Vamos a desglosar un objeto usuario como si fuese una base de datos en tercera forma normal, partimos de un objeto de ejemplo:
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    }

    como se observa cada objeto de tipo user tiene varias propiedades, algunas de ellas son también objetos, como address y company. A su vez address tiene también un objeto que sería geo.

    Lo normal es que esta información esté desglosada en tablas (en nuestro caso listas de objetos) como se muestran a continuación

*/
const users = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "addressId": 1,
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "companyId": 1
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "addressId": 2,
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "companyId": 2
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "addressId": 3,
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "companyId": 3
    }, {
        "id": 4,
        "name": "Kent Allan",
        "username": "Clark",
        "email": "kenny@yahooti.us",
        "addressId": 2,
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "companyId": 3
    }
];

const addresses = [{
    "id": 1,
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geoId": 1
}, {
    "id": 2,
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geoId": 2
}, {
    "id": 3,
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geoId": 3
}];

const geos = [{
    "id": 1,
    "lat": "-37.3159",
    "lng": "81.1496"
}, {
    "id": 2,
    "lat": "-43.9509",
    "lng": "-34.4618"
}, {
    "id": 3,
    "lat": "-68.6102",
    "lng": "-47.0653"
}];


const companies = [{
    "id": 1,
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
}, {
    "id": 2,
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
}, {
    "id": 3,
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
}];


const dameUsuario = (id, cb) => {
    const user = users.find(u => u.id === id);
    if (!user) cb(new Error(`No se encontró el usuario con id ${id}`), null);
    else {
        cb(null, user);
    }
};

const dameDireccion = (user, cb) => {
    const address = addresses.find(a => a.id === user.addressId);
    if (!address) cb(new Error(`No se encontró la dirección del usuario ${user.name}`), null);
    else {
        cb(null, address);
    }
};

const dameGeo = (address, cb) => {
    const geo = geos.find(g => g.id === address.geoId);
    if (!geo) cb(new Error(`No se encontró la localización de la dirección ${address.id}`), null);
    else {
        cb(null, geo);
    }
};

const dameEmpresa = (user, cb) => {
    const company = companies.find(c => c.id === user.companyId);
    if (!company) cb(new Error(`No se encontró la empresa del usuario ${user.name}`), null);
    else {
        cb(null, company);
    }
};


dameUsuario(10, (err, user) => {
    if (err) throw err;
    console.log(user);
});