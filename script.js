document.addEventListener("DOMContentLoaded", function() {
    const visites = [
        { name: "DEL ARTE Brignais", url: "https://scan.avomovr.fr/show/?m=vx1kmMnmxNf", image: "images/brignais.jpg" },
        { name: "DEL ARTE Besançon Miresey", url: "https://scan.avomovr.fr/show/?m=ezeMW1f2zbk", image: "images/besancon.jpg" },
        { name: "Pépinière d'entreprise de Châteauroux", url: "https://scan.avomovr.fr/show/?m=rVThqrE36Hq", image: "images/pepiniere.jpg" },
        { name: "Foyer de vie Les Coteaux", url: "https://scan.avomovr.fr/show/?m=hG1a9Aht5Bp", image: "images/coteaux.jpg" },
        { name: "L’Onglerie Le Porge", url: "https://scan.avomovr.fr/show/?m=jFrmbGsawT3", image: "images/onglerie.jpg" },
        { name: "Eat Salad Châteauroux", url: "https://scan.avomovr.fr/show/?m=2fmziQUEHv7", image: "images/eatsalad.jpg" },
        { name: "Château Boisrenault", url: "https://scan.avomovr.fr/show/?m=ctqEDeSd8ke", image: "images/boisrenault.jpg" },
        { name: "Business Connect Day", url: "https://scan.avomovr.fr/show/?m=6oT8c8mfPoL", image: "images/businessconnect.jpg" },
        { name: "Relais Saint-Jacques", url: "https://scan.avomovr.fr/show/?m=eJpk7Qt2wTR", image: "images/relaissaintjacques.jpg" },
        { name: "Netto Montauban", url: "https://scan.avomovr.fr/show/?m=S3kVSigxpRF", image: "images/netto.jpg" },
        { name: "Roady Montgiscar", url: "https://scan.avomovr.fr/show/?m=yd6xFLUDMuD", image: "images/roady.jpg" },
        { name: "Guinguette de Belle Isle", url: "https://scan.avomovr.fr/show/?m=iQdBAz3k3fL", image: "images/guinguette.jpg" },
        { name: "Jardin Les Cordeliers", url: "https://mpembed.com/show/?m=ozBLfab5XSQ&mpu=1624&premium=1", image: "images/cordeliers.jpg" },
        { name: "Del Arte Dorlisheim", url: "https://scan.avomovr.fr/show/?m=EKgDks7kdr5", image: "images/dorlisheim.jpg" },
        { name: "Franchise Expo Paris 2024", url: "https://mpembed.com/show/?m=tNyTLiWHcFp&mpu=1624", image: "images/franchiseexpo.jpg" },
        { name: "DEL ARTE LIBOURNE", url: "https://mpembed.com/show/?m=zca9WQuh75g&mpu=1624", image: "images/libourne.jpg" },
        { name: "La Varrière", url: "https://scan.avomovr.fr/show/?m=M4CL8xbdnaK", image: "images/varriere.jpg" },
        { name: "Église Saint André", url: "https://mpembed.com/show/?m=fTmxbygCkQX&mpu=1624", image: "images/saintandre.jpg" }
    ];

    const container = document.getElementById("visites-container");
    const shareBtn = document.getElementById("share-btn");

    visites.forEach(visit => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <input type="checkbox" class="visit-checkbox" value="${visit.url}">
            <a href="${visit.url}" target="_blank">
                <div class="card-img" style="background-image: url('${visit.image}');"></div>
                <p>${visit.name}</p>
            </a>
        `;
        container.appendChild(card);
    });

    shareBtn.addEventListener("click", function() {
        let selectedVisits = [];
        document.querySelectorAll(".visit-checkbox:checked").forEach((checkbox) => {
            selectedVisits.push(checkbox.value);
        });

        if (selectedVisits.length === 0) {
            alert("❌ Veuillez sélectionner au moins une visite à partager.");
            return;
        }

        let message = "🌐 Voici les visites virtuelles sélectionnées :\n" + selectedVisits.join("\n");

        let choice = prompt("📤 Comment souhaitez-vous partager les visites ?\n1️⃣ Gmail\n2️⃣ SMS\n3️⃣ LinkedIn\n\nEntrez le numéro de votre choix :");

        if (choice === "1") {
            let emailLink = `mailto:?subject=Visites Virtuelles&body=${encodeURIComponent(message)}`;
            window.open(emailLink, "_blank");
        } 
        else if (choice === "2") {
            let smsLink = `sms:?body=${encodeURIComponent(message)}`;
            window.open(smsLink, "_blank");
        } 
        else if (choice === "3") {
            let linkedInLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(selectedVisits.join("\n"))}&title=Visites%20Virtuelles&summary=${encodeURIComponent(message)}`;
            window.open(linkedInLink, "_blank");
        } 
        else {
            alert("❌ Choix invalide. Veuillez entrer 1, 2 ou 3.");
        }
    });
});
