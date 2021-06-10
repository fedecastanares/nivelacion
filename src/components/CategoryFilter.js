import React, { useEffect, useState } from 'react';
import { Typography, Grid, TextField } from "@material-ui/core"
import TeledoceService from '../service/TeledoceService';
import Category from "./Category"


const CategoryFilter = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
    },[categories.length])

    const getCategories = async () => {
        const _teledoceService = new TeledoceService();
        const response = await _teledoceService.getCategories();
        setCategories(response);
    }

    const RenderCategoriesChip = () => {
        if (categories.length > 0) {
            return (
            categories.map(category =>  (
                <Grid item key={category.id}>
                    <Category category={category} />
                </Grid>    
            )))
        } else {
            return null
        }
    }

    return ( 
        <>
            <Typography style={{paddingBottom: '1vh'}} variant='subtitle1'>Categorias:</Typography>
            <TextField label="Buscar categoria" />
            <Grid container style={{paddingTop: '4vh'}} spacing={2}>
                <RenderCategoriesChip />
            </Grid>
            
        </>
     );
}
 
export default CategoryFilter;