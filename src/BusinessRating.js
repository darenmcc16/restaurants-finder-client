import React from 'react';
import styles from './BusinessRating.module.css';
import Rating from 'react-rating';

export function BusinessRating(props) {
    return (
        <div className={styles.rating}>
            <Rating
                emptySymbol="star"
                fullSymbol="star"
                fractions={2}
                readonly
                initialRating={props.rating}
            />
            <p>{props.reviewCount} Reviews</p>
        </div>
    );
}