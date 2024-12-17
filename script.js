function calculerNote() {
    const reponsesCorrectes = {
        q1: "B",
        q2: "B",
        q3: "B",
        q4: "B",
        q5: "A",
        q6: "C",
        q7: "B",
        q8: "A",
        q9: "A",
        q10: "B",
        q11: "A",
        q12: "B",
    };

    let score = 0;
    const formulaire = document.getElementById("quizz-form");
    let reponsesUtilisateur = {};
    let feedback = "<h3>Vos réponses :</h3><ul>";

    for (let question in reponsesCorrectes) {
        const reponseUtilisateur = formulaire.elements[question].value;
        reponsesUtilisateur[question] = reponseUtilisateur;

        if (reponseUtilisateur === reponsesCorrectes[question]) {
            score++;
            feedback += `<li>Question ${question.slice(1)} : ✅ Correct</li>`;
        } else {
            feedback += `<li>Question ${question.slice(1)} : ❌ Faux (Réponse correcte : ${reponsesCorrectes[question]})</li>`;
        }
    }

    feedback += `</ul><h3>Votre score final : ${score}/12</h3>`;
    document.getElementById("resultat").innerHTML = feedback;
}



// Fonction pour gérer l'envoi du formulaire
function envoyerMessage(event) {
    // Empêcher l'envoi du formulaire classique
    event.preventDefault();

    // Récupérer les valeurs des champs
    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sujet = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Vérifier si tous les champs sont remplis
    if (nom && email && sujet && message) {
        // Afficher une confirmation à l'utilisateur
        alert(`Merci ${nom} !\nVotre message a été envoyé avec succès :\n\nSujet : ${sujet}\nMessage : ${message}`);
        
        // Réinitialiser le formulaire
        document.getElementById("contact-form").reset();
    } else {
        // Si des champs sont vides, afficher un message d'erreur
        alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
    }
}
