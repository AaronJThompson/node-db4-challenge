const knex = require('knex');
const db = knex(require('../knexfile').development);

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db
        .select(['ingredients.ingredient_name', 'quantity'])
        .from('RecipeIngredients')
        .join('ingredients', 'RecipeIngredients.ingredient_id', 'ingredients.id')
        .where({ 'RecipeIngredients.recipe_id': Number(id) });
}

function getInstructions(id) {
    return db('steps')
        .where({ recipe_id: Number(id)});
}