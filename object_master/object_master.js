const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

console.log("1.");
const divisible_by_3 = pokémon.filter( mon => mon.id % 3 ===0);
console.log(divisible_by_3);


console.log("2.");
const fire_types = pokémon.filter(mon => mon.types[0] === "fire");
console.log(fire_types);


console.log("3.");
const type_exists = pokémon.filter(mon => mon.types.length > 1);
console.log(type_exists);


console.log("4.");
const just_names = pokémon.map(mon => mon.name);
console.log(just_names);


console.log("5.");
const names_more_than_99 = pokémon.filter(mon => mon.id > 99).map(mon => mon.name);
console.log(names_more_than_99);


console.log("6.");
const names_with_poison = pokémon.filter(mon => mon.types[0] === "poison" && mon.types.length === 1 ).map(mon => mon.name);
console.log(names_with_poison);


console.log("7.");
const first_types_of_second_types_flying = pokémon.filter(mon => mon.types[1] === "flying").map(mon => mon.types[0] );
console.log(first_types_of_second_types_flying);


console.log("8.");
const count_of_normal_types = pokémon.filter(mon => mon.types[mon.types.indexOf("normal")]).length;
console.log(count_of_normal_types);