const formElement = document.getElementById("form");
const answerElement = document.getElementById("answer");
const loaderElement = document.getElementById("loader");

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    loaderElement.style.display = "block"; 

    try {
        setTimeout(async () => {
            await loadGender(name);
            loaderElement.style.display = "none"; 
        }, 2000); 
    } catch (error) {
        console.error("Error loading gender information:", error);
        loaderElement.style.display = "none"; 
    }

    event.target.name.value = "";
});

async function loadGender(name) {
    try {
        const res = await fetch(`https://api.genderize.io/?name=${name}`);
        if (!res.ok) {
            throw new Error("Failed to fetch gender information");
        }
        const obj = await res.json();
        console.log(obj);
        const { name: firstName, gender, probability } = obj;

        answerElement.textContent = `Name: ${firstName} Gender: ${gender} Probability: ${probability}`;
        answerElement.innerHTML = `Name: <span class="highlight">${firstName}</span> Gender: <span class="highlight">${gender}</span> Probability: <span class="highlight">${probability}</span>`;
        answerElement.classList.add("answerElement");
    } catch (error) {
        throw error;
    }
}
