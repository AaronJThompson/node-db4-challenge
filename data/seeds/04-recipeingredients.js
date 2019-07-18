exports.seed = function(knex) {
  return knex('RecipeIngredients').insert([
    {ingredient_id: 1, recipe_id: 1, quantity: 100},
    {ingredient_id: 2, recipe_id: 1, quantity: 2},
    {ingredient_id: 3, recipe_id: 1, quantity: 300},
    {ingredient_id: 4, recipe_id: 1, quantity: 1},
  ]);
};
