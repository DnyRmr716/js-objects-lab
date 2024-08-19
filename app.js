const bulbasaur = { number: 1, name: "Bulbasaur", type: "grass", hp: 45, starter: true };
const charmander = { number: 4, name: "Charmander", type: "fire", hp: 39, starter: true };
const squirtle = { number: 7, name: "Squirtle", type: "water", hp: 44, starter: true };
const wartortle = { number: 8, name: "Wartortle", type: "water", hp: 59, starter: false };
const primeape = { number: 57, name: "Primeape", type: "fighting", hp: 65, starter: false };
const gengar = { number: 94, name: "Gengar", type: "ghost", hp: 60, starter: false };
const magneton = { number: 82, name: "Magneton", type: "electric", hp: 50, starter: false };

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Med",

    catchPokemon(pokemonObj) {
        this.party.push(pokemonObj);
        const pokeballItem = this.items.find(item => item.name === "pokeball");
        if (pokeballItem) {
            pokeballItem.quantity -= 1;
        }
    },

    gymStatus() {
        const gymTally = { completed: 5, incomplete: 3 };

        this.gyms.forEach(gym => {
            if (gym.completed) {
                gymTally.completed += 1;
            } else {
                gymTally.incomplete += 1;
            }
        });

        console.log(gymTally);
    },

    partyCount() {
        return this.party.length;
    }


};

game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

game.party.push(bulbasaur);
game.party.push(charmander);
game.party.push(squirtle);
game.party.push(primeape);
game.party.push(gengar);
game.party.push(magneton);

game.catchPokemon(gengar);

console.log(game.party);

const squirtleIndex = game.party.findIndex(poke => poke.number === 7);

if (squirtleIndex !== -1) {
    game.party.splice(squirtleIndex, 1, wartortle);
}

game.party.forEach(pokemon => {
    console.log(pokemon.name);
});

console.log(game.party);
console.dir(game, { maxArrayLength: null }); 
game.gymStatus();
console.log(`Number of Pokémon in the party: ${game.partyCount()}`);

console.log(game)