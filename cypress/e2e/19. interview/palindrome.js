
function is_palindrome(word)
{
    n = word.length
    for(i = 0; i < Math.floor(n/2); i++)
        {
            if (word[i] !== word[n - i - 1])
            return false                        //! for single statement we don't need to use curly braces
        }
    return true
}

const word = 'racecar'
n = word.length
console.log(n/2)
console.log(`${word} is palindrome`, is_palindrome(word))

//* OR

if(is_palindrome(word))
 console.log(`${word} is palindrome`)
else
console.log(`${word} is not a palindrome`)
