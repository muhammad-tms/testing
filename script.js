document.addEventListener("DOMContentLoaded", () => {
    const addNameButton = document.getElementById("add-name");
    const nameList = document.getElementById("name-list");
    const generateCertificatesButton = document.getElementById("generate-certificates");
  
    // Add a new name input field
    addNameButton.addEventListener("click", () => {
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.classList.add("name-input");
      nameInput.placeholder = "Enter a name";
      nameList.appendChild(nameInput);
    });
  
    // Generate certificates
    generateCertificatesButton.addEventListener("click", async () => {
      const templateLink = document.getElementById("template-link").value;
      const nameInputs = document.querySelectorAll(".name-input");
      const names = Array.from(nameInputs).map(input => input.value).filter(name => name.trim() !== "");
  
      if (!templateLink || names.length === 0) {
        alert("Please provide a template link and at least one name.");
        return;
      }
  
      try {
        // Simulate certificate generation
        const certificates = names.map(name => {
          return {
            name,
            link: `${templateLink}&name=${encodeURIComponent(name)}`
          };
        });
  
        // Automatically download certificates
        certificates.forEach(cert => {
          const link = document.createElement("a");
          link.href = cert.link;
          link.download = `${cert.name}-certificate.pdf`;
          link.click();
        });
  
        alert("Certificates generated successfully!");
      } catch (error) {
        console.error("Error generating certificates:", error);
        alert("An error occurred while generating certificates.");
      }
    });
  });
  