exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: "Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.", recipe_id: 1},
    {step_number: 2, instructions: "Set aside for 30 mins to rest if you have time, or start cooking straight away.", recipe_id: 1},
    {step_number: 3, instructions: "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.", recipe_id: 1},
    {step_number: 4, instructions: "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.", recipe_id: 1},
  ]);
};
