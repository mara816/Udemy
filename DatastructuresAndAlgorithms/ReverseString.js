// 'Hi my name is Mathias'

function reverse(str) {

    // Check the input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Thats not good!';
    }

    const backwardsArray = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--){
        backwardsArray.push(str[i]);
    }
    console.log(backwardsArray);

    return backwardsArray.join('');
   // return backwardsArray.toString;
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

reverse2('Hi my name is Mathias');
reverse('Hi my name is Mathias');
