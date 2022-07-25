const tableData = document.querySelectorAll('.softmerge-inner');
const trs = document.querySelectorAll('tbody tr');
const codePerson = document.querySelectorAll('.s1');

// console.log(namePerson);

const personInfo = new Object();


// for (let item of namePerson) {
//   personInfo.name = item.textContent;
// }
// for (let code of codePerson) {
//   if (code.textContent.length === 10) {
//     personInfo.codeNum = code.textContent;
//   }
//   if (code.textContent.length === 19) {
//     personInfo.date = code.textContent;
//   }
// }

console.log(trs);

// const newArray = trs.map((item) => ({
//   name: item.querySelector('.softmerge-inner').textContent
// }))

const newArray = trs.map((item) => (
  console.log(item)
))

console.log(newArray);