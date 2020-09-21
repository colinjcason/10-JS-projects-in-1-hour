const text = 'I love Christmas!';

// let index = 0

// function run() {
//     document.body.innerText = text.slice(0, index);

//     index++

//     if(index > text.length) {
//         index = 0
//     }
// }

// setInterval(run, 200)

let index = 0;
run = () => {
    document.body.innerText = text.slice(0, index);
    index++;
    index > text.length ? index = 0 : null;
}

setInterval(run, 100);