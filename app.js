function miniMaxSum(arr) {
  // Write your code here
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        sum += arr[j];
      }
    }
    if (max == 0 || min == 0) {
      max = sum;
      min = sum;
    }
    if (max < sum) {
      max = sum;
    }
    if (min > sum) {
      min = sum;
    }
  }
  console.log(min);
  console.log(max);
}
let arr = [1, 2, 3, 4, 5];
let s = "07:35:00PM";

function timeConversion(s) {
  // Write your code here
  let [hr, min, sec] = s.slice(0, s.length - 2).split(":");
  let formate = s.slice(s.length - 2, s.length);
  if (formate == "PM") {
    if (parseInt(hr) < 12) {
      console.log(`${parseInt(hr) + 12}:${min}:${sec}`);
    } else {
      console.log(`${hr}:${min}:${sec}`);
    }
  } else if (formate == "AM") {
    if (parseInt(hr) > 12) {
      console.log(`${parseInt(hr) - 12}:${min}:${sec}`);
    } else {
      console.log(`${hr}:${min}:${sec}`);
    }
  }
}

function flip(n) {
  if (n == "1") {
    return "0";
  } else {
    return "1";
  }
}

function flippingBits(n) {
  // Write your code here
  let dec = "";
  let binary = [...Array(32)].map((x, i) => (n >> i) & 1).reverse();
  binary.map((val) => {
    dec += flip(val);
  });
  let num = parseInt(dec, 2);
  return num;
}

function diagonalSum(arr) {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (i == j) {
          result += arr[i][j];
        }
      }
    }
    resolve(result);
  });
}

function oneDimToTwoDim(arr) {
  return new Promise((resolve, reject) => {
    let newArr = [];
    while (arr.length) newArr.push(arr.splice(0, 3));
    resolve(newArr);
  });
}

function reverseArray(arr) {
  return new Promise((resolve, reject) => {
    let reverseArr = [];
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      reverseArr[count] = arr[i];
      count++;
    }
    resolve(reverseArr);
  });
}

async function diagonalDifference(arr) {
  // Write your code here
  let arrayTwo = await reverseArray(arrayOne);
  let leftDiagonal = await diagonalSum(arr);
  let rightDiagonal = await diagonalSum(arrayTwo);
  let result = rightDiagonal - leftDiagonal;
  return result;
}

// Finding the number of times the number is repeated
function countingSort(arr) {
  let result = [];
  let _hash = [];
  let newArr = arr.sort((a, b) => a - b);
  console.log(newArr);
  for (value of arr) {
    if (_hash[value] !== undefined) {
      _hash[value]++;
    } else {
      _hash[value] = 0;
    }
  }
  //   for (value of arr) {
  //     console.log(value + ":" + _hash[value]);
  //     result.push(_hash[value]);
  //   }

  for (let i = 0; i <= arr.length; i++) {
    console.log(i + ":" + _hash[_hash[arr[i]]]);
    if (_hash[i] !== undefined) {
      result[i] = _hash[arr[i]];
    } else {
      result[i] = 0;
    }
  }

  console.log(result);
  return result;
}

// countingSort([
//   63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
//   99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
//   89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24,
//   87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33,
//   46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70,
//   33,
// ]);

// panagram

function panagram(str) {
  let strArry = new Set(str.replace(/\s/g, "").toLowerCase().split("").sort());
  let panagramArray = [...strArry];
  if (panagramArray.length == 26) {
    console.log("pangram");
    return "pangram";
  } else {
    console.log("not pangram");
    return "not panagram";
  }
}

panagram("We promptly judged antique ivory buckles for the next prize");
