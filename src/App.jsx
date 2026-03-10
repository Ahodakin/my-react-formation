import './App.css'

// Composant principal de l'application
function App() {

  // Objet représentant les informations d'un utilisateur
  const user = {
    name: "Reine",
    email: "reine@gmail.com",
    age: 30,
    hobbies: ["Lecture", "coder", "Musique"],
  };

  // Fonction qui retourne un style CSS en fonction de l'âge
  const getAgeStyle = (age) => {

    // Si l'âge est inférieur à 18 → fond rouge
    if (age < 18) {
      return { background: "red"  }

    // Si l'âge est supérieur à 25 → fond bleu
    } else if (age > 25) {
      return { background: "blue" }

    // Sinon (entre 18 et 25) → fond gris
    } else {
      return { background: "gray" }
    }

  }

  return (
    <>
      {/* Titre de la carte */}
      <h1>Carte d'utilisateur</h1>
FFF
      <div>

        {/* Application du style dynamique selon l'âge */}
        <div style={getAgeStyle(user.age)}>

          {/* Affichage des informations utilisateur */}
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.age}</div>

          {/* Liste des hobbies */}
          <ul>
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>

        </div>

      </div>
    </>
  )
}

export default App