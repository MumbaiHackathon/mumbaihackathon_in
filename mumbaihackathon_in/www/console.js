class EmuTerm {
    constructor(container, options) {
        this.container = container;
        this.line_buffer = [];
        this.options = options;
        this.make_container();
        this.refresh_lines();
    }

    make_container() {
        this.container.innerHTML = this.get_template();
        this.lines_container = this.container.querySelector('.console-lines');
        this.command_input = this.container.querySelector('.console-input-command');
        this.interactive_input = this.container.querySelector('.console-input-interactive');

        this.command_input.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.handle_command(e.target);
            }
        })
    }

    handle_command(target) {
        const command = target.value
        let return_value = this.options.handleCommand(command);

        if (return_value === false) {
            this.write_console([
                this.chalk('> ' + command),
                `${this.chalk('command not found: ', 'pink')} ${command}`
            ])
            target.value = ""
            return;
        }

        this.write_console(this.chalk('> ' + command, 'blue'))

        if (Array.isArray(return_value)) {
            this.write_console(return_value);
        }

        if (return_value.call) {
            // is a function
            return_value.call(this)
        }

        target.value = ""
    }

    get_input() {
        this.command_input.setAttribute('hidden', true);
        this.interactive_input.removeAttribute('hidden');
        this.interactive_input.focus();

        return new Promise(resolve => {
            const handle_input = (e) => {
                if (e.key === 'Enter') {
                    this.interactive_input.removeEventListener('keydown', handle_input);
                    this.interactive_input.setAttribute('hidden', true);
                    this.command_input.removeAttribute('hidden');
                    const value = e.target.value;
                    e.target.value = '';
                    resolve(value);
                }
            }
            this.interactive_input.addEventListener('keydown', handle_input);
        })
    }

    clear_console() {
        this.line_buffer = [];
        this.refresh_lines();
    }

    navigate(page) {
        var pageObject = this.options.pages.find(obj => {
            return obj.page === page
        })
        window.open(pageObject.link, `_${pageObject.place}`);
    }

    write_console(lines) {
        if (typeof lines === 'string') {
            lines = [lines]
        }
        this.line_buffer = this.line_buffer.concat(lines);
        this.refresh_lines();
    }

    refresh_lines() {
        const lines_html = this.line_buffer.map((content, i) =>
            `<p class="my-5" data-type="empty" data-line-no="${i}">${content || '&nbsp;'}</p>`).join('');
        this.lines_container.innerHTML = lines_html;
        this.lines_container.scrollTop = this.lines_container.scrollHeight;
    }

    parse(command) {
        let parsed = {}
        let intermediate = command.split(/\--+/).splice(1)
        intermediate.forEach((arg_item) => {
            parsed[arg_item.split(/\s+/)[0]] = arg_item.split(/\s+/).splice(1)
        })
        return parsed;
    }

    chalk(value, color, width) {
        // pink, blue, green
        return `<span class="console-${color}"
            style="display: inline-block; min-width: ${width}px;">${value}</span>`
    }

    get_template() {
        return `
            <div id="console" class="console">
                <div>
                    <svg width="5%" viewBox="0 0 109 26" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                        <g transform="matrix(1,0,0,1,-263,-590)">
                            <g transform="matrix(1,0,0,2.5,0,-134)">
                                <g transform="matrix(0.816387,0,0,0.816387,49.1066,52.5212)">
                                    <g transform="matrix(1,0,0,0.4,102,105.6)">
                                        <circle cx="277.5" cy="477.5" r="15.5" style="fill:rgb(106,204,68);" />
                                    </g>
                                    <g transform="matrix(1,0,0,0.4,51,105.6)">
                                        <circle cx="277.5" cy="477.5" r="15.5" style="fill:rgb(247,188,51);" />
                                    </g>
                                    <g transform="matrix(1,0,0,0.4,0,105.6)">
                                        <circle cx="277.5" cy="477.5" r="15.5" style="fill:rgb(235,94,86);" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="console-lines" style="height: ${this.options.no_of_lines * 26}px; overflow: auto;">
                </div>
                <div class="command_area">
                    <span>>&nbsp;</span>
                    <input autofocus autocomplete="off" id="command" class="console-input console-input-command outline-none" placeholder="start typing" />
                    <input autofocus autocomplete="off" id="command" class="console-input console-input-interactive outline-none" placeholder="start typing" hidden/>
                </div>
            </div>
        `;
    }
}

let pages = {
    'rules': '/rules',
    'about': '/about',
    'winners': '/winners'
}

const t = new EmuTerm(document.getElementById('terminal'), {
    no_of_lines: 12,
    handleCommand(command) {
        if (command === 'help') {
            return [
                'Available commands:',
                `${t.chalk('register', 'yellow', '150')} Register your team.`,
                `${t.chalk('about', 'yellow', '150')} About Mumbai Hackathon.`,
                `${t.chalk('pages', 'yellow', '150')} List of pages to navigate.`,
                `${t.chalk('nav &lt;page&gt;', 'yellow', '150')} Navigate between pages.  (e.g nav rules)`,
                `${t.chalk('clear', 'yellow', '150')} Clear bash.`,
                `${t.chalk('ls', 'yellow', '150')} List directory contents.`
            ]
        }
        if (command === 'about') {
            return [
                '--------- Mumbai Hackathon 2019 (⌐■_■) ---------',
                `${t.chalk('16th and 17th March', 'yellow')}`,
                `${t.chalk('Don Bosco Institute of Technology, Kurla', 'yellow')}`,
                `${t.chalk('₹ 75,000 Cash Prize', 'yellow')}`,
                `Type the command ${t.chalk('register', 'blue')} to participate.`
            ]
        }

        if (command === 'ls') {
            return [
                'hackathon_puzzle.txt',
            ]
        }

        if (command === 'pwd') {
            return [
                '/Users/hackathon_2019/',
            ]
        }

        if (command === 'cat hackathon_puzzle.txt') {
            return [
                `In the 20×20 grid below, four numbers along a diagonal line have been marked in red.`,
                ``,
                `49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00`,
                `81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65`,
                `52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91`,
                `22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80`,
                `24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50`,
                `32 98 81 28 64 23 67 10 ${t.chalk('26', 'pink')} 38 40 67 59 54 70 66 18 38 64 70`,
                `67 26 20 68 02 62 12 20 95 ${t.chalk('63', 'pink')} 94 39 63 08 40 91 66 49 94 21`,
                `24 55 58 05 66 73 99 26 97 17 ${t.chalk('78', 'pink')} 78 96 83 14 88 34 89 63 72`,
                `21 36 23 09 75 00 76 44 20 45 35 ${t.chalk('14', 'pink')} 00 61 33 97 34 31 33 95`,
                `78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92`,
                `16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57`,
                `86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58`,
                `19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40`,
                `04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66`,
                `88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69`,
                `04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36`,
                `20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16`,
                `20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54`,
                `01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48`,
                ``,
                `The product of these numbers is 26 × 63 × 78 × 14 = 1788696.`,
                `What is the greatest product of four adjacent numbers in the`,
                `same direction (up, down, left, right, or diagonally) in the 20×20 grid?`,
            ]
        }

        if (command === 'pages') {
            return Object.keys(pages)
        }

        if (command === 'register') {
            let questions = {
                'Full Name?': 'fullname',
                'Email?': 'email',
                'Team Name? (Optional)': 'team_name',
                'Organization / Institute?': 'organization',
                'How did you hear about us? (Optional)': 'source'
            }
            return async () => {
                let values = {
                    'registration_method': 'Console'
                }

                // for (let question in questions) {
                //     const key = questions[question];
                //     t.write_console(`${t.chalk(question, 'yellow')}`);
                //     values[key] = await t.get_input();
                //     t.write_console(values[key]);
                // }

                let index = 0;
                while(Object.keys(questions)[index]) {
                    const question = Object.keys(questions)[index]
                    const key = questions[question];

                    t.write_console(`${t.chalk(question, 'yellow')}`);
                    const value = await t.get_input();
                    const required = !question.includes('Optional');
                    if (value) {
                        values[key] = value;
                        t.write_console(value);
                        index++;
                    } else if (!value && !required) {
                        index++;
                    }
                }

                frappe.call({
                    method: 'mumbaihackathon_in.api.register',
                    args: values,
                    error_msg: '<div>'
                }).then(r => {
                    let message = r.message;
                    if (message.includes('success')) {
                        message = t.chalk(message, 'green');
                    } else {
                        message = t.chalk(message, 'pink');
                    }
                    t.write_console(message);
                }).fail(r => {
                    console.log(r)
                })
            }
        }

        if (command.startsWith('nav')) {
            const page = command.split('nav')[1].trim()
            return () => {
                const url = pages[page]
                window.open(url);
                t.write_console('Navigated to ' + url)
            }
        }

        if (command === "clear") {
            return clear_console
        }

        return false;
    }
})

function clear_console() {
    t.clear_console();
    t.write_console([
        'Welcome to Mumbai Hackathon v4.0',
        'Type "help" for a list of available commands'
    ]);
}

clear_console();

// setTimeout(() => {
//     t.command_input.value = 'h'
//     setTimeout(() => {
//         t.command_input.value = 'he'
//     }, 100)
//     setTimeout(() => {
//         t.command_input.value = 'hel'
//     }, 200)
//     setTimeout(() => {
//         t.command_input.value = 'help'
//     }, 300)
//     setTimeout(() => {
//         t.handle_command(t.command_input)
//     }, 400)
// }, 2000);