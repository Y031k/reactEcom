/*   local currency format */
export const moneyFormatter = Intl.NumberFormat('en-ES', {
	currency: 'USD',
	currencyDisplay: 'symbol',
	currencySign: 'standard',
	style: 'currency',
	minimumFractionDigits: 2,  
	maximumFractionDigits: 4,  
	minimumIntegerDigits: 1,   
 });

 