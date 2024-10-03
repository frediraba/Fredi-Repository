// Andmekogum nimedega
const namesData = [
  { name: "Mia", gender: "Female", length: 3, country: "Estonia", popularity: "Popular" },
  { name: "Emma", gender: "Female", length: 4, country: "Finland", popularity: "Popular" },
  { name: "Noah", gender: "Male", length: 4, country: "Sweden", popularity: "Popular" },
  { name: "Liam", gender: "Male", length: 4, country: "Germany", popularity: "Popular" },
  { name: "Aria", gender: "Female", length: 4, country: "Estonia", popularity: "Rare" },
  { name: "Leo", gender: "Male", length: 3, country: "Finland", popularity: "Rare" },
  { name: "Elias", gender: "Male", length: 5, country: "Sweden", popularity: "Popular" },
  { name: "Ella", gender: "Female", length: 4, country: "Germany", popularity: "Popular" },
  // Lisatud rohkem näidisnimesid...
];

// Funktsioon nime pikkuse vahemiku liugurite väärtuste kuvamiseks
function updateNameLength() {
  const minLength = document.getElementById("minLength").value;
  const maxLength = document.getElementById("maxLength").value;
  document.getElementById("nameLengthValue").innerText = `${minLength} - ${maxLength}`;
  
  // Veendume, et minLength ei ületa maxLength'i
  if (parseInt(minLength) > parseInt(maxLength)) {
      document.getElementById("minLength").value = maxLength;
  }
  if (parseInt(maxLength) < parseInt(minLength)) {
      document.getElementById("maxLength").value = minLength;
  }
}

// Funktsioon nime genereerimiseks vastavalt valitud kriteeriumitele
function generateName() {
  const gender = document.getElementById("gender").value;
  const minLength = parseInt(document.getElementById("minLength").value);
  const maxLength = parseInt(document.getElementById("maxLength").value);
  const startsWith = document.getElementById("startsWith").value.toLowerCase();
  const country = document.getElementById("country").value;
  const popularity = document.getElementById("popularity").value;

  // Alustame nimefiltriga täies andmekogus
  let filteredNames = namesData;

  // Filtreeri soo järgi
  if (gender !== "Any") {
      filteredNames = filteredNames.filter(name => name.gender === gender);
  }
  // Kasuta nime pikkuse vahemikku
  filteredNames = filteredNames.filter(name => name.length >= minLength && name.length <= maxLength);
  
  // Filtreeri nime algustähe järgi, kui see on määratud
  if (startsWith) {
      filteredNames = filteredNames.filter(name => name.name.toLowerCase().startsWith(startsWith));
  }
  
  // Filtreeri riigi järgi
  if (country !== "Any") {
      filteredNames = filteredNames.filter(name => name.country === country);
  }
  
  // Filtreeri populaarsuse järgi
  if (popularity !== "Any") {
      filteredNames = filteredNames.filter(name => name.popularity === popularity);
  }

  // Kui filtreeritud nimede nimekiri pole tühi, siis kuvame juhusliku nime
  if (filteredNames.length > 0) {
      const randomName = filteredNames[Math.floor(Math.random() * filteredNames.length)];
      document.getElementById("resultBox").innerText = `Soovitatav nimi: ${randomName.name}`;
  } else {
      document.getElementById("resultBox").innerText = "Ei leitud sobivat nime nende kriteeriumite järgi.";
  }

  // Kuvame tulemuse
  document.getElementById("resultBox").style.display = "block";
}
