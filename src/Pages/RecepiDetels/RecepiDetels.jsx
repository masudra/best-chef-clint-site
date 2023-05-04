import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './RecepiDetels.css'

const RecepiDetels = () => {
    const recipe =useLoaderData()
    console.log(recipe)
    const {chef_name,chef_photo,recipe_amaunt,experience,like,description,recipe_details,treating,cooking_method,ingredients,rating,recipe_name,recipe_3}=recipe
    

   

    return (
        <div className='recepi-detels-conteinar'>
            <div className='p-5'>
                <img className='about-chef-img' src={chef_photo} alt="" />
                <h4><span>Chef Name: </span>{ chef_name}</h4>
                <p> <span>Description:</span> { description}</p>
                <p><span>Like: </span>{ like}</p>
                <p><span>Total Recipe:</span>{ recipe_amaunt}</p>
                <p><span>Experience:</span> { experience}</p>
            </div>
            <div className='mt-5' p-5>
                <h4>About Recepi</h4>
                <h4><span>Recepi Name:</span>{recipe_name}</h4>
                <p><span>Ingredients:</span>{ ingredients}</p>

                <p><span>Cooking Metod: </span>{ cooking_method}</p>
                <p><span>Rating: </span>{ rating}</p>
                <p><span>Three Recepi Name: </span>{recipe_3}</p>



                {/* <p>Recipe Name: { recipe_details[0].recipe_name}</p>
                <p>ingredients: { recipe_details[0].ingredients.map(mr=><p key={mr.id}>{mr},</p>)}</p>
                <p>instructions
: { recipe_details[0].instructions
.map(mr=><p key={mr.id}>{mr},</p>)}</p> */}


           <button>Favorite</button>
            </div>
            
        </div>
    );
};

export default RecepiDetels;