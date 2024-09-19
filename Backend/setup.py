#LOGICA de los procesos DE LA API

#Importar las otras clases
from estudiante import estudiante
#  nombre de archivo     nombre de la clase
from docentes import Docente
import json

#DATO QUEMADO -> dato que va a quedar escrito en el codigo (predeterminado)

#clase llamada setup
class setup:
    
    def __init__(self):
        #pass - palabra que hace que tiene contenido, no sirve para nada
        #solo para evitar el error de tener constructor vacio
    #listas enlazadas
        self.estudiantes = []
        self.docentes = []
        self.estudiantes.append(estudiante("202401194", "Estudiante", "Modelo", "5to.", "Computacion", 17, "estudiante@emilianisomascos.edu.gt"))
        self.docentes.append(Docente("Docente", "Modelo", "MATEMATICAS", "202410698", "cOMPUTACION", 29, "docente@emilianisomascos.edu.gt" ))



    def addEstudiante(self, estudianteX):
        if not self.VerificarEstudiante(estudianteX):
            #Agregar estudiante
            self.estudiantes.append(estudianteX)
            print("Estudiante agregado ("+estudianteX.carnet+")")
            return True
        else:
            # ERROR, ya hay un estudiante cn este carnet
            print ("Este Carnet ya está registrado")
            return False

    def addDocente(self, docenteX):
        if not self.VerficarDocente(docenteX):
            #Agregar Docente
            self.docentes.append(docenteX)
            print ("Docente Agregado ("+docenteX.carnet+")")
            return True
        else:
            #ERROR, ya existe un docente con este carnet
            print("Este carnet ya esta registrado")
            return False
            
    def VerificarEstudiante(self, estudianteX):
        for i in self.estudiantes:
            if i.carnet == estudianteX.carnet:
                return True
        return False

    def VerficarDocente(self, docenteX):
        for i in self.docentes:
            if i.carnet == docenteX.carnet:
                return True
        return False

    def getEstudiantes(self):
        #retornar todos los elementos
        return json.dumps([ob.__dict__ for ob in self.estudiantes])

    def getDocentes(self):
        #retornar todos los elementos
        return json.dumps([ob2.__dict__ for ob2 in self.docentes])