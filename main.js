// Highlight the current active link
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.social-icons a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errorMessages = '';
    try {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const file = document.getElementById('file').files[0];

        if (!name) throw 'Le nom est requis.';
        if (!phone) throw 'Le téléphone est requis.';
        if (!email) throw 'L\'email est requis.';
        if (!message) throw 'Le message est requis.';
        if (file && file.size > 1048576) throw 'Le fichier ne doit pas dépasser 3 Mo.';

        alert('Formulaire soumis avec succès !');
    } catch (error) {
        errorMessages += `<p>${error}</p>`;
    } finally {
        document.getElementById('errorMessages').innerHTML = errorMessages;
    }
});

// Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Faire défiler vers le haut lorsque l'utilisateur clique sur le bouton
document.getElementById("back-to-top").onclick = function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path/CV.pdf'; 
    link.download = 'Mon_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Sélectionner le bouton
const toggleButton = document.getElementById('dark-mode-toggle');

// Vérifier le mode actuel dans localStorage (si déjà défini)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Mode Clair';
}

// Écouter le clic sur le bouton pour changer le thème
toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    // Changer le texte du bouton en fonction du mode actuel
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Mode Clair';
        localStorage.setItem('theme', 'dark');  // Enregistrer le thème
    } else {
        toggleButton.textContent = 'Mode Sombre';
        localStorage.setItem('theme', 'light');  // Enregistrer le thème
    }
});


