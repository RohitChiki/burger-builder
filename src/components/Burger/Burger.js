import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props)  => {
    let transformedIngreients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => 
                {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>                    
                }) 
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);
    if(transformedIngreients.length === 0) {
        transformedIngreients = <p>Please add ingredients</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngreients }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;