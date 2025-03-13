document.addEventListener("DOMContentLoaded", function() {
    let visites = [
        { name: "DEL ARTE Brignais", url: "https://scan.avomovr.fr/show/?m=vx1kmMnmxNf", image: "images/brignais.jpg" },
        { name: "DEL ARTE Besançon Miresey", url: "https://scan.avomovr.fr/show/?m=ezeMW1f2zbk", image: "images/besancon.jpg" }
    ];

    const container = document.getElementById("visites-container");
    const shareBtn = document.getElementById("share-btn");
    const selectAllBtn = document.getElementById("select-all-btn");
    const addVisitBtn = document.getElementById("add-visit-btn");

    // 🔹 Fonction pour afficher les visites
    function renderVisites() {
        container.innerHTML = ""; // Effacer les anciennes visites

        visites.forEach((visit, index) => {
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
    }

    // 🔹 Afficher les visites au chargement de la page
    renderVisites();

    // 🔹 Gérer le bouton de partage
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

        let emailLink = `mailto:?subject=Visites Virtuelles&body=${encodeURIComponent(message)}`;
        let smsLink = `sms:?body=${encodeURIComponent(message)}`;

        alert("✅ Vous pouvez maintenant partager les visites par Email ou SMS.");
        window.open(emailLink, "_blank");
        window.open(smsLink, "_blank");
    });

    // 🔹 Gérer le bouton de sélection/désélection de toutes les visites
    selectAllBtn.addEventListener("click", function() {
        let checkboxes = document.querySelectorAll(".visit-checkbox");
        let allChecked = [...checkboxes].every(checkbox => checkbox.checked);

        checkboxes.forEach(checkbox => {
            checkbox.checked = !allChecked;
        });
    });

    // 🔹 Ajouter une nouvelle visite
    addVisitBtn.addEventListener("click", function() {
        const visitName = document.getElementById("visit-name").value.trim();
        const visitUrl = document.getElementById("visit-url").value.trim();
        const visitImage = document.getElementById("visit-image").value.trim();

        if (visitName === "" || visitUrl === "" || visitImage === "") {
            alert("❌ Merci de remplir tous les champs !");
            return;
        }

        // Ajouter à la liste
        visites.push({ name: visitName, url: visitUrl, image: visitImage });

        // Rafraîchir l'affichage
        renderVisites();

        // Vider les champs après l'ajout
        document.getElementById("visit-name").value = "";
        document.getElementById("visit-url").value = "";
        document.getElementById("visit-image").value = "";
    });
});
