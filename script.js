
function updateBio() {
    let name = prompt("Enter your name:");
    if (!name) {
        alert("Name cannot be empty!");
        return;
    }
    let profession = prompt("Enter your profession:");
    if (!profession) {
        alert("Profession cannot be empty!");
        return;
    }
    let photoURL = prompt("Enter the URL of your profile photo:");

    alert("Name: " + name + "\nProfession: " + profession);

    console.log("Name: " + name);
    console.log("Profession: " + profession);

    document.getElementById('nameDisplay').innerText = "Name: " + name;
    document.getElementById('professionDisplay').innerText = "Profession: " + profession;

    let photoDisplay = document.getElementById('photoDisplay');
    if (photoURL) {
        photoDisplay.innerHTML = `<img src= ${photoURL} alt= Profile Photo>`;
    } else {
        photoDisplay.innerHTML = "No photo available.";
    }
}
