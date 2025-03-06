//your JS code here. If required.
 const outputTable = document.getElementById("output");

  // Initially display "Loading..." row
  outputTable.innerHTML = `
    <tr>
      <td colspan="2" class="text-center">Loading...</td>
    </tr>
  `;

  // Function to create a promise that resolves after a random delay between 1-3 seconds
  function createPromise(index) {
    const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: `Promise ${index}`, time: delay.toFixed(3) }), delay * 1000);
    });
  }

  // Create 3 promises
  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises).then((results) => {
    // Calculate total time (max of all times)
    const totalTime = Math.max(...results.map((res) => parseFloat(res.time))).toFixed(3);
    
    // Clear the loading row
    outputTable.innerHTML = "";

    // Populate the table with results
    results.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      outputTable.appendChild(row);
    });

    // Append the total time row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    outputTable.appendChild(totalRow);
  });