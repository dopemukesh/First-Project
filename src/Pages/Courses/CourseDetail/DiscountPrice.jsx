import React from 'react'

export const productPrice =
{
    original: "4999",
    discount: "60",
}

const {original, discount} = productPrice;

const DiscountPrice = ({ originalPrice, discountPercent }) => {
    const discountedPrice = !originalPrice && !discountPercent ?
        (original * (1 - discount / 100)).toFixed() : (originalPrice * (1 - discountPercent / 100)).toFixed()

    return (
        <>
            {discountedPrice}
        </>
    )
}

export default DiscountPrice;