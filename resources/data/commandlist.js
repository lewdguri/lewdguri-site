const commands = [
    {
        name: "clear",
        info: "Clear the terminal",
        type: "function",
        output: () => {
            let terminalContainer = document.querySelector(".terminal-container");
            while (terminalContainer.children.length > 2) {
                terminalContainer.removeChild(terminalContainer.children[1]);
            }
        }
    },
    {
        name: "contact",
        info: "Beep boop",
        type: "text",
        output: `
            <span class="glow">GitHub</span><br>
            &emsp;- <a target="_blank" rel="noopener noreferrer" href="https://github.com/lewdguri">My github profile</a><br>
            <span class="glow">Discord</span><br>
            &emsp;- gurian43
        `
    },
    {
        name: "other",
        info: "Some other stuff",
        type: "text",
        output: `
            <span class="glow">My friend's site</span><br>
            &emsp;- <a target="_blank" rel="noopener noreferrer" href="https://www.freezerbox.site/">freezerbox.site</a><br>
            <span class="glow">Rin's art gallery</span><br>
            &emsp;- <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/a/ca8wsp8/">Imgur</a><br>
        `
    },
    {
        name: "setup",
        info: "My pc setup",
        type: "text",
        output: `
            <span class="glow">CPU</span> - AMD Ryzen 7 5800X3D<br>
            <span class="glow">GPU</span> - Nvidia RTX 3070Ti Founders Edition<br>
            <span class="glow">RAM</span> - Kingston Fury 2x16GB DDR4 3200MHz<br>
            <span class="glow">Motherboard</span> - Gigabyte B550 Gaming X V2<br>
            <span class="glow">PSU</span> - LC Power Super Silent 650W<br>
            <span class="glow">Storage</span><br>
            &emsp;- 256GB SATA SSD<br>
            &emsp;- 512GB M.2 NVME SSD<br>
            &emsp;- 1TB M.2 NVME SSD<br>
            &emsp;- 1TB HDD<br>
        `,
    },
    {
        name: "flightgear",
        info: "My kit for playing flight simulators",
        type: "text",
        output: `
            <span class="glow">Joystick</span> - VKB Gunfighter MKIV<br>
            &emsp;<span class="glow>"Grip</span> - Modern Combat Grip Ultimate<br>
            &emsp;<span class="glow>"Extension</span> - 100mm extension<br>
            <span class="glow">Throttle</span> - VKB STECS MAX<br>
            <span class="glow">Rudder Pedals</span> - VKB T-Rudder MKV<br>
            <span class="glow">Head Tracking</span> - DelanClip<br>
        `,
    },
    {
        name: "random",
        info: "Execute random command",
        type: "function",
        output: () => {
            let random = Math.floor(Math.random() * commands.length);
            execute(commands[random].name.split(" ")[0]);
        }
    },
    {
        name: "website",
        info: "Information about this website",
        type: "text",
        output: `
            I made this website using <span class="glow">HTML</span>, <span class="glow">CSS</span>, and <span class="glow">JavaScript</span>. It's deployed by <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/">Vercel</a><br>
            It's a simple terminal emulator with a few commands inspired by <a target="_blank" rel="noopener noreferrer" href="https://craigfeldman.com/">craigfeldman.com</a>.<br>
            <span class="glow">Source code</span> can be found <a target="_blank" rel="noopener noreferrer" href="https://github.com/lewdguri/lewdguri-site">here</a>.<br>
            `
    },
    {
        name: "zazu",
        info: "what are you lookin at",
        type: "secret",
        output: `<img src="https://i.redd.it/k5v48axtppqc1.jpeg" width="250px" height="250px">`
    },
    {
        name: "projects",
        info: "I did some things",
        type: "text",
        output: `
            <span class="glow">This website</span><br>
            &emsp;- Simple terminal emulator I made using HTML, CSS, and JavaScript.<br>
            <span class="glow">Rin Discord bot</span><br>
            &emsp;- General use discord bot I collaborated with my friend. Among it's capabalities is chatbot using openAI & more uneccesary stuff. Source code not public.<br>
            <span class="glow">Kitty picker</span><br>
            &emsp;- Random cat image generator I made with my friend using a free cat API. You can view the site <a target="_blank" rel="noopener noreferrer" href="https://lewdguri.github.io/kitty-picker/">here</a>.<br>
            <span class="glow">Todo List</span><br>
            &emsp;- Extremely shrimple project I made with my friend where you can track your todos. You can view the site <a target="_blank" rel="noopener noreferrer" href="https://lewdguri.github.io/todo-list">here</a>.<br>
            <span class="glow">Floopert Bloopert</span><br>
            &emsp;- Low quality flappy bird knockoff. Everything is drawn by me and my friend. You can play the game <a target="_blank" rel="noopener noreferrer" href="https://lewdguri.itch.io/floopert-bloopert">here</a>.<br>
        `
    },
    {
        name: "about",
        info: "If you want to know more about me",
        type: "text",
        output: `
            Hi, I'm <span class="glow">Gurian</span>. I'm a 16 year old student from <span class="glow">Czech Republic</span>. My interests include game and web development, <span class="glow">gaming</span>, flight simming and procrastinating. 
            I'm currently studying <span class="glow">IT</span> at a local high school. This website serves as a portfolio and to showcase my (beautiful) projects.
        `
    },
    {
        name: "rps [rock/paper/scissors]",
        info: "Play rock paper scissors",
        type: "function",
        output: (playerChoice) => {
            let choices = ["rock", "paper", "scissors"];
            if(!playerChoice.some(r => choices.includes(r)) || playerChoice.length > 1) {
                if(playerChoice.length == 0) {
                    print("You need to choose rock, paper, or scissors!");
                    return;
                }
                error(`rps ${playerChoice.join(" ")}`);
                return;
            }
            let computerChoice = choices[Math.floor(Math.random() * choices.length)];
            let result = "";
            if(playerChoice == computerChoice) {
                result = "It's a tie!";
            } else if(
                playerChoice == "rock" && computerChoice == "scissors" || 
                playerChoice == "paper" && computerChoice == "rock" ||
                playerChoice == "scissors" && computerChoice == "paper"
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }
            print(result)
        }
    },
    {
        name: "help",
        info: "List of available commands",
        type: "function",
        output: (args) => {
            if(args.length == 0) {
                print(helpOutput);
            } else {
                if (!args.some(arg => commands.map(obj => obj.name.split(" ")[0]).includes(arg)) || args.length > 1) {
                    error(`help ${args.join(" ")}`);
                    return;
                }

                let command = commands.find(command => command.name.split(" ")[0] == args[0]);
                if (command) {
                    print(`<span class="glow">${command.name}</span><br> &emsp;- ${command.info}`);
                }
            }
        }
    },
    {
        name: "roll [maxNumber]",
        info: "Roll a n-dice",
        type: "function",
        output: (maxNumber) => {
            if(isNaN(maxNumber)) {
                error(`roll ${maxNumber.join(" ")}`);
                return;
            } else if(maxNumber.length != 0) {
                print(`You rolled a ${Math.floor(Math.random() * maxNumber) + 1}!`);
                return;
            }
            let randomNum = Math.floor(Math.random() * 100) + 1;
            if(randomNum == 69) {
                print("69. Nice.")
            } else {
                print(`You rolled a ${randomNum}!`);
            }
        }
    },
    {
        name: "year",
        info: "Show the progress bar of the current year",
        type: "function",
        output: () => {
            let now = new Date();
            let start = new Date(now.getFullYear(), 0, 0);
            let diff = now - start;
            let day = Math.floor(diff / (1000 * 60 * 60 * 24));
            let dayOfWeek = now.getDay() || 7;
    
            const getProgressBar = (percent, isDesktop) => {
                let length = isDesktop ? Math.round((percent * (2/3)) / 2) : Math.round((percent * (2/3)) / 4);
                let remaining = isDesktop ? 33 - length : 16 - length;
                return "#".repeat(length) + "-".repeat(remaining);
            };   
            
            let yearPercent = (day / 365) * 100;
            let monthDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
            let monthPercent = (now.getDate() / monthDays) * 100;
            let weekPercent = (dayOfWeek / 7) * 100;
    
            print(`
                <span class="glow">${now.getFullYear()}</span><br>
                Year progress: ${isDesktop? "&nbsp" : "<br>"}[${getProgressBar(yearPercent, isDesktop)}] ${yearPercent.toFixed(1)}%<br>
                Month progress: ${isDesktop? "" : "<br>"}[${getProgressBar(monthPercent, isDesktop)}] ${monthPercent.toFixed(1)}%<br>
                Week progress: ${isDesktop? "&nbsp" : "<br>"}[${getProgressBar(weekPercent, isDesktop)}] ${dayOfWeek} / 7<br>
            `);
        }
    },
    {
        name: "goals",
        info: "My current goals",
        type: "text",
        output: `
            <span class="glow">Web Dev</span><br>
            - Learn React<br>
            - Learn php<br>
            <span class="glow">Game Dev</span><br>
            - participate in a game jam<br>
            - Learn C#<br>
            <span class="glow">Other</span><br>
            - Contribute to any open source project<br>
        `
    }
]

commands.sort((a, b) => a.name.localeCompare(b.name));

let helpOutput = "";

commands.map(command => {
    if(command.type == "secret") return;
    helpOutput += `
    <span class=\"glow\">${command.name}</span><br>
    &emsp;- ${command.info}<br>
    `
});