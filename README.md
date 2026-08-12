# 🎸 Gestión de la Web - Carlitos y Kasty Tour

Este repositorio contiene el código de la página web oficial para la gira. A continuación se explica cómo actualizar los conciertos y los patrocinadores.

## 📅 Cómo añadir un nuevo concierto

1. Haz clic en el archivo llamado `main.js`.
2. Arriba a la derecha del código, haz clic en el **icono del lápiz** para editarlo.
3. Busca la lista llamada `LISTA_CONCIERTOS`.
4. Copia un bloque de fecha entero (desde la llave `{` hasta la llave `}`).
5. Pégalo justo debajo del último concierto. **IMPORTANTE:** Asegúrate de poner una coma `,` al final de la llave del concierto anterior.
6. Cambia los datos entre comillas (año, día, mes, sala, lugar, enlace de compra).
7. Haz scroll hasta abajo del todo y pulsa el botón verde **"Commit changes"**. En unos minutos la web se actualizará sola.

Ejemplo de bloque:
\`\`\`javascript
    {
        anio: "2027",
        dia: "15",
        mes: "mar",
        sala: "Nombre de la Sala",
        lugar: "CIUDAD",
        enlace: "https://link-a-las-entradas.com"
    }
\`\`\`
