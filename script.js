document.addEventListener("DOMContentLoaded", () => {
    const addNameButton = document.getElementById("add-name");
    const nameInput = document.getElementById("name-input");
    const namesList = document.getElementById("names-list");
    const generateCertificatesButton = document.getElementById("generate-certificates");
    const templateLinkInput = document.getElementById("template-link");

    // Add name to the list
    addNameButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            const listItem = document.createElement("li");
            listItem.classList.add("name-item");

            const nameSpan = document.createElement("span");
            nameSpan.textContent = name;
            listItem.appendChild(nameSpan);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-name");
            removeButton.addEventListener("click", () => {
                namesList.removeChild(listItem);
            });

            listItem.appendChild(removeButton);
            namesList.appendChild(listItem);
            nameInput.value = "";
            nameInput.focus();
        }
    });

    // Add name when pressing Enter
    nameInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addNameButton.click();
        }
    });

    // Generate certificates
    generateCertificatesButton.addEventListener("click", () => {
        const templateLink = templateLinkInput.value.trim();
        if (!templateLink) {
            alert("Please provide a Google Slide template link.");
            return;
        }

        const names = Array.from(namesList.children).map(item => item.querySelector("span").textContent);
        if (names.length === 0) {
            alert("Please add at least one name.");
            return;
        }

        names.forEach(name => {
            // Assuming you have a mechanism to generate certificates using the template
            // Here you can call a backend API or use Google Slides API to generate certificates
            console.log(`Generating certificate for ${name} using template: ${templateLink}`);
            // For simplicity, we just log it to console here
        });

        alert("Certificates have been generated.");
    });
});
