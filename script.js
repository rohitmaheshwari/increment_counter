const counters = document.querySelectorAll(".counters");

counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const counterTarget = +counter.getAttribute('data-target'); // converting into number from string
        // const counterTarget = Number(counter.getAttribute('data-target')); // converting into number from string
        // const counterTarget = parseFloat(counter.getAttribute('data-target')); // converting into number from string
        const startingCount = +counter.innerHTML;
        const incr = Math.round(counterTarget / 100);
        if(startingCount < counterTarget) {
            counter.innerHTML = `${startingCount + incr}`;
            setTimeout(updateCounter, 10);
        }
        else {
            counter.innerHTML = counterTarget;
        }
        return counterTarget;
    }

    // updateCounter();
    updateCounter();
});