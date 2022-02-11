let coba: Array<any> = ["abc", "cde", 123];

let coba1: number = 1234;

let newCoba: Array<string> = []

for (const eachCoba of coba) {
    eachCoba['new'] = 
    newCoba.push(eachCoba.toString());
}

console.log(newCoba);
