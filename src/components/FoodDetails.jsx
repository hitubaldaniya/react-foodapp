import React, { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_key = "a32c8e13c8b34c0dbe6d0f8221cea14d";
  const [food, setFood] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${url}?apiKey=${api_key}`);
      const data = await result.json();
      console.log(data);
      const data1 = {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        lowFodmap: false,
        weightWatcherSmartPoints: 20,
        gaps: "no",
        preparationMinutes: null,
        cookingMinutes: null,
        aggregateLikes: 0,
        healthScore: 7,
        creditsText: "pinkwhen.com",
        sourceName: "pinkwhen.com",
        pricePerServing: 280.78,
        extendedIngredients: [
          {
            id: 1011,
            aisle: "Cheese",
            image: "colby-jack.jpg",
            consistency: "SOLID",
            name: "colby jack cheese",
            nameClean: "colby jack",
            original: "4 oz colby jack cheese, shredded",
            originalName: "colby jack cheese, shredded",
            amount: 4,
            unit: "oz",
            meta: ["shredded"],
            measures: {
              us: {
                amount: 4,
                unitShort: "oz",
                unitLong: "ounces",
              },
              metric: {
                amount: 113.398,
                unitShort: "g",
                unitLong: "grams",
              },
            },
          },
          {
            id: 43274,
            aisle: "Cheese",
            image: "cream-cheese.jpg",
            consistency: "SOLID",
            name: "cream cheese",
            nameClean: "reduced fat cream cheese",
            original:
              "3 oz. of cream cheese, at room temperature, regular, light, or fat free",
            originalName:
              "cream cheese, at room temperature, regular, light, or fat free",
            amount: 3,
            unit: "oz",
            meta: ["light", "fat free", "at room temperature"],
            measures: {
              us: {
                amount: 3,
                unitShort: "oz",
                unitLong: "ounces",
              },
              metric: {
                amount: 85.049,
                unitShort: "g",
                unitLong: "grams",
              },
            },
          },
          {
            id: 1022020,
            aisle: "Spices and Seasonings",
            image: "garlic-powder.png",
            consistency: "SOLID",
            name: "garlic powder",
            nameClean: "garlic powder",
            original: "garlic powder",
            originalName: "garlic powder",
            amount: 3,
            unit: "servings",
            meta: [],
            measures: {
              us: {
                amount: 3,
                unitShort: "servings",
                unitLong: "servings",
              },
              metric: {
                amount: 3,
                unitShort: "servings",
                unitLong: "servings",
              },
            },
          },
          {
            id: 11252,
            aisle: "Produce",
            image: "iceberg-lettuce.jpg",
            consistency: "SOLID",
            name: "lettuce",
            nameClean: "lettuce",
            original: "2 cups of lettuce, torn into pieces",
            originalName: "lettuce, torn into pieces",
            amount: 2,
            unit: "cups",
            meta: [],
            measures: {
              us: {
                amount: 2,
                unitShort: "cups",
                unitLong: "cups",
              },
              metric: {
                amount: 144,
                unitShort: "g",
                unitLong: "grams",
              },
            },
          },
          {
            id: 93770,
            aisle: "Pasta and Rice",
            image: "pizza-dough.jpg",
            consistency: "SOLID",
            name: "pizza crust",
            nameClean: "prepared pizza crust",
            original: "1 thin pizza crust, store bought or homemade",
            originalName: "thin pizza crust, store bought or homemade",
            amount: 1,
            unit: "",
            meta: ["homemade", "store bought", "thin"],
            measures: {
              us: {
                amount: 1,
                unitShort: "",
                unitLong: "",
              },
              metric: {
                amount: 1,
                unitShort: "",
                unitLong: "",
              },
            },
          },
          {
            id: 4639,
            aisle: "Oil, Vinegar, Salad Dressing",
            image: "ranch-dressing.jpg",
            consistency: "LIQUID",
            name: "ranch dressing",
            nameClean: "ranch dressing",
            original: "1 heaping tbsp. of ranch dressing, regular or light",
            originalName: "heaping tbsp. of ranch dressing, regular or light",
            amount: 1,
            unit: "tbsp",
            meta: ["light"],
            measures: {
              us: {
                amount: 1,
                unitShort: "Tbsp",
                unitLong: "Tbsp",
              },
              metric: {
                amount: 1,
                unitShort: "Tbsp",
                unitLong: "Tbsp",
              },
            },
          },
          {
            id: 11529,
            aisle: "Produce",
            image: "tomato.png",
            consistency: "SOLID",
            name: "tomato",
            nameClean: "tomato",
            original: "1 large tomato, seeded and diced",
            originalName: "tomato, seeded and diced",
            amount: 1,
            unit: "large",
            meta: ["diced", "seeded"],
            measures: {
              us: {
                amount: 1,
                unitShort: "large",
                unitLong: "large",
              },
              metric: {
                amount: 1,
                unitShort: "large",
                unitLong: "large",
              },
            },
          },
          {
            id: 42130,
            aisle: "Meat",
            image: "bacon-turkey.jpg",
            consistency: "SOLID",
            name: "turkey bacon",
            nameClean: "turkey bacon",
            original: "10 pieces turkey bacon, cooked them crumbled",
            originalName: "turkey bacon, cooked them crumbled",
            amount: 10,
            unit: "pieces",
            meta: ["crumbled", "cooked"],
            measures: {
              us: {
                amount: 10,
                unitShort: "",
                unitLong: "",
              },
              metric: {
                amount: 10,
                unitShort: "",
                unitLong: "",
              },
            },
          },
        ],
        id: 680975,
        title: "BLT Pizza",
        readyInMinutes: 45,
        servings: 3,
        sourceUrl: "https://www.pinkwhen.com/blt-pizza/",
        image: "https://img.spoonacular.com/recipes/680975-556x370.jpg",
        imageType: "jpg",
        summary:
          'Forget going out to eat or ordering takeout every time you crave Mediterranean food. Try making BLT Pizzan at home. This recipe makes 3 servings with <b>628 calories</b>, <b>26g of protein</b>, and <b>26g of fat</b> each. For <b>$2.81 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. It works well as a budget friendly main course. This recipe from Pink When requires colby jack cheese, turkey bacon, garlic powder, and lettuce. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 38%</b>, which is not so super. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/blt-pizza-471280">BLT Pizza</a>, <a href="https://spoonacular.com/recipes/blt-pizza-99404">BLT Pizza</a>, and <a href="https://spoonacular.com/recipes/blt-pizza-409946">BLT Pizza</a>.',
        cuisines: ["Mediterranean", "Italian", "European"],
        dishTypes: ["lunch", "main course", "main dish", "dinner"],
        diets: [],
        occasions: [],
        instructions:
          "Preheat your oven according to your crust's directions.In a small bowl, mix together softened cream cheese and the ranch dressing until equally combined.Using a small spatula, spread cream cheese mixture over the crust in an even thin layer.Top with cooked bacon, diced tomatoes, and cheese. Sprinkle with garlic powder.Place in oven and cook according to package instructions or until crust is crisp and cheese is golden brown, about 8-10 minutes.Remove from oven and let cool for 5 minutes.Once cool, sprinkle the lettuce over the top and then cut into slices. Enjoy!",
        analyzedInstructions: [
          {
            name: "",
            steps: [
              {
                number: 1,
                step: "Preheat your oven according to your crust's directions.In a small bowl, mix together softened cream cheese and the ranch dressing until equally combined.Using a small spatula, spread cream cheese mixture over the crust in an even thin layer.Top with cooked bacon, diced tomatoes, and cheese.",
                ingredients: [
                  {
                    id: 4639,
                    name: "ranch dressing",
                    localizedName: "ranch dressing",
                    image: "ranch-dressing.jpg",
                  },
                  {
                    id: 10862,
                    name: "cooked bacon",
                    localizedName: "cooked bacon",
                    image: "cooked-bacon.jpg",
                  },
                  {
                    id: 1017,
                    name: "cream cheese",
                    localizedName: "cream cheese",
                    image: "cream-cheese.jpg",
                  },
                  {
                    id: 11529,
                    name: "tomato",
                    localizedName: "tomato",
                    image: "tomato.png",
                  },
                  {
                    id: 1041009,
                    name: "cheese",
                    localizedName: "cheese",
                    image:
                      "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
                  },
                  {
                    id: 0,
                    name: "spread",
                    localizedName: "spread",
                    image: "",
                  },
                  {
                    id: 0,
                    name: "crust",
                    localizedName: "crust",
                    image: "",
                  },
                ],
                equipment: [
                  {
                    id: 404642,
                    name: "spatula",
                    localizedName: "spatula",
                    image:
                      "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg",
                  },
                  {
                    id: 404783,
                    name: "bowl",
                    localizedName: "bowl",
                    image:
                      "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                  },
                  {
                    id: 404784,
                    name: "oven",
                    localizedName: "oven",
                    image:
                      "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  },
                ],
              },
              {
                number: 2,
                step: "Sprinkle with garlic powder.",
                ingredients: [
                  {
                    id: 1022020,
                    name: "garlic powder",
                    localizedName: "garlic powder",
                    image: "garlic-powder.png",
                  },
                ],
                equipment: [],
              },
              {
                number: 3,
                step: "Place in oven and cook according to package instructions or until crust is crisp and cheese is golden brown, about 8-10 minutes.",
                ingredients: [
                  {
                    id: 1041009,
                    name: "cheese",
                    localizedName: "cheese",
                    image:
                      "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
                  },
                  {
                    id: 0,
                    name: "crust",
                    localizedName: "crust",
                    image: "",
                  },
                ],
                equipment: [
                  {
                    id: 404784,
                    name: "oven",
                    localizedName: "oven",
                    image:
                      "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  },
                ],
                length: {
                  number: 10,
                  unit: "minutes",
                },
              },
              {
                number: 4,
                step: "Remove from oven and let cool for 5 minutes.Once cool, sprinkle the lettuce over the top and then cut into slices. Enjoy!",
                ingredients: [
                  {
                    id: 11252,
                    name: "lettuce",
                    localizedName: "lettuce",
                    image: "iceberg-lettuce.jpg",
                  },
                ],
                equipment: [
                  {
                    id: 404784,
                    name: "oven",
                    localizedName: "oven",
                    image:
                      "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  },
                ],
                length: {
                  number: 5,
                  unit: "minutes",
                },
              },
            ],
          },
        ],
        originalId: null,
        spoonacularScore: 8.972521781921387,
        spoonacularSourceUrl: "https://spoonacular.com/blt-pizza-680975",
      };
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    foodId && fetchData();
  }, [foodId]);
  return (
    <>
      {" "}
      {foodId ? (
        <div className={styles.recipeCard}>
          <div>
            <h1 className={styles.recipeName}>{food.title}</h1>
            <img
              className={styles.recipeImage}
              src={food.image}
              alt={food.title}
            />
          </div>
          <div className={styles.recipeDetails}>
            <span>
              <strong>⌚ {food.readyInMinutes}</strong> Minutes
            </span>
            <span>
              <strong>👪 Serve {food.servings}</strong>
            </span>
            <span>
              <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "🍅 Vegetarian" : "🥩 Non-Vegetarian"}
              </strong>
            </span>
          </div>
          <div className={styles.recipeDetails}>
            <span>💲{food.pricePerServing / 100} Per Serving</span>
          </div>
          <h2>Ingredients</h2>
          <ItemList food={food} isLoading={isLoading} />
          <h2 className={styles.recipeInstructions}>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step, index) => (
                  <li key={index}>{step.step}</li>
                ))
              )}
            </ol>
            {/* <p dangerouslySetInnerHTML={{ __html: food.summary }}></p> */}
          </div>
        </div>
      ) : (
        "Food recipe will appear here..."
      )}
    </>
  );
};

export default FoodDetails;
