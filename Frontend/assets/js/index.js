function addEstudiante() {
  var carnet = document.getElementById("carnet").value;
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var grado = document.getElementById("grado").value;
  var especialidad = document.getElementById("especialidad").value;
  var correo = document.getElementById("correo").value;
  var edad = document.getElementById("edad").value;
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  fetch('http://127.0.0.1:5000/addEstudiante', {
    method: 'POST',
    headers,
    body: `{
      "carnet": "${carnet}",
      "nombre": "${nombre}",
      "apellido": "${apellido}",
      "grado": "${grado}",
      "especialidad": "${especialidad}",
      "correo": "${correo}",
      "edad": "${edad}"}`,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("Estudiante agregado con éxito");
      location.reload();
    })
    .catch(error => console.log(error));
}


function addDocente() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var curso = document.getElementById("curso").value;
  var carnet = document.getElementById("carnet").value;
  var especialidad = document.getElementById("especialidad").value;
  var edad = document.getElementById("edad").value;
  var correo = document.getElementById("correo").value;
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  fetch('http://127.0.0.1:5000/addDocente', {
    method: 'POST',
    headers,
    body: `{
      "carnet": "${carnet}",
      "nombre": "${nombre}",
      "apellido": "${apellido}",
      "curso": "${curso}",
      "especialidad": "${especialidad}",
      "correo": "${correo}",
      "edad": "${edad}"}`,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("Docente agregado con éxito");
      location.reload();
    })
    .catch(error => console.log(error));
}