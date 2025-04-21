async function ajouter() {
    var CIN_user = document.getElementById("CIN_user").value;
    var Login = document.getElementById("Login").value;
    var Mot_Pass = document.getElementById("Mot_Pass").value;
    var Nom = document.getElementById("Nom").value;
    var Prenom = document.getElementById("Prenom").value;
    var Telephone = document.getElementById("Telephone").value;
    var Sexe = document.getElementById("Sexe").value;
    var Email = document.getElementById("Email").value;
    var Adresse = document.getElementById("Adresse").value;
    var Specialite = document.getElementById("Specialite").value;
    var Niveau = document.getElementById("Niveau").value;
    var Institut = document.getElementById("Institut").value;
    var body = `{
        "CIN_user": "${CIN_user}",
        "Login": "${Login}",
        "pMot_Pass": "${Mot_Passe}",
        "Prenom": "${Prenom}",
        "Telephone": "${Telephone}",
        "Sexe": "${Sexe}",
        "Email": "${Email}",
        "Adresse": "${Adresse}",
        "Specialite": "${Specialite}",
        "Niveau": "${Niveau}",
        "Institut": "${Institut}"
    }`;

    const rep = await fetch("http://127.0.0.1:8000/istic2021/etudiant", {
        method: "POST",
        body: body
    })
    if (rep.ok) {
        rep.json().then((data) => {
            console.log(data)
        })
    }
}
document.getElementById('ajouter').addEventListener('click', ajouter);