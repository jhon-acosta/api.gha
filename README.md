# api.gha

Servidor con github actions para ci/cd

### Detalles

- Se debe de crear la carpeta de `.github/workflows/<archivos>.yml`
- Dentro del archivo [compilar-publicar.yml](https://github.com/jhon-acosta/api.gha/blob/main/.github/workflows/compilar-publicar.yml) se encuentra la lógica de compilación y publicación de la imagen de ghcr.io.
- Se requiere generar un token para poder iniciar sesión en [ghcr.io](ghcr.io), dirigirse a https://github.com/settings/tokens/new , marcar `write:packages` para poder poder realizar al escritura de paquetes.
- Una vez generado el token, crear un secreto dentro del reporstorio `Settings/Secrets and variables` para ser usado dentro `worflow` respectivo
- Para ejecutar este flujo de trabajo manualmente, ir a la pestaña "Actions" dentro del repositorio, seleccionar el flujo de trabajo que se a definido y hacer clic en el botón "Run workflow". Ahí se podrá seleccionar la rama de compilación
