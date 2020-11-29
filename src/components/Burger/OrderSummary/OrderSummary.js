import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from  '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igkey => {
            return (<li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey} 
                    </span>: {props.ingredients[igkey]}</li>)
            });
    
    return (
        <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients!</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;