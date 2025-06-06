import sqlite3
import BD
#USUARIO
conexion = sqlite3.connect("DbUsuario.db")

cursor = conexion.cursor()

#CREATE
def crear_usuario(conn, correo, nombre, contraseña):
  sql = '''INSERT INTO Usuario(correo, nombre, contraseña)
            VALUES(?,?,?)'''
  try:
      cursor = conn.cursor()
      cursor.execute(sql, (correo, nombre, contraseña))
      conn.commit()
      return cursor.lastrowid
  except Error as e:
      print(f"Error al crear usuario: {e}")
  return None

#READ
def obtener_usuario(conn, Id_usuario):
  sql = "SELECT * FROM Usuario WHERE Id_usuario = ?"
  try:
      cursor = conn.cursor()
      cursor.execute(sql, (Id_usuario,))
      return cursor.fetchone()
  except Error as e:
      print(f"Error al obtener usuario: {e}")
  return None

#UPDATE
def actualizar_usuario(conn, Id_usuario, correo=None, nombre=None, contraseña=None):
  updates = []
  params = []
  
  if correo:
      updates.append("correo = ?")
      params.append(correo)
  if nombre:
      updates.append("nombre = ?")
      params.append(nombre)
  if contraseña:
      updates.append("contraseña = ?")
      params.append(contraseña)
      
  if not updates:
      return False
      
  params.append(Id_usuario)
  sql = f"UPDATE Usuario SET {','.join(updates)} WHERE Id_usuario = ?"
  
  try:
      cursor = conn.cursor()
      cursor.execute(sql, params)
      conn.commit()
      return cursor.rowcount > 0
  except Error as e:
      print(f"Error al actualizar usuario: {e}")
  return False
  
#DELETE
def eliminar_usuario(conn, Id_usuario):
  sql = "DELETE FROM Usuario WHERE Id_usuario = ?"
  try:
      cursor = conn.cursor()
      cursor.execute(sql, (Id_usuario,))
      conn.commit()
      return cursor.rowcount > 0
  except Error as e:
      print(f"Error al eliminar usuario: {e}")
  return False
