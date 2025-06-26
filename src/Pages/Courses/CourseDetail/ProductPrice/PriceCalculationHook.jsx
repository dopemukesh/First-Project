import { useState, useEffect } from 'react';

export const defaultPrices = {
  // original: "",
  // discount: "" // discount in percentage
};

export const useDiscountCalculator = (originalPrice, discountPercent, sellPrice) => {
  const [prices, setPrices] = useState({
    original: originalPrice || defaultPrices.original,
    discount: discountPercent || defaultPrices.discount,
    sell: sellPrice || null,
    calculated: "0"
  });

  useEffect(() => {
    const price = Number(prices.original);
    const discount = prices.sell
      ? 100 - (Number(prices.sell) / price) * 100
      : Number(prices.discount);

    const calculatedPrice = (price * (1 - discount / 100)).toFixed();

    setPrices(prev => ({
      ...prev,
      discount: discount.toFixed(0),
      calculated: calculatedPrice
    }));
  }, [prices.original, prices.discount, prices.sell]);

  return prices;
};
