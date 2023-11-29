const arrNum = [1, 2, 2, 3];

const sumAll = (arrNum) => {
let result = 0
for(let i = 0; i < arrNum.length; i++) {
  result += arrNum[i]
}
console.log(result)
};

sumAll(arrNum);
