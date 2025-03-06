document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

    const createPromise = (num) => new Promise(resolve => {
        const time = (Math.random() * 2 + 1).toFixed(3);
        setTimeout(() => resolve({ name: `Promise ${num}`, time }), time * 1000);
    });

    Promise.all([createPromise(1), createPromise(2), createPromise(3)]).then(results => {
        output.innerHTML = results.map(({ name, time }) => `<tr><td>${name}</td><td>${time}</td></tr>`).join("");
        const totalTime = Math.max(...results.map(r => r.time));
        output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
    });
});
