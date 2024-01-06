function sumNums(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let a = str.charAt(i);
        let nums = str.charCodeAt(i);

        if (nums >= 48 && nums <= 57) {
            sum += parseInt(a);
        }
    }

    return sum;
}

let str3 ="sdfg546cv5fgs9szdf3sSzP4dsf7sdf032ghj5dfgh8Qrrghfj1fdQEdrh5902fgh89YM";
let result = sumNums(str3);

console.log(result); 
