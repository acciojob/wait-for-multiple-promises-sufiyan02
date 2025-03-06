document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

    const createPromise = (num) => new Promise(resolve => {
        const time = (Math.random() * 2 + 1).toFixed(3);
        setTimeout(() => resolve({ name: `Promise ${num}`, time }), time * 1000);
    });

    Promise.all([createPromise(1), createPromise(2), createPromise(3)]).then(results => {
        document.getElementById("loading").remove(); // Remove loading row

        results.forEach(({ name, time }) => {
            const row = `<tr><td>${name}</td><td>${time}</td></tr>`;
            output.insertAdjacentHTML("beforeend", row);
        });

        const totalTime = Math.max(...results.map(r => parseFloat(r.time)));
        output.insertAdjacentHTML("beforeend", `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`);
    });
});
