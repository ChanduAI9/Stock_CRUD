document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "/api/stocks/";
    const stockList = document.getElementById("stockList");
    const stockForm = document.getElementById("stockForm");

    // Fetch and display the list of stocks
    async function fetchStocks() {
        const response = await fetch(apiUrl);
        const stocks = await response.json();
        stockList.innerHTML = '';  // Clear the current stock list
        stocks.results.forEach(stock => {
            displayStock(stock);
        });
    }

    // Display a stock in the list
    function displayStock(stock) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${stock.name} (${stock.ticker_symbol}) - $${stock.price}</span>
            <div>
                <button class="btn btn-warning edit" data-id="${stock.id}">Edit</button>
                <button class="btn btn-danger delete" data-id="${stock.id}">Delete</button>
            </div>
        `;
        stockList.appendChild(li);
    }

    // Handle form submission to add a new stock
    stockForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const name = document.getElementById("stockName").value;
        const ticker = document.getElementById("tickerSymbol").value;
        const price = document.getElementById("stockPrice").value;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, ticker_symbol: ticker, price }),
        });

        if (response.ok) {
            const newStock = await response.json();
            displayStock(newStock);
            stockForm.reset();
        } else {
            alert("Error adding stock");
        }
    });

    // Handle click events for editing and deleting stocks
    stockList.addEventListener("click", async function (e) {
        const stockId = e.target.dataset.id;
        if (e.target.classList.contains("delete")) {
            const response = await fetch(`${apiUrl}${stockId}/`, { method: "DELETE" });
            if (response.ok) {
                e.target.closest("li").remove();
            } else {
                alert("Error deleting stock");
            }
        }

        if (e.target.classList.contains("edit")) {
            const name = prompt("Enter new name:");
            const ticker = prompt("Enter new ticker symbol:");
            const price = prompt("Enter new price:");

            if (name && ticker && price) {
                const response = await fetch(`${apiUrl}${stockId}/`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, ticker_symbol: ticker, price }),
                });

                if (response.ok) {
                    const updatedStock = await response.json();
                    e.target.closest("li").querySelector("span").innerText = `${updatedStock.name} (${updatedStock.ticker_symbol}) - $${updatedStock.price}`;
                } else {
                    alert("Error updating stock");
                }
            }
        }
    });

    // Initially fetch and display all stocks
    fetchStocks();
});
