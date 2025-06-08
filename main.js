/*(1)map2
-Input: truyền vào mảng 
[
  { name: "SV A", score: 6 },
  { name: "SV B", score: 8 },
  { name: "SV C", score: 9 }
]
-output => danh sách danh sách sinh viên
*/
const students = [
  { name: "SV A", score: 6 },
  { name: "SV B", score: 8 },
  { name: "SV C", score: 9 }
];
Array.prototype.map2 = function(callback, thisArg) {
  const result = [];
  const arr = this;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
  }
  return result;
};
const studentDescriptions = students.map2(student => `${student.name} - Điểm: ${student.score}`);
console.log("Bài 1 - In danh sách sinh viên:");
studentDescriptions.forEach(desc => console.log(desc));
console.log("--------------------");
/*
(2) Input: ds mảng const fruits = ["an", "xoài", "cam", "dưa hấu", "bơ"];
-Output: cho ra các phần tử có độ dài lớn hơn 3
*/
const fruits = ["an", "xoài", "cam", "dưa hấu", "bơ"];
Array.prototype.filter2 = function(callback, thisArg) {
  const result = [];
  const arr = this;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};
const longFruits = fruits.filter2(fruit => fruit.length > 3);
console.log("Bài 2 - Quả dài hơn 3 ký tự:");
longFruits.forEach(fruit => console.log(fruit));
console.log("--------------------");
/*(3)foreach2
-Input: truyền vào mảng 
[
  { name: "Bút", price: 2000, quantity: 3 },
  { name: "Vở", price: 5000, quantity: 2 }
]
-Output: in ra tổng giá của sp 
 */
const products = [
  { name: "Bút", price: 2000, quantity: 3 },
  { name: "Vở", price: 5000, quantity: 2 }
];
Array.prototype.forEach2 = function(callback, thisArg) {
  const arr = this;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      callback.call(thisArg, arr[i], i, arr);
    }
  }
};
let totalPrice = 0;
products.forEach2(product => {
  totalPrice += product.price * product.quantity;
});
console.log("Bài 3 - Tổng giá sản phẩm:", totalPrice);

