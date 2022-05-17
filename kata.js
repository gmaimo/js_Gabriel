//Given an array of integers.Return an array, where the first element is the count of positives numbers
//and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

/* function countPositivesSumNegatives(input){
    let posCount = 0;
    let negSum = 0;
    if(input === null || input.length === 0){
        return [];
    } else {
        input.filter(num => num > 0 ? posCount++ : negSum += num);
    }
    return [posCount, negSum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); */


//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
//We want to create the text that should be displayed next to such an item.
//Implement the function which takes an array containing the names of people that like an item. 
//It must return the display text as shown in the examples:

/* function likes(names) {
    if (names.length == 0) return (`no one likes this`);
    if (names.length == 1) return (`${names[0]} likes this`);
    if (names.length == 2) return (`${names[0]} and ${names[1]} like this`);
    if (names.length == 3) return (`${names[0]}, ${names[1]} and ${names[2]} like this`);
    else return (`${names[0]}, ${names[1]} and ${names.length-2} others like this`)
} */

//Complete the solution so that it reverses the string passed into it.

//imperative solution
/* function solution(str){
    let reversed = "";
    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(solution("hola")); */

//functional solution

/* function solution(str){
    return str.split('').reverse().join('');  
}

console.log(solution("hola"));
 */


//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

/* function removeChar(str){
    return str.slice(1,-1);
}; */