const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
    }, 50);
}
