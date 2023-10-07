// Import required modules.
const pug = require("pug");
const fs = require("fs");

// Compile the Pug template from src/index.pug.
const compiledFunction = pug.compileFile("src/index.pug");

// Define data for widgets and icons.
let html_string = compiledFunction({
  widgetsData: [
    {
      icon: fs.readFileSync("icons/sheep-icon.svg", { encoding: 'utf-8' }),
      title: "Animal welfare",
      verifiable: true,
      description: "This product contains NATIVAtV Merino Wool, a branded fiber from certified farms that comply with strict animal welfare, land management, and ethical work policies ensured by tri-annual audits. This material has been chosen to work together with an organization that, on top of the above, also provides stress-free shearing and the prohibition of mulesing.",
    },
    {
      icon: fs.readFileSync("icons/blockchain-icon.svg", { encoding: 'utf-8' }),
      title: "Blockchain traced",
      verifiable: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  icons: {
    arrow_right: fs.readFileSync("icons/arrow-right.svg", { encoding: 'utf-8' }),
    arrow_down: fs.readFileSync("icons/arrow-down.svg", { encoding: 'utf-8' }),
    check_circle: fs.readFileSync("icons/check-circle.svg", { encoding: 'utf-8' }),
    alert_hexagon: fs.readFileSync("icons/alert-hexagon.svg", { encoding: 'utf-8' }),
  }
});

// Define the destination directory for the generated HTML.
let dest = process.argv[2] || "dist";

// Create the destination directory if it doesn't exist.
fs.mkdirSync(dest, { recursive: true });

// Write the generated HTML to a file (index.html).
fs.writeFile(`${dest}/index.html`, html_string, function (err) {
  if (err) throw err;
  console.log("Saved!");
});
