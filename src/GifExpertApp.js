import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
        
    //     //Opción 1
    //     //setCategories([...categories, 'HunterXHunter']);

    //     //Opción 2  
    //     setCategories( cats => [...cats, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            
            {
                categories.map( category => 
                    <GifGrid
                        category={ category }
                        key={ category } 
                        />
                )
            }

        </>
    )
}
