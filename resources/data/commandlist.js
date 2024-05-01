const commands = [
    {
        name: "clear",
        info: "clear the terminal",
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
        info: "contact me",
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
        info: "some other stuff",
        type: "text",
        output: `
            <span class="glow">My friend's site</span><br>
            &emsp;- <a target="_blank" rel="noopener noreferrer" href="https://www.freezerbox.site/">freezerbox.site</a><br>
            <span class="glow">Misaki</span><br>
            &emsp;- <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/a/ca8wsp8/">Imgur</a><br>
        `
    },
    {
        name: "setup",
        info: "my pc setup",
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
            &emsp;- 1TB HDD<br>
        `,
    },
    {
        name: "random",
        info: "execute random command",
        type: "function",
        output: () => {
            let random = Math.floor(Math.random() * commands.length);
            execute(commands[random].name);
        }
    },
    {
        name: "website",
        info: "information about this website",
        type: "text",
        output: `
            I made this website using <span class="glow">HTML</span>, <span class="glow">CSS</span>, and <span class="glow">JavaScript</span>. It's hosted on GitHub Pages.<br>
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
            <span class="glow">Misaki Discord bot</span><br>
            &emsp;- General use discord bot I collaborated with my friend. Among it's capabalities is chatbot using openAI & more uneccesary stuff. Source code not public.<br>
            <span class="glow">Kitty picker</span><br>
            &emsp;- Random cat image generator I made with my friend using a free cat API. You can view the site <a target="_blank" rel="noopener noreferrer" href="https://lewdguri.github.io/kitty-picker/">here</a>.<br>
            <span class="glow">Todo List</span><br>
            &emsp;- Extremely shrimple project I made with my friend where you can track your todos. You can view the site <a target="_blank" rel="noopener noreferrer" href="https://lewdguri.github.io/todo-list/t">here</a>.<br>
        `
    },
    {
        name: "about",
        info: "if you want to know more about me",
        type: "text",
        output: `
            Hi, I'm <span class="glow">Gurian</span>. I'm a 16 year old student from <span class="glow">Czech Republic</span>. My interests include game and web development, <span class="glow">gaming (for Super Earth!)</span> and procrastinating. 
            I'm currently studying <span class="glow">IT</span> at a local high school. This website serves as a portfolio of my (beautiful) projects and a place to experiment with stuff.
        `
    }
]

let helpCommand = {
    name: "help",
    info: "list of available commands",
    type: "text",
    output: "<span class=\"glow\">help</span><br> &emsp;- list of all available commands<br>"
}

commands.sort((a, b) => a.name.localeCompare(b.name));

commands.forEach(command => {
    if(command.type == "secret") return;
    helpCommand.output += `
    <span class=\"glow\">${command.name}</span><br>
    &emsp;- ${command.info}<br>
    `
});
commands.push(helpCommand);