const container = document.getElementById("command-field");
const cursor = document.querySelector(".cursor");

const command = "projects";
const result = `
  public projects = [
  &nbsp;&nbsp; this homepage (html, css and js)
  &nbsp;&nbsp; <a href="https://harbourscapes.de" target="_blank">harbourscapes.de</a> (nuxt.js, tailwind, go gin)
  &nbsp;&nbsp; <a href="http://fulladder.de:8069/" target="_blank">a highly secure whatsapp clone</a> (nuxt.js, tailwind, python websockets, fastapi) (still in early alpha)
  ]
  private projects = [
  &nbsp;&nbsp; HomeAssistant,
  &nbsp;&nbsp; n8n,
  &nbsp;&nbsp; <a href="https://weareone-robotics.de/" target="_blank">WeAreOne First Lego League</a>
  &nbsp;&nbsp; and many more
  ]
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
