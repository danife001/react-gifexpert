import { useState } from "react"
import { AddCategories, GifGrid } from "./components";



GifGrid
export const GitExpertApp = () => {

    const [categories, setCategories] = useState([ "jujutsu"]);
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    }
    return(
        <>
        
        <h1>GitExpertApp</h1>
 
        <AddCategories 
                onNewCategory={ (value) => onAddCategory(value) }
            />

    
            {categories.map((category) =>
            (
                <GifGrid 
                key={category}  
                category={category}   />
            ))
            }

        </>
    )

}