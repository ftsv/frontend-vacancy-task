export const numberPerDigit = (num: number) => num.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
