function move(array, a, b)
{
    pomArray = array.slice(a, b+1);
    firstEl = pomArray.shift();

    pomArray.push(firstEl);

    for (let i = pomArray.length-1; i => 0; i--) {
        element = pomArray[i];
        array.splice(a, 0, element)
    }
}
move([1, 2, 3, 4, 5], 0, 2);