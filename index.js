// index.js
const container = document.getElementById("command-field");
const cursor = document.querySelector(".cursor");

function calculateAge(birthDateString) {
    // Convert the birthdate string into a Date object
    const birthDate = new Date(birthDateString);
    const today = new Date();

    // Calculate age in years
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

const command = "whoami";
const result = `
  name = "Carl Johann Stempel"
  age = ${calculateAge("2010-09-27")}
  techstack = ["tailwind", "nuxt.js", "python"]
  currentlyLearning = ["go", "assembly", "C"]
`;


let charIndex = 0;



function typeCommand() {
    if (charIndex < command.length) {
        container.innerHTML += command.charAt(charIndex);
        charIndex++;
        const typingSpeed = 50 + Math.random() * 100; // random for realism
        setTimeout(typeCommand, typingSpeed);
    } else {
        // Command finished, show result after short pause
        setTimeout(() => {
            container.innerHTML += "<br>" + result.replace(/\n/g, "<br>");
        }, 300); // pause before showing result
    }
}

typeCommand();
