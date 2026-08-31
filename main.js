/************************************************************************
 *   PARA LOS CHICOS DEL GRUPO: 
 *   SOLO TENÉIS QUE EDITAR ESTA LISTA DE ABAJO PARA AÑADIR CONCIERTOS.
 *   Cuidado con las comas y las comillas.
 ************************************************************************/

const LISTA_CONCIERTOS = [
    {
        anio: "2026",
        dia: "10",
        mes: "oct",
        sala: "Sonica",
        lugar: "JARDÍN DE LAS ARTES, ZARAGOZA",
        enlace: "https://entradium.com/events/sonica-x-carlos-perez-y-k-style-todo-el-rato-tour"
    },
    {
        anio: "2026",
        dia: "11",
        mes: "oct",
        sala: "Jimmy Jazz",
        lugar: "VITORIA-GASTEIZ",
        enlace: "https://www.obrerosdeltechno.com"
    },
    {
        anio: "2026",
        dia: "07",
        mes: "nov",
        sala: "Unity",
        lugar: "SALA ANDÉN 56, BURGOS",
        enlace: "https://www.enterticket.es/eventos/unity-x-carlitos-y-kasty-todo-el-rato-cpxks-790888"
    },
    {
        anio: "2026",
        dia: "28",
        mes: "nov",
        sala: "Sala Kaya",
        lugar: "SANTANDER",
        enlace: "https://www.obrerosdeltechno.com"
    },
    {
        anio: "2026",
        dia: "12",
        mes: "dic",
        sala: "FEVER (Sala Gold)",
        lugar: "BILBAO",
        enlace: "https://www.enterticket.es/eventos/carlitos-y-kasty-todo-el-rato-cpxks-923141"
    },
     {
        anio: "2026",
        dia: "19",
        mes: "dic",
        sala: "Crepúsculo Club",
        lugar: "ENTRADAS DISPONIBLES SÓLO EN TAQUILLA / ALFARO, LA RIOJA",
        enlace: "https://www.obrerosdeltechno.com"
    },
    {
        anio: "2026",
        dia: "25",
        mes: "dic",
        sala: "RaveOut500",
        lugar: "SALA INDEPENDANCE, MADRID",
        enlace: "https://www.obrerosdeltechno.com"
    },
    {
        anio: "2027",
        dia: "30",
        mes: "ene",
        sala: "247 Technoclub",
        lugar: "GURÚ DANCE CLUB, MURCIA",
        enlace: "https://www.obrerosdeltechno.com"
    },
    {
        anio: "2027",
        dia: "27",
        mes: "feb",
        sala: "Peligro Club",
        lugar: "SKY ROOM / PELÍCANO, A CORUÑA",
        enlace: "https://www.fourvenues.com/peligro-club/3IQR"
    }
];

/************************************************************************
 *   NO TOCAR NADA DE AQUÍ ABAJO (Lógica del sistema)
 ************************************************************************/

const contenedor = document.getElementById('contenedor-tarjetas');
let anoActual = ""; 

// Ordenamos la lista por año para evitar errores de escritura
LISTA_CONCIERTOS.sort((a, b) => parseInt(a.anio) - parseInt(b.anio));

LISTA_CONCIERTOS.forEach(concierto => {
    
    // Si el año de este concierto es distinto, metemos el separador visual
    if (concierto.anio !== anoActual) {
        contenedor.innerHTML += `<h2 class="separador-ano">${concierto.anio}</h2>`;
        anoActual = concierto.anio;
    }

    // Definimos la estructura visual (Plantilla)
    const tarjetaHTML = `
        <a href="${concierto.enlace}" target="_blank" class="event-card">
            <div class="event-info">
                <p class="event-date">${concierto.dia} <span>//${concierto.mes}</span></p>
                <h2 class="event-name">${concierto.sala}</h2>
                <p class="event-location">${concierto.lugar}</p>
            </div>
            <div class="ticket-icon-wrapper">
                <svg viewBox="0 0 50 30" class="ticket-svg">
                    <rect x="1" y="1" width="48" height="28" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
                    <line x1="35" y1="1" x2="35" y2="29" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/>
                    <path d="M10 20L20 10M20 10H14M20 10V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </a>
    `;
    
    // Inyectamos la tarjeta en el contenedor
    contenedor.innerHTML += tarjetaHTML;
});


/************************************************************************
 *   EFECTO PARALLAX EXACTO (SIN BORDES NEGROS)
 ************************************************************************/
const fondoAnimado = document.getElementById('fondo-animado');

window.addEventListener('scroll', () => {
    // 1. Píxeles que el usuario ha bajado
    let scrollTop = window.scrollY;
    
    // 2. Máximo scroll posible en todo el documento
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Evitamos dividir por cero si la página fuera muy corta
    if (maxScroll <= 0) return; 
    
    // 3. Calculamos el porcentaje bajado (de 0.0 a 1.0)
    let porcentaje = scrollTop / maxScroll;
    
    // 4. Movemos la imagen un máximo de 20vh hacia arriba
    // (Como la capa mide 120vh, subirla 20vh hace que el fondo quede a ras de la pantalla)
    fondoAnimado.style.transform = `translateY(-${porcentaje * 20}vh)`;
});
