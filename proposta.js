const content = {
    en: {
        nav: ["About Us", "Services", "Fleet", "Shipments", "P.O. BOX", "Contact"],
        about: "We are a logistics and transportation company committed to fast, safe and reliable deliveries.",
        services: "We offer national and international shipping, express delivery, and secure storage solutions.",
        fleet: "Our fleet includes modern trucks, vans, and cargo vehicles designed for all shipping needs.",
        shipments: "Track and manage your shipments with our efficient system, ensuring transparency and speed.",
        pobox: "Open your P.O. BOX with us and enjoy a reliable, secure and fast way to receive your packages.",
        contact: "Get in touch with us for quotes, support or partnerships.",
        formTitle: "Open Your P.O. BOX",
        formFields: ["Full Name", "Email", "Phone", "Address", "City", "Country"],
        submit: "Create Account"
    },
    es: {
        nav: ["Quiénes Somos", "Servicios", "Flota", "Envíos", "P.O. BOX", "Contacto"],
        about: "Somos una empresa de logística y transporte comprometida con entregas rápidas, seguras y confiables.",
        services: "Ofrecemos envíos nacionales e internacionales, entregas exprés y soluciones de almacenamiento seguro.",
        fleet: "Nuestra flota incluye camiones modernos, furgonetas y vehículos de carga para todas las necesidades de envío.",
        shipments: "Rastree y gestione sus envíos con nuestro sistema eficiente, asegurando transparencia y rapidez.",
        pobox: "Abra su P.O. BOX con nosotros y disfrute de una forma confiable, segura y rápida de recibir sus paquetes.",
        contact: "Póngase en contacto con nosotros para cotizaciones, soporte o asociaciones.",
        formTitle: "Abra su P.O. BOX",
        formFields: ["Nombre Completo", "Correo Electrónico", "Teléfono", "Dirección", "Ciudad", "País"],
        submit: "Crear Cuenta"
    }
};

const langSelect = document.getElementById("lang-select");
const navLinks = document.getElementById("nav-links");

function updateLanguage(lang) {
    const t = content[lang];

    // Navbar
    navLinks.innerHTML = "";
    t.nav.forEach((item, i) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => document.getElementById(Object.keys(content.en)[i]).scrollIntoView({ behavior: "smooth" });
        navLinks.appendChild(li);
    });

    // Textos
    document.getElementById("about-title").textContent = t.nav[0];
    document.getElementById("about-text").textContent = t.about;

    document.getElementById("services-title").textContent = t.nav[1];
    document.getElementById("services-text").textContent = t.services;

    document.getElementById("fleet-title").textContent = t.nav[2];
    document.getElementById("fleet-text").textContent = t.fleet;

    document.getElementById("shipments-title").textContent = t.nav[3];
    document.getElementById("shipments-text").textContent = t.shipments;

    document.getElementById("pobox-title").textContent = t.nav[4];
    document.getElementById("pobox-text").textContent = t.pobox;
    document.getElementById("form-title").textContent = t.formTitle;

    // Formulário
    const form = document.getElementById("pobox-form");
    form.innerHTML = "";
    t.formFields.forEach(field => {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = field;
        form.appendChild(input);
    });
    const button = document.createElement("button");
    button.textContent = t.submit;
    form.appendChild(button);

    document.getElementById("contact-title").textContent = t.nav[5];
    document.getElementById("contact-text").textContent = t.contact;
}

// Trocar idioma
langSelect.addEventListener("change", e => updateLanguage(e.target.value));

// Inicialização
updateLanguage("en");
