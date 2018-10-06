
const data= require('./products.json');


let arr =new Set();
const items = data.map(info => {
  return info.size;
});

console.log(items);
items.forEach(element => {
  element.forEach(i => {
    arr.add(i);
  });
});

console.log(arr);

/* const a = [
  { data: ["1", "2", "3", "4"] },
  {
    data: ["4", "5"]
  }
];

var arr = new Set();

const items = a.map(info => {
  return info.data;
});

items.forEach(element => {
  element.forEach(i => {
    arr.add(i);
  });
});

console.log(items);
var newSet = new Set(items);
console.log(arr);
 */