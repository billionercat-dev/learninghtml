<<<<<<< HEAD
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var slider = document.getElementById("daslider");



document.querySelector("h1").onmouseover = notevent => {
    let time = 0;

    const interval = setInterval(() => {
        notevent.target.innerText = notevent.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < time - 2) {
                    return notevent.target.dataset.value[index]
                }
                
                return alphabet[Math.floor(Math.random() * 26)]
            })    
            .join("");

        if(time >= notevent.target.dataset.value.length + 3) clearInterval(interval);

        time += 1;
    }, slider.value);
}
=======
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var slider = document.getElementById("daslider");



document.querySelector("h1").onmouseover = notevent => {
    let time = 0;

    const interval = setInterval(() => {
        notevent.target.innerText = notevent.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < time - 2) {
                    return notevent.target.dataset.value[index]
                }
                
                return alphabet[Math.floor(Math.random() * 26)]
            })    
            .join("");

        if(time >= notevent.target.dataset.value.length + 3) clearInterval(interval);

        time += 1;
    }, slider.value);
}
>>>>>>> 521a4f0a5b9c6a3a42e94300a7ba10ac2f598f2a
