/**********************************************CHAPTER NO:5**************************************************
// Q:NO:1:Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var a = 5;
// var b = 3;
// var result = a + b;
// document.write("Sum of 5 and 3 is", result)


// Q:NO:2:
// var a = 5;
// var b = 3;
// var sub = a - b;
// var mul = a * b;
// var div = a / b;
// document.write("Substraction <br>", sub)
// document.write("Multiplication <br>", mul)
// document.write("Division <br>", div)

// Q:NO:3
// var myVar;
// document.write("Value after variable declaration is:" + myVar + "<br>")
// myVar = 5;
// document.write("Initial value:" + myVar + "<br>")
// myVar++;
// document.writeln("like “Value after increment is:" + myVar + "<br>")
// myVar += 7;
// document.write("Value after addition is:" + myVar + "<br>")
// myVar--;
// document.write("Value after decrement is:" + myVar + "<br>")
// document.write("The remainder is: " + (myVar % 3));

// Q:NO:4:Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// var ticketprice = 600;
// document.write("Total cost  to buy  5 ticket to a movie is :" + (ticketprice * 5));

// Q:NO:5:Write a script to display multiplication table of any number in your browser. E.g
// var num = 4;
// document.write("Multiplication table " + num + "<br>")
// for (let i = 1; i <= 10; i++) {
//     document.write(num + "x" + i + "=" + (num * i) + "<br>")
// }


// Q:NO:6:Store total marks & marks obtained by a student in 2variables. Compute the percentage & show the result in your browser

// var Marks = [980, 804];
// document.write("Total Marks:", Marks[0]);
// document.write("<br>" + "Marks Obtained:", Marks[1]);
// document.write("<br>" + "Percentage:", ((Marks[1] / Marks[0]) * 100).toFixed(2) + "%");





// ********************************************* CHAPTER 6-9 *******************************************************

// Q:NO:1:Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser.
// var num = 10;
// document.write("The value of a is:" + num + "<br>")
// document.write("The value of ++a is:" + (num + 1) + "<br>")
// document.write("The value of a++ is:" + (num + 2) + "<br>")
// document.write("The value of --a is:" + (num + 1) + "<br>")
// document.write("The value of a-- is:" + (num + 1) + "<br>")

// Q:NO:2:What will be the output in variables a, b & result after execution of the following script:
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a:", a, "<br>")
// document.write("b:", b, "<br>")
// document.write("Result:", result)

// Q:NO:3:Write a program that takes input a name from user & greet the user.
// var username = prompt("enter user name")
// document.write("Hello," + username + "Welcome to our city. <br>")

// Q:NO:4:Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var num = prompt("Enter a number")
// num = num ? parseInt(num) : 5;
// for (let i = 1; i <= 10; i++) {
//     document.write(num + "x" + i + "=" + (num * i) + "<br>")
// }

// Q:NO:5:a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// var subject1 = prompt("Enter English Marks")
// var subject2 = prompt("Enter Math Marks")
// var subject3 = prompt("Enter  Urdu  Marks")
// var marks1 = prompt("Marks for" + subject1 + ":")
// var marks2 = prompt("Marks for" + subject2 + ":")
// var marks3 = prompt("Marks for" + subject3 + ":")
// var totalmarks = 100,
//     obtained = marks1 + marks2 + marks3,
//     percent = (obtained / totalmarks) * 100;
// document.write(`<table border='1'>
//     <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>ObtainedMarks</th>
//         <th>Percentage</th>
//     </tr>
//     <tr>
//     <th>English</th>
//     <th>Math</th>
//     <th>Urdu</th>
//     </tr>
//     <tr>
//      <td>${subject1}</td> 
//      <td>100</td>
//      <td>${marks1}</td> 
//     </tr>
//     <tr>
//      <td>${subject2}</td> 
//      <td>100</td>
//      <td>${marks2}</td> 
//     </tr>
//     <tr>
//      <td>${subject3}</td> 
//      <td>100</td>
//      <td>${marks3}</td> 
//     </tr>
//     <tr><th colspan='2'>Total marks</th><th>${obtained}</th></tr>
//     <tr><th colspan='2'>Percentage</th><th>${percent.toFixed(2)}%</th></tr>
// </table>`)

//**************************************************CHAPTER:14-16*****************************************************/



// Q:NO:1:
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var name1 = []
// var name2 = new Array();
// var arr = ["apple", "banana", "orange"]
// var num = [1, 2, 3, 4, 5]
// var boolean = [true, false, true, false]
// var mixed = ["apple", 3, true, null]
// var qualification = [
//     "SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.Phil", "PhD"
// ];
// document.write("<h2>education qualifications in Pakistan</h2>")
// document.write("<ul>")
// for (var i = 0; i < qualification.length; i++) {
//     document.write("<li>" + qualification[i] + "</li>")
// }
// document.write("</ul>")


// Q:NO:2:Write a program to store student scores in an array &sort the array in ascending order using Array’s sort method.
// var ScoreofStudent = [320, 230, 480, 120]
//     // var orderedscoreofstudet 
// ScoreofStudent.sort();
// document.write("ordered score of student :", ScoreofStudent)

// Q:NO:3:Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
// var city = ["karachi", "lahore", "islamabad", "quetta", "peshawar"]
// var selectedCities = [city[2], city[3]]
// document.write("All City:", city, "<br>")
// document.write("Selectd City:", selectedCities)


// Q:NO:4:Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
// var arr = ["This", " is ", " my ", " cat"];
// var str = arr.join(" ");
// document.write("STRING:", str)

// Q:NO:5:Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
// var device = ["Keyboard", "mouse", "printer", "monitor"]
// document.write("<ul>")
// for (var i = 0; i < device.length; i++) {
//     document.write("<li>" + device[i] + "</li>")
// }
// document.write("</ul>")


// Q:NO:6:Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)
// var device = ["Keyboard", "mouse", "printer", "monitor"]
// device.reverse();
// document.write("<ul>")
// for (var i = 0; i < device.length; i++) {
//     document.write("<li>" + device[i] + "</li>")
// }
// document.write("</ul>")

// Q:NO:7:Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
// var manufacturers = ["apple", "samsung", "motorola", "nokia", "sony & haier"]
// document.write(`<label for="phone"><h2>select a phone manufactures:</h2></label>`)
// document.write(`<select id="phone">`);
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write(`<option value=">` + manufacturers[i] + `">` + manufacturers[i] + `</option>`);
// }
// document.write(`</select>`)



// Q:NO:8: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var student = ["Michal", "Jhon", "Tony"],
//     totalmarks = 500,
//     score = [320, 230, 480]
// for (var i = 0; i < student.length; i++) {
//     document.write(`${student[i]}: ${(score[i] / totalmarks * 100) .toFixed(2)}%`)
// }


//********************************************CHAPTER 17-20 ****************************************************/
// Q:NO:1:1. Declare and initialize an empty multidimensional array.(Array of arrays)2. Declare and initialize a multidimensional array representing the following matrix:
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// for (var i = 0; i < matrix.length; i++) {
//     document.write(matrix[i].join(" ") + "\n" + "<br>");
// }

// Q:NO:2:Write a program to print numeric counting from 1 to 10.
// for (var i = 0; i <= 10; i++) {
//     document.write(i + "\n" + "<br>")
// }

// Q:NO:3:Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var tableNumber = parseInt(prompt("Enter a number to show its multiplication table"))
// var tableLength = parseInt(prompt("Enter length multipication table"))
// var output = `Multiplication table of ${tableNumber}\n"<br>"`

// for (var i = 1; i <= tableLength; i++) {
//     output += `${tableNumber} x ${i} = ${tableNumber * i}\n   "<br>"`
// }
// document.write(output)


// Q:NO:4:Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange",
//     "strawberry"
// ]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]} is index of  ${i}` + "<br>")
// }


// Q:NO:6:Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a:   
// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// document.write("<h2>Counting</h2>" + "<br>", Counting)
// // b:
// var Reversecounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// document.write("<h2>Reverse Counting</h2>" + "<br>", Reversecounting)
// //c:
// var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// document.write("<h2>Even</h2>" + "<br>", Even)
// d:
// var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// document.write("<h2>Odd</h2>" + "<br>", Odd)
// e:
// var Series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]
// document.write("<h2>Series</h2>" + "<br>", Series)

// Q:NO:7:You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:


// Q:NO:8:Write a program to identify the largest number in the given array.
// var Array = [24, 53, 78, 91, 12]
// var largest = 91;
// for (i = 0; i <= largest; i++) {
//     if (Array > largest) {
//         var largest = Array[i]
//     }
// }
// document.write("Array:", Array)
// document.write("<br>" + "Largest:", largest)

// Q:NO:9:Write a program to identify the smallest number in the given array.
// var Array = [24, 53, 78, 91, 12]
// var smallest = 12;
// for (i = 0; i <= smallest; i++) {
//     if (Array > smallest) {
//         var smallest = Array[i]
//     }
// }
// document.write("Array:", Array)
// document.write("<br>" + "Smallest:", smallest)