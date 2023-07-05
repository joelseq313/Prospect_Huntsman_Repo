export function convertToRoman(number: number): string {
    const romanNumerals: [number, string][] = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ];
  
    let result = '';
  
    for (const [value, numeral] of romanNumerals) {
      while (number >= value) {
        result += numeral;
        number -= value;
      }
    }
  
    return result;
  }
  

  export function convertArabicToNumber(arabicNumber: string): number {
    const arabicNumerals: { [key: string]: number } = {
      "٠": 0,
      "١": 1,
      "٢": 2,
      "٣": 3,
      "٤": 4,
      "٥": 5,
      "٦": 6,
      "٧": 7,
      "٨": 8,
      "٩": 9
    };
  
    let number = 0;
    for (const char of arabicNumber) {
      if (arabicNumerals.hasOwnProperty(char)) {
        number = number * 10 + arabicNumerals[char];
      }
    }
  
    return number;
  }
