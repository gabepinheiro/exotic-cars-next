export const getCurrencyFormatted = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(amount)
