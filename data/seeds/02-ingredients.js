exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'grams of flour'},
    {ingredient_name: 'large eggs'},
    {ingredient_name: 'ml of milk'},
    {ingredient_name: 'tbsp sunflower oil'},
    {ingredient_name: 'slices of bread'},
    {ingredient_name: 'strips of bacon'},
    {ingredient_name: 'leaves of lettuce'},
    {ingredient_name: 'slices of tomato'},
  ]);
};
