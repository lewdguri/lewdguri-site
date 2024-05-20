const userInput = document.querySelector("#input");
const userInputArea = document.querySelector(".terminal-input-area");
let previousCommands = [];
let userInputs = "";
let counter = 0;
let isDesktop = window.matchMedia("(min-width: 700px)").matches;

//auto scroll to bottom & prevent arrow keys from scrolling
let terminalContainer = document.querySelector('.terminal-container');
let observer = new MutationObserver(() => {
    terminalContainer.lastElementChild.scrollIntoView({ behavior: "auto", block: "end" });
});
observer.observe(terminalContainer, { childList: true });

window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

//media query
let x = window.matchMedia("(max-width: 700px)")

x.addEventListener("change", function() {
    isDesktop = window.matchMedia("(min-width: 700px)").matches;
});

//user input
document.querySelector("#input").addEventListener("keydown", (event) => {
    userInputs += event.key;
    if(userInputs.match(/ArrowUpArrowRightArrowDownArrowDownArrowDown/g)) {
        window.open("./resources/images/interesting.png", '_blank').focus();
        userInputs = "";
    };
    
    if(event.key == "Enter") {
        let [executedCommand, ...args] = userInput.value.split(" ");
        update();
        execute(executedCommand, args);
        userInput.value = "";
        counter = 0;
    } else if(event.key == "ArrowUp") {
        counter = Math.min(counter+1, previousCommands.length);
        userInput.value = previousCommands[counter-1] || "";
    } else if(event.key == "ArrowDown") {
        counter = Math.max(counter-1, 0);
        userInput.value = previousCommands[counter-1] || "";
    }
});

//execute user input
const execute = (command, args) => {
    for(let i = 0; i < commands.length; i++) {
        if(commands[i].name.split(" ")[0] == command) {
            if(commands[i].type == "function") {
                commands[i].output(args);
                return;
            } else if(args.length == 0){
                print(commands[i].output);
                return;
            }
        }
    }
    error(`` + command + ` ` + args.join(" "));
};

//print something
const print = (text) => {
    let output = document.createElement("div");
    let p = document.createElement("p");

    output.appendChild(p);

    p.innerHTML = text;
    document.querySelector(".terminal-container").insertBefore(output, userInputArea);
}

//update terminal
const update = () => {
    let record = document.createElement("div");
    let prompt = document.createElement("span");
    let span = document.createElement("span");

    record.appendChild(prompt);
    record.appendChild(span);
    record.classList.add("terminal-record");

    prompt.innerHTML = "&gt;";
    prompt.classList.add("terminal-prompt");

    span.innerHTML = userInput.value;
    document.querySelector(".terminal-container").insertBefore(record, userInputArea);
    previousCommands.unshift(userInput.value);
}

//add error message
const error = (command) => {
    let p = document.createElement("p");
    p.innerHTML = `
        <span style="color: red;">command not found: ${command}</span><br>
        Type 'help' to view a list of available commands
    `;
    document.querySelector(".terminal-container").insertBefore(p, userInputArea);
};