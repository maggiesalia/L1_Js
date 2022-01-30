// // 1 - ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

// let  user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//     studentstatus: active
// };

// console.log(user.studentstatus)
// console.log(user['studentstatus'])



// // 2 - შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით);

// let programmingLanguages = ['Python', 'JavaScript', 'Java', 'C#', 'PHP', 'Swift'];

// // 1 -- using FOR loop
// for (let i = 0; i < programmingLanguages.length; i++){
//     console.log(programmingLanguages[i]);
// }

// // 2 -- using WHILE loop
// let i = 0;
// while(i < programmingLanguages.length){
//     console.log(programmingLanguages[i]);
//     i++;
// }



// // 3 - შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 5) {
//         console.log(numbers[i]);
//     }
// }



// 4 - მოცემული მაისივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status პროეპრტი მნიშვნელობა არის true;

// let users =  [
//     {username:'test1', status: false},
//     {username:'test2', status: false},
//     {username:'test3', status: true}
// ];

// for (let i = 0; i < users.length; i++){
//     if (users[i].status == true) {
//         console.log(users[i]);
//     }
// }



// 5 - მოცემულია ობიექტი:
/*თუ უზერის ასაკი მეტია 18-ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
თუ უზერის სახელი უდრის გიორგის მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
თუ უზერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error; */

// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// };

// if (user.age > 18 && user.studentstatus == 'active'){
//     console.log('hello');
// } else if (user.name == 'giorgi'){
//     console.log('hello giorgi');
// } else if (user.studentstatus == 'active' || user.age < 25){
//     console.log('hello world');
// } else {
//     console.log('error');
// }



// 6. მოცემულია მასივი, გამოიტანეთ მარტო სრტინგები; 

// let array = [ watermelon, pear, 10, 45, 50, 'apple', 'ananas'];

// for (i = 0; i < array.length; i++){
//     if (typeof array[i] == 'string'){
//         console.log(array[i]);
//     }
// }
