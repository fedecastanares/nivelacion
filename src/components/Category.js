import React, {useState, useContext, useEffect} from 'react';

import { Chip, Avatar } from "@material-ui/core"
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { DataContext } from '../context/dataContext';
import { CategoryContext} from '../context/categoryContext';


const Category = ({category}) => {

    const [ status, setStatus ] = useState(false);
    const { setLoading } = useContext(DataContext)
    const { selectedCategories, setSelectedCategories } = useContext(CategoryContext)

    const onClick = (e) => {
        setLoading(true);
        setStatus(!status);
        if (!status === true) {
            setSelectedCategories(category.id);
        } else {
            setSelectedCategories(undefined);
        }
    };

    useEffect(() => {
        if (category.id !== selectedCategories) {
            setStatus(false);
        }
    }, [ selectedCategories, category.id ])


    return ( 
        <>
            <Chip
                avatar={<Avatar style={{minWidth: 48}}>{category.count}</Avatar>}
                label={category.name}
                clickable
                color={status ? "primary" : "default"}
                onClick={onClick}
                deleteIcon={status ? <ClearIcon /> : <DoneIcon />}
            />
        </>
     );
}
 
export default Category;