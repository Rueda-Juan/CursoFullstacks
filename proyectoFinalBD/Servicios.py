import sqlite3
from proyectoFinalBD.CRUD_Usuario import (
    crear_usuario,
    obtener_usuario,
    obtener_usuario_por_correo
)
from proyectoFinalBD.CRUD_Tarea import (
    crear_tarea,
    obtener_tarea,
    obtener_tareas_por_usuario,
    actualizar_tarea,
    eliminar_tarea
)
from sqlite3 import IntegrityError
from sqlite3 import Error

def login(conn):
    print("\n=== Inicio de sesión ===")
    correo = input("Correo: ").strip()
    contraseña = input("Contraseña: ").strip()

    usuario = verificar_credenciales(conn, correo, contraseña)
    if usuario:
        print(f"\n¡Bienvenido {usuario[2]}!\n")  # usuario[2] = nombre
        return usuario[0]  # usuario[0] = id_usuario
    else:
        print("\n Credenciales incorrectas.\n")
        return None

def verificar_credenciales(conn, correo, contraseña):
    usuario = obtener_usuario_por_correo(conn, correo)
    if usuario is not None:
        if usuario[3] == contraseña:  # usuario[3] = contraseña
            return usuario
    return None


def registrar(conn):
    print("\n=== Registro de nuevo usuario ===")
    correo = input("Correo: ").strip()
    nombre = input("Nombre: ").strip()
    contraseña = input("Contraseña: ").strip()

    try:
        id_usuario = crear_usuario(conn, correo, nombre, contraseña)
        if id_usuario:
            print(" Usuario registrado exitosamente. Puedes iniciar sesión ahora.")
        else:
            print(" No se pudo registrar el usuario.")
    except IntegrityError:
        print(" El correo ya está registrado. Intenta con otro.")