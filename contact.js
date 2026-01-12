const container = document.getElementById("command-field");
const cursor = document.querySelector(".cursor");

const command = "contact";
const result = `
  email = "carljohann@robotik.ag"
  phone = "+49 1575 2733477"
  telegram = "https://t.me/carljohannstempel"
  discord = "gandalf_279"
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
