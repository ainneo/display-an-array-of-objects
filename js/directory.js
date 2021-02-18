const main = document.querySelector('main')
let html = ''; //init emtpy string to loop and append 

for(let i = 0; i < pets.length; i++){
	let pet = pets[i];
	html += `
<h2>${pet.name}</h2>
<h3>${pet.type} | ${pet.breed}</h3>
<img src="${pet.photo}" alt="${pet.breed}">
`;
}
//console.log(html) //test
//renders data to DOM
main.insertAdjacentHTML('beforeend', html);