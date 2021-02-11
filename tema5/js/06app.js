/*fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error));
*/
/*

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId354: 134556
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((res) => console.log(res));

    */


/*
fetch('https://httpbin.org/ip')
    .then(response => response.text())
    .then(data => console.log('data = ', data))
    .catch(console.error);
    */
/*
const objeto = { "a": 1, "b": 2, "c": 'hola' };

fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    })
    .then(response => {
        console.log('response =', response);
        return response.json();
    })
    .then(data => console.log('data = ', data))
    .catch(console.error);

    */

var dataSend = new FormData();
dataSend.append('a', '1');
dataSend.append('b', '2');
var request = new Request('https://httpbin.org/put', {
    method: 'PUT',
    body: dataSend
});
console.log('request =', request);
for (var k of dataSend.keys()) {
    console.log('dataSend.get("' + k + '") =', dataSend.get(k));
}
fetch(request)
    .then(response => {
        console.log('response =', response);
        return response.json();
    })
    .then(data => console.log('data = ', data))
    .catch(console.error);