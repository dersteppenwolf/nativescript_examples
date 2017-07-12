
tutorials:

-  http://docs.nativescript.org/tutorial/chapter-2
-  http://docs.nativescript.org/tutorial/chapter-3
-  http://docs.nativescript.org/tutorial/chapter-4
-  http://docs.nativescript.org/tutorial/chapter-5
-  http://docs.nativescript.org/tutorial/chapter-6

# NativeScript (Ejemplo 'Groceries') - Conexión con Firebase
En este proyecto se realiza la conexión con Firebase, sobre el proyecto de ejmplo Groceries; se pretende probar la conexión y el funcionamiento Offline

Plugin utilizado
https://github.com/EddyVerbruggen/nativescript-plugin-firebase

## Configuración de Prerrequsitos

Instalar / actualizar plugin
> tns plugin update nativescript-plugin-firebase


**Error:**  *Google Play services is required for this feature, but not available on this device*
> How to download Google Play Services in an Android emulator? https://stackoverflow.com/questions/14536595/how-to-download-google-play-services-in-an-android-emulator
- Installar google play services en el administrador de android sdk / sdk tools
- Crear emulador con una imagen que soporte google play services. Ejemplo Lollipop (android 5.1)
        Google APIs Intel x86 Atom_64 System Image (system-images;android-22;google_apis;x86_64)
        Preparing "Install Google APIs Intel x86 Atom_64 System Image (revision: 14)". ....

Listar emuladores disponibles
>  emulator -list-avds

Ejecutar emulador con google play services
> $ANDROID_HOME/emulator/emulator -avd Nexus_5X_API_21 -netdelay none -netspeed full

Listar los dispositivos que puede utilizar nativescript:
> tns device

## Configuración del proyecto  android

1. Clonar el repositorio "nativescript_examples".
2. Ir a la rama "FirebaseTest"
3. Generar el archivo 'google-services.json'

3.1 Seleccionar agregar otra app (en caso de que no se haya agregado antes aparecen android, ios y web) seleccionar android y se desplegará la ventana donde debe agregarse el nombre del paquete.

![captura1](https://user-images.githubusercontent.com/12984253/28100353-2df5e1d8-6687-11e7-93fe-81b154efbc36.PNG)

 Del archivo package.json (de este directorio) extraer el nombre del paquete (se encuentra en nativescript.id)

3.2 Agregar el nombre del paquete en la siguiente ventana

![captura2](https://user-images.githubusercontent.com/12984253/28100380-45bb38d6-6687-11e7-94e4-16ec39bdf63c.PNG)

Dar clic en 'REGISTRAR APP' con lo que se genera el archivo a ser descargado 'google-services.json'.

4. Correr el comando:
``` bash
tns run android
```
Nota: Se debe contar con un emulador de android corriendo, sobre el cual se realizará la compilación.
      Saldrá un error debido a que no se cuenta con el archivo 'google-services.json'

5. Ubicar el archivo 'google-services.json' en 'platforms/android/'.

6. Del archivo 'google-services.json', extraer la URL de la base de datos; esta se obtiene en el campo project_info.firebase_url.

Y ponerla en el campo "apiUrl" del archivo /app/shared/config.js

7. Correr nuevamente el comando, con lo que ahora debería desplegarse el APP.

8. Se debe registrar el usuario "username@domain.com" con contraseña "password"; esto con el fin de poder usar los datos por defecto en la vista de login.
Para registrar los usuarios con email / password se requiere activar la opción en firebase

Nota: Los cambios en la base de datos se reflejan en tiempo real y se puden observar en el apartado DATABASE de la consola de adminsitración del proyecto en Firebase.

![captura3](https://user-images.githubusercontent.com/12984253/28100385-4eec613c-6687-11e7-94e6-fc0872bca1fd.PNG)
