import games from "./data/games.json";
import gamestemplate from "./templates/games.hbs";


const itemsEls = document.querySelector('.items');
const itemEl = document.querySelector('.item');

itemsEls.innerHTML = gamestemplate({games});
