import './recipes.css';
function GarlicNoodles() {

    {
        return (

            <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Garliv Noodles</title>
                <link rel="stylesheet" href="Style.css" />
                <div className="gn-recipes">
                    <h1>Garlic Noodles</h1>
                    <div className="artical-post-header">
                        <p>
                            These garlic noodles are deceivingly simple, yet devastatingly
                            delicious. Garlic noodles were invented back in the '70s at a restaurant
                            in San Francisco called Thanh Long. Usually served with roasted
                            Dungeness crab, the recipe is a very closely guarded family secret, but
                            after lots of investigation, and even more experimentation, I think this
                            is very close.
                        </p>
                        <img src="../Images/img10.webp" alt="gn" />
                    </div>
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <h3>For the Secret Sauce:</h3>
                        <ul>
                            <li>2 tablespoons soy sauce</li>
                            <li>1 tablespoon oyster sauce</li>
                            <li>2 teaspoons Worcestershire sauce</li>
                            <li>2 teaspoons fish sauce</li>
                            <li>¼ teaspoon sesame oil</li>
                            <li>1 pinch cayenne pepper</li>
                        </ul>
                        <h3>For the Noodles:</h3>
                        <ul>
                            <li>4 tablespoons unsalted butter</li>
                            <li>8 cloves garlic, minced</li>
                            <li>6 ounces spaghetti</li>
                            <li>¼ cup finely grated Parmigiano-Reggiano cheese</li>
                            <li>1 tablespoon chopped green onion, or to taste</li>
                            <li>1 pinch red pepper flakes</li>
                        </ul>
                    </div>
                    <div className="directions">
                        <h2>Directions</h2>
                        <div className="steps">
                            <h3>Step1</h3>
                            <p>
                                Stir soy sauce, oyster sauce, Worcestershire sauce, fish sauce, sesame
                                oil, and cayenne pepper together in a small bowl for the secret sauce.
                            </p>
                            <h3>Step 2</h3>
                            <p>
                                Melt butter in a skillet over medium heat. Add garlic; cook and stir
                                just until fragrant, about 1 minute. Quickly stir in the secret sauce
                                and turn off the heat.
                            </p>
                            <h3>Step 3</h3>
                            <p>
                                Bring a large pot of lightly salted water to a boil. Cook spaghetti in
                                boiling water, stirring occasionally, until tender yet slightly firm
                                to the bite, about 12 minutes.{" "}
                            </p>
                            <h3>Step 4</h3>
                            <p>
                                Transfer spaghetti into the sauce using tongs, bringing some of the
                                cooking water with it. Toss until well coated; stir in Parmesan
                                cheese. Splash in more pasta water if noodles are too dry.
                            </p>
                            <h3>Step 5</h3>
                            <p>Plate noodles; garnish with green onions and red pepper flakes.</p>
                        </div>
                    </div>
                    <div className="notes">
                        <h2>Chef's Notes:</h2>
                        <p>
                            Virtually any noodle will shine in this, but I quite like good old
                            spaghetti. Good options include Chinese egg noodles and ramen.
                        </p>
                        <p>
                            Apparently, one of the secret ingredients is Maggi Seasoning Sauce,
                            which I decided not to use since I'm not sure how easy it is for the
                            average person to find. Besides, I think my assortment of savory,
                            umami-rich substitutes did the job quite nicely, and everything in the
                            ingredient list can be found at any large grocery store.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
export default GarlicNoodles;