
function switch_three_four (num) {
    
    num_obj = {3:4, 4:3}
    return num_obj[num]
}

num = switch_three_four(3)
num1 = switch_three_four(4)

console.log(num)
console.log(num1)
