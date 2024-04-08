class User {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.location = location;
  }
  static isSameAge(user1, user2) {
    return user1.age === user2.age;
  }
}

const person1 = new User("Francesco", "Cristiano", 26, "Napoli");
const person2 = new User("Chiara", "Fais", 22, "Latina");
const person3 = new User("Claudia", "Burali", 25, "Bari");
const person4 = new User("Marco", "Rossi", 26, "Milano");

console.log(User.isSameAge(person1, person2));
console.log(User.isSameAge(person1, person3));
console.log(User.isSameAge(person2, person3));
console.log(User.isSameAge(person1, person4));

let pets = [];
const form = document.getElementById("form");
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;

    pets.push(this);
  }

  static hasSameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  new Pet(petName.value, ownerName.value, species.value, breed.value);
  savePets();

  form.reset();
});

const tbody = document.querySelector("tbody");

const savePets = () => {
  tbody.innerHTML = "";
  pets.forEach((pet, index) => {
    const trPets = document.createElement("tr");
    trPets.innerHTML = `<td>${index + 1}</td> <td>${pet.petName}</td> <td>${
      pet.ownerName
    }</td> <td>${pet.species}</td> <td>${pet.breed}</td>`;

    pets.forEach((otherPet, otherIndex) => {
      if (index !== otherIndex && Pet.hasSameOwner(pet, otherPet)) {
        const tdSameOwner = trPets.querySelectorAll("td")[2];
        tdSameOwner.classList.add("bg-primary");
      }
    });

    tbody.appendChild(trPets);
  });
};


