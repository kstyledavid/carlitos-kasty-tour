/************************************************************************
 *   PARA LOS CHICOS DEL GRUPO: 
 *   SOLO TENÉIS QUE EDITAR ESTAS LISTAS PARA AÑADIR CONCIERTOS O SPONSORS.
 *   Cuidado con las comas y las comillas.
 ************************************************************************/

const LISTA_CONCIERTOS = [
    {
        anio: "2026",
        dia: "10",
        mes: "oct",
        sala: "Sonica - sold out",
        lugar: "JARDÍN DE LAS ARTES, ZARAGOZA",
        enlace: "https://entradium.com/events/sonica-x-carlos-perez-y-k-style-todo-el-rato-tour"
    },
    {
        anio: "2026",
        dia: "11",
        mes: "oct",
        sala: "Jimmy Jazz",
        lugar: "VITORIA-GASTEIZ",
        enlace: "https://sarrerak.jimmyjazzgasteiz.com/web/?menu=1162&pagina=entradas&item=62741&siteID=jimmyjazz"
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
        enlace: "https://www.salakaya.com/concierto-santander/k-style-y-carlos-perez-santander-noviembre-2026"
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
        enlace: "https://www.fourvenues.com/RAVEOUT500/C2IR"
    },
    {
        anio: "2027",
        dia: "30",
        mes: "ene",
        sala: "247 Technoclub",
        lugar: "GURÚ DANCE CLUB, MURCIA",
        enlace: "https://site.fourvenues.com/es/247-techno-club-null/events/carlitos-y-kasty-todo-el-rato-30-01-2027-QFSD"
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

const PATROCINADORES = [
    // Añade aquí abajo los nombres de los logos con el formato: "nombre-archivo.png",
    
];

/************************************************************************
 *   NO TOCAR NADA DE AQUÍ ABAJO (Lógica del sistema)
 ************************************************************************/

// --- 1. RENDERIZADO DE CONCIERTOS ---
const contenedor = document.getElementById('contenedor-tarjetas');
let anoActual = ""; 

LISTA_CONCIERTOS.sort((a, b) => parseInt(a.anio) - parseInt(b.anio));

if (contenedor) {
    LISTA_CONCIERTOS.forEach(concierto => {
        if (concierto.anio !== anoActual) {
            contenedor.innerHTML += `<h2 class="separador-ano">${concierto.anio}</h2>`;
            anoActual = concierto.anio;
        }

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
        contenedor.innerHTML += tarjetaHTML;
    });
}

// --- 2. RENDERIZADO DE PATROCINADORES ---
const contenedorSponsors = document.getElementById('contenedor-patrocinadores');

if (contenedorSponsors && PATROCINADORES.length > 0) {
    PATROCINADORES.forEach(logo => {
        const imgHTML = `<img src="img/clubs/${logo}" class="sponsor-logo" alt="Patrocinador">`;
        contenedorSponsors.innerHTML += imgHTML;
    });
}

// --- 3. EFECTO PARALLAX EXACTO ---
const fondoAnimado = document.getElementById('fondo-animado');

if (fondoAnimado) {
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        if (maxScroll <= 0) return; 
        
        let porcentaje = scrollTop / maxScroll;
        fondoAnimado.style.transform = `translateY(-${porcentaje * 20}vh)`;
    });
}

// --- 4. GESTIÓN DE COOKIES Y PÍXEL ---
const cookieBanner = document.getElementById('cookie-banner');
const btnAceptar = document.getElementById('btn-aceptar');
const btnRechazar = document.getElementById('btn-rechazar');

const estadoCookies = localStorage.getItem('cookiesAceptadas');

if (!estadoCookies && cookieBanner) {
    cookieBanner.style.display = 'flex';
} else if (estadoCookies === 'true') {
    iniciarPixel();
}

if (btnAceptar) {
    btnAceptar.addEventListener('click', () => {
        localStorage.setItem('cookiesAceptadas', 'true');
        cookieBanner.style.display = 'none';
        iniciarPixel();
    });
}

if (btnRechazar) {
    btnRechazar.addEventListener('click', () => {
        localStorage.setItem('cookiesAceptadas', 'false');
        cookieBanner.style.display = 'none';
    });
}

function iniciarPixel() {
    console.log("Píxel de Meta activado.");
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', '1071552516891676');
    fbq('track', 'PageView');
}
