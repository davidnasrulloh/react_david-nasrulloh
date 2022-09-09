const findMyPet = (name) => {
    let hewan;
    let indexH;

    myPets.map((pet) => {
        if (name == pet) {
            hewan = name;
            indexH = myPets.indexOf(pet);
        }
    });
    console.log(hewan + " ada diruangan " + indexH);
};

const myPets = ["Ayam", "Ikan", "Iguana", "Kecoak"];

findMyPet("Ikan");

// Ikan kamu ada diruangan 1