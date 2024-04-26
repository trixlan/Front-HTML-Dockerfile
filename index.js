const requestUrl = 'https://quarkus-senasica.apps.cluster-7qrss.7qrss.sandbox2098.opentlc.com/persons';

const options = {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
};

var tableBody = document.getElementById('tbody')

function guardarPersona() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    console.log(JSON.stringify({"nombre": nombre, "apellido": apellido}));
    fetch(requestUrl, 
        {
            method: "POST",
            headers: {"Accept": "application/json",
            "Content-type": "application/json"},
            body: JSON.stringify({"nombre": nombre, "apellido": apellido})
        })
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

function cargarPersonas() {
    fetch(requestUrl, options)
        .then(response => response.json())
        .then(data => {
            data.forEach(person => {
                var row = document.createElement('tr');
    
                var cellNombre = document.createElement('td');
                cellNombre.appendChild(document.createTextNode(person.nombre));
                row.appendChild(cellNombre);
    
                var cellApellido = document.createElement('td');
                cellApellido.appendChild(document.createTextNode(person.apellido));
                row.appendChild(cellApellido);
    
                tableBody.appendChild(row);
            });
        })
        .catch(err => console.log(err));
}

