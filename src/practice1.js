export { parseData };

function parseData(input) {
    const output = new Array(input.data.length);
    for (let i = 0; i < input.data.length; i++) {
        output[i] = {
            name: (input.data)[i][0],
            age: (input.data)[i][1],
            gender: (input.data)[i][2],
            birthday: (input.data)[i][3]
        };
    }
    return output;
}
