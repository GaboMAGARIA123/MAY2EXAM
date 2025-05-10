// დავალება 1:
// შექმენი ორი მასივი და გააერთიანე ისინი spread operator-ის გამოყენებით.
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "tomato"];

const all = [...fruits,...vegetables];
console.log(all); 
// დავალება 2:
// შექმენით ფუნქცია რომელიც დააბრუნებს პირველი სამი ელემენტის ჯამს
const numbers = [5, 10, 15];
function sum(arr) {
    return arr.slice(0, 3).reduce((acc, num) => acc + num, 0);
}
console.log(sum(numbers));
// დავალება 3:
// გააკოპირე მასივი ისე, რომ ორიგინალი არ შეიცვალოს. დაამატე ახალი ელემენტი 4, 5, 6 ახალ მასივში.
const originalArray = [1, 2, 3];
const newmasiv = [...originalArray];
newmasiv.push(4, 5, 6);
console.log(newmasiv); 
// დავალება 4:
// გააერთიანეთ ობიექტები
const person = { name: "Anna", age: 25 };
const job = { title: "Developer", company: "Tech Ltd" };
const gaer = { ...person, ...job };
console.log(gaer);
// დავალება 5:
// დაწერე ფუნქცია, რომელიც იღებს ობიექტს და აბრუნებს ახალ ობიექტს დამატებული ან შეცვლილი ველით, შეცვლის გარეშე ორიგინალის.
const user = { name: "Giorgi", age: 30 };
function updateUser(obj, newAge) {
    return { ...obj, age: newAge };
    }
// უნდა დააბრუნოს ახალი ობიექტი, რომელშიც მხოლოდ ასაკია განახლებული
console.log(updateUser(user, 35));
// დავალება 6:
// შექმენი სამი მასივი და გააერთიანე ისინი ერთ მასივში spread operator-ით. შემდეგ კი ამოშალეთ დუბლიკატები.
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
const gaertianebuli = [...arr1, ...arr2, ...arr3];
console.log(gaertianebuli);
// შედეგი უნდა იყოს: [1, 2, 3, 4, 5, 6, 7]
// დავალება 7:
// შექმენი მასივის ასლი, მაგრამ ამოჭერი ერთ-ერთი ელემენტი spread operator და filter() მეთოდის გამოყენებით ისე, რომ ორიგინალი მასივი არ შეიცვალოს.
const colors = ["red", "green", "blue", "yellow"];
const axali = [...colors].filter(color => color !== "blue");
console.log(axali);
// წაშალე "blue" და შექმენი ახალი მასივი: ["red", "green", "yellow"]