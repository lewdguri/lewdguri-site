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
        info: "other stuff",
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
    }
]

let helpCommand = {
    name: "help",
    info: "list of available commands",
    type: "text",
    output: "<span class=\"glow\">help</span><br> &emsp;- list of all available commands<br>"
}

let zazu = {
    name: "zazu",
    info: "what are you lookin at",
    type: "text",
    output: `<img src="https://i.redd.it/k5v48axtppqc1.jpeg" width="250px" height="250px">`
}

commands.sort((a, b) => a.name.localeCompare(b.name));

commands.forEach(command => {
    helpCommand.output += `
    <span class=\"glow\">${command.name}</span><br>
    &emsp;- ${command.info}<br>
    `
});
commands.push(helpCommand);
commands.push(zazu);