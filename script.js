document.addEventListener("DOMContentLoaded", function() {
    const visites = [
        { name: "DEL ARTE Brignais", url: "https://scan.avomovr.fr/show/?m=vx1kmMnmxNf", image: "images/brignais.jpg" },
        { name: "DEL ARTE Besançon Miresey", url: "https://scan.avomovr.fr/show/?m=ezeMW1f2zbk", image: "images/besancon.jpg" },
        { name: "Pépinière d'entreprise de Châteauroux", url: "https://scan.avomovr.fr/show/?m=rVThqrE36Hq", image: "images/pepiniere.jpg" },
        { name: "Projet gîtes et studio", url: "https://scan.avomovr.fr/show/?m=JsatGWhhCJW", image: "images/gites.jpg" },
        { name: "Foyer de vie Les Coteaux", url: "https://scan.avomovr.fr/show/?m=hG1a9Aht5Bp", image: "images/coteaux.jpg" },
        { name: "L’Onglerie Le Porge", url: "https://scan.avomovr.fr/show/?m=jFrmbGsawT3", image: "images/onglerie.jpg" },
        { name: "Eat Salad Châteauroux", url: "https://scan.avomovr.fr/show/?m=2fmziQUEHv7", image: "images/eatsalad.jpg" },
        { name: "Château Boisrenault", url: "https://scan.avomovr.fr/show/?m=ctqEDeSd8ke", image: "images/boisrenault.jpg" },
        { name: "Business Connect Day", url: "https://scan.avomovr.fr/show/?m=6oT8c8mfPoL", image: "images/businessconnect.jpg" },
        { name: "Relais Saint-Jacques", url: "https://scan.avomovr.fr/show/?m=eJpk7Qt2wTR", image: "images/relaissaintjacques.jpg" }
    ];

    const container = document.getElementById("visites-container");

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

    document.getElementById("share-btn").addEventListener("click", function() {
        let selectedVisits = [];
        document.querySelectorAll(".visit-checkbox:checked").forEach((checkbox) => {
            selectedVisits.push(checkbox.value);
        });

        if (selectedVisits.length === 0) {
            alert("Veuillez sélectionner au moins une visite à partager.");
            return;
        }

        let message = "Voici les visites virtuelles sélectionnées :\n" + selectedVisits.join("\n");

        let emailLink = `mailto:?subject=Visites Virtuelles&body=${encodeURIComponent(message)}`;
        let smsLink = `sms:?body=${encodeURIComponent(message)}`;

        alert("Vous pouvez maintenant partager les visites par Email ou SMS.");

        window.open(emailLink, "_blank");
        window.open(smsLink, "_blank");
    });
});
