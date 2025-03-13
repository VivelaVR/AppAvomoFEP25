const visites = [
    { nom: "DEL ARTE Brignais", url: "https://scan.avomovr.fr/show/?m=vx1kmMnmxNf" },
    { nom: "DEL ARTE Besançon Miresey", url: "https://scan.avomovr.fr/show/?m=ezeMW1f2zbk" },
    { nom: "Pépinière d'entreprise de Châteauroux", url: "https://scan.avomovr.fr/show/?m=rVThqrE36Hq" },
    { nom: "Projet gîtes et studio", url: "https://scan.avomovr.fr/show/?m=JsatGWhhCJW" },
    { nom: "Foyer de vie Les Coteaux", url: "https://scan.avomovr.fr/show/?m=hG1a9Aht5Bp" },
    { nom: "L’Onglerie Le Porge", url: "https://scan.avomovr.fr/show/?m=jFrmbGsawT3" },
    { nom: "Eat Salad Châteauroux", url: "https://scan.avomovr.fr/show/?m=2fmziQUEHv7" },
    { nom: "Château Boisrenault", url: "https://scan.avomovr.fr/show/?m=ctqEDeSd8ke" },
    { nom: "Business Connect Day", url: "https://scan.avomovr.fr/show/?m=6oT8c8mfPoL" },
    { nom: "Relais Saint-Jacques", url: "https://scan.avomovr.fr/show/?m=eJpk7Qt2wTR" },
    { nom: "Guinguette de Belle Isle", url: "https://scan.avomovr.fr/show/?m=iQdBAz3k3fL" },
    { nom: "Jardin Les Cordeliers", url: "https://mpembed.com/show/?m=ozBLfab5XSQ&mpu=1624&premium=1" },
    { nom: "Del Arte Dorlisheim", url: "https://scan.avomovr.fr/show/?m=EKgDks7kdr5" },
    { nom: "Franchise Expo Paris 2024", url: "https://mpembed.com/show/?m=tNyTLiWHcFp&mpu=1624" },
    { nom: "DEL ARTE LIBOURNE", url: "https://mpembed.com/show/?m=zca9WQuh75g&mpu=1624" },
    { nom: "La Varrière", url: "https://scan.avomovr.fr/show/?m=M4CL8xbdnaK" },
    { nom: "Église Saint André", url: "https://mpembed.com/show/?m=fTmxbygCkQX&mpu=1624" }
];

// Génération de l'accueil
if (document.getElementById("visites-container")) {
    const container = document.getElementById("visites-container");
    visites.forEach(visite => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<a href="visite.html?url=${encodeURIComponent(visite.url)}&nom=${encodeURIComponent(visite.nom)}">
                            <div class="card-img" style="background-image: url('images/logo.png');"></div>
                            <p>${visite.nom}</p>
                         </a>`;
        container.appendChild(div);
    });
}

// Génération des pages de visites
if (document.getElementById("visite-iframe")) {
    const params = new URLSearchParams(window.location.search);
    const url = params.get("url");
    const nom = params.get("nom");
    
    if (url && nom) {
        document.getElementById("title").innerText = nom;
        document.getElementById("visite-title").innerText = nom;
        document.getElementById("visite-iframe").src = url;
        document.getElementById("external-link").href = url;
    } else {
        document.body.innerHTML = "<h1>Visite introuvable</h1>";
    }
}
