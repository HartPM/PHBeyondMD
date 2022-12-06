import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EditRecipeForm from './EditRecipeForm';
import { SingleRecipeProps } from '../Types/Types';

function RecipeAccordian({recipe, getMyRecipes}: SingleRecipeProps) {
    const[toggleEdit, setToggleEdit] = React.useState(false);

    const {
        id,
        strMeal,
        strArea,
        strMealThumb,
        strInstructions,
    } = recipe;

    let ingredients: string[] = [];
    for (let [key, value] of Object.entries(recipe)) {
        if (key.includes('strIngredient') && value.length > 0) {
            ingredients = [...ingredients, value]
        }
    };

    const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToggleEdit(!toggleEdit)
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    
        const button: HTMLButtonElement = event.currentTarget;
        const recipeId = button.value;

        fetch(`http://localhost:8000/recipes/${recipeId}/destroy`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Recipe was deleted') {
                getMyRecipes()
            }
            else {
                console.log(data)
            }
        })
    };

    return (
        <Accordion key={id}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography sx={{fontWeight: 'bold'}}>
                {strMeal}
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <img
                height="200"
                src={strMealThumb}
                alt={strMeal}
            />
            <Typography>
                {strArea}
            </Typography>
            <br/>
            <Typography sx={{fontWeight: 'bold'}}>
                Ingredients:
            </Typography> 
            {ingredients.map((ingredient, index) => (
                <Typography key={index}>
                    {ingredient}
                </Typography>
            ))}
            <br/>
            <Typography sx={{fontWeight: 'bold'}}>
                Instructions:
            </Typography> 
            <Typography>
                {strInstructions}
            </Typography> 
            <br/>
            {toggleEdit ? <EditRecipeForm recipe={recipe} ingredients={ingredients} /> : null}
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" margin-right='3px' value={id} onClick={handleEdit}>
                    Edit
                </Button>
                <Button variant="outlined" value={id} onClick={handleDelete}>
                    Delete
                </Button>
            </Stack>
            </AccordionDetails>
        </Accordion>
    );
};

export default RecipeAccordian;