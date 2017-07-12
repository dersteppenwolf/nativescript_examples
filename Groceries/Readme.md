
tutorials:

  http://docs.nativescript.org/tutorial/chapter-2
  http://docs.nativescript.org/tutorial/chapter-3
  http://docs.nativescript.org/tutorial/chapter-4
  http://docs.nativescript.org/tutorial/chapter-5
  http://docs.nativescript.org/tutorial/chapter-6

# NativeScript (Ejemplo 'Groceries') - Conexión con Firebase
En este proyecto se realiza la conexión con Firebase, sobre el proyecto de ejmplo Groceries; se pretende probar la conexión y el funcionamiento Offline 

## Configuración de Prerrequsitos 

## Configuración del proyecto

1. Clonar el repositorio "nativescript_examples".
2. Ir a la rama "FirebaseTest"
3. Generar el archivo 'google-services.json' 

3.1 Seleccionar agregar otra app (en caso de que no se haya agregado antes aparecen android, ios y web) seleccionar android y se desplegará la ventana donde debe agregarse el nombre del paquete.

![Captura](readme_images/captura1.png) 

 Del archivo package.json (de este directorio) extraer el nombre del paquete (se encuentra en nativescript.id)

3.2 Agregar el nombre del paquete en la siguiente ventana

![Captura2](readme_images/captura2.png)

Dar clic en 'REGISTRAR APP' con lo que se genera el archivo a ser descargado 'google-services.json'.

4. Correr el comando:
``` bash
tns run android
```
Nota: Se debe contar con un emulador de android corriendo, sobre el cual se realizará la compilación.
      Saldrá un error debido a que no se cuenta con el archivo 'google-services.json'
      
5. Ubicar el archivo 'google-services.json' en 'platforms/android/'.

6. Del archivo 'google-services.json', extraer la URL de la base de datos; esta se obtiene en el campo project_info.project_id.

Y ponerla en el campo "apiUrl" del archivo /app/shared/config.js

7. Correr nuevamente el comando, con lo que ahora debería desplegarse el APP.

8. Se debe registrar el usuario "username@domain.com" con contraseña "password"; esto con el fin de poder usar los datos por defecto en la vista de login.

Nota: Los cambios en la base de datos se reflejan en tiempo real y se puden observar en el apartado DATABASE de la consola de adminsitración del proyecto en Firebase.

![Captura3](readme_images/captura3.png)