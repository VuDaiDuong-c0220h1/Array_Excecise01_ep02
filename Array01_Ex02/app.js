let num = prompt("Nhập một số: ");
let numstr = num.toString();
let result = [numstr[0]];
for (x = 1; x < numstr.length; x++) {
    if ((numstr[x-1] % 2 === 0) && (numstr[x] % 2 === 0)) {
        result.push(" - ", numstr[x]);
    } else {
        result.push(numstr[x]);
    }
}
document.write(result.join(""));