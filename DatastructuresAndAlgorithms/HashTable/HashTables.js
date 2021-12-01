let user  ={
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhh!');
    }
}

console.log(user.age) // O(1)
console.log(user.spell = 'abra kadabra'); // O(1)
user.scream(); // O(1)

const a = new Map()
const b = new Sets();