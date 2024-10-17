/* #1 - Looping a Trianagle
Write a loop that makes n calls to console.log to output the following triangle:
Example with n equals 7. Your program should work by only having to change the variable n.
#
##
###
####
#####
######
#######
*/
console.log("== Looping a Triangle ==")
for (let n = 1; n <= 7; n = n + 1) {
    console.log("#".repeat(n))
}

/* #2 - FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For
numbers divisible by 3, print ”Fizz” instead of the number, and for numbers divisible by 5 (and not 3),
print ”Buzz” instead.
When you have that working, modify your program to print ”FizzBuzz” for numbers that are divisible
by both 3 and 5 (and still print ”Fizz” or ”Buzz” for numbers divisible by only one of those).
*/
console.log("== FizzBuzz ==")
for (let x = 1; x <= 100; x = x + 1) {
    if (x % (3 * 5) == 0) {
        console.log("FizzBuzz")
    } else if (x % 3 == 0) {
        console.log("Fizz")
    } else if (x % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(x)
    }
}

/* #3 - Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate
lines. At each position of the grid there is either a space or a ”#” character. The characters should form
a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #             (even rows start with space)
 # # # #            (odd rows start with # char)
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program
so that it works for any size, outputting a grid of the given width and height.
*/
console.log("== Chessboard ==")

let row_max = 8
let col_max = 8

for (let row = 0; row < row_max; row = row + 1) {
    if (row % 2 == 0) {
        console.log(" #".repeat(col_max / 2))
    } else {
        if (col_max % 2 == 0) {
            //if even columns this works
            console.log("# ".repeat(col_max / 2))
        } else {
            //if odd columns need extra '#' at end
            console.log("# ".repeat(col_max / 2) + "#")
        }
    }
}
