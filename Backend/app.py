from flask import Flask, request, jsonify
from flask_cors import CORS
from docentes import Docente
from estudiante import estudiante
from setup import setup

app = Flask(__name__)
CORS(app)

#Instancia de la clase setup donde estan los metodos
manager = setup()

#ENDPOINTS
@app.route('/') #Referencia de la primera linea del servidor

#función home para retornar hola
#Los endpoints son las direcciones
#API - ervicio que copntiene un conjunto de direcciones
def home():
    return "<h1>Daaaaaaaaaaaaaaaaaaaaaaavid<h1> <p></p>"

#Consumir la api, acceder a las direcciones.
@app.route ('/docentes')
def Maestro():
    return "<h1>hola docente<h1>"

@app.route ('/estudiante')
def Alumno():
    return "<h1>hola estudiante<h1>" #HAY 3 endpoints

@app.route('/addEstudiante', methods=['POST'])
def addEstudiante():
    datoEstudiante = request.json
    nuevoEstudiante = estudiante(datoEstudiante['nombre:'], datoEstudiante['apellido'], datoEstudiante['carnet'], datoEstudiante['grado'], datoEstudiante['especialidad'], datoEstudiante['edad'], datoEstudiante['correo'])
    if manager.addEstudiante(nuevoEstudiante) == True:
        return '{"estado: Estudiante Agregado"}'
    else:
        return '{"estado: ERROR, el estudiante ya EXISTE"}'
 
@app.route('/addDocente', methods=['POST'])
def addDocente():
    datoDocente = request.json
    nuevoDocente = Docente(datoDocente['nombre'], datoDocente['apellido'], datoDocente['curso'], datoDocente['carnet'], datoDocente['especialidad'], datoDocente['edad'], datoDocente['correo'])
    if manager.addDocente(nuevoDocente)== True:
        return '{"estado: Docente Agregado"}'
    else:
        return '{"estado: ERROR, el docente ya EXISTE"}'

@app.route('/getEstudiantes')
def getEstudiantes():
    return manager.getEstudiate()

@app.route('/getDocentes')
def getDocetes():
    return manager.getDocente()

#Ejecuta el codigo de la API
if __name__ == '__main__':
    app.run(port=5000,debug=True)
