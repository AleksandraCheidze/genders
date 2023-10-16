const clientsElement = document.getElementById("clients");

async function loadClients() {
    try {
        const res = await fetch("https://aleksandracheidze.github.io/clients/clientsInfo.json");
        const clients = await res.json();
        console.log(clients);

        clients.forEach((client) => {
            const { name, email, phone } = client;

            const cardElement = document.createElement('div');
            cardElement.className = "client-card";

            const nameElement = document.createElement('div');
            nameElement.textContent = `Name: ${name}`;

            const emailElement = document.createElement('div');
            emailElement.textContent = `Email: ${email}`;

            const phoneElement = document.createElement('div');
            phoneElement.textContent = `Phone: ${phone}`;

            cardElement.appendChild(nameElement);
            cardElement.appendChild(emailElement);
            cardElement.appendChild(phoneElement);

            clientsElement.appendChild(cardElement);
        });
    } catch (error) {
        console.error("Error loading client information:", error);
    }
}

loadClients();
