var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
      }
      
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i + 1]] > roman[s[i]]) {
        let prev = (roman[s[i + 1]] - roman[s[i]]);
            result += prev;
            i++;
          } else {
            if (i != s.length) {
              result += roman[s[i]]
            }
          }
        }
        return result
      }
              
      console.log(romanToInt("MMXX")); // 2020
      console.log(romanToInt("VX")); // 5
