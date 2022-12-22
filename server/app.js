const puppetter = require("puppeteer");

async function check() {
  const browser = await puppetter.launch();
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests/");

  await page.type("#ourfield", "blue");

  await Promise.all([
    page.click("#ourform > button"),
    page.waitForNavigation(),
  ]);

  const info = await page.$eval("#message", (el) => el.innerText);

  console.log(info);

  await browser.close();
}

//for schedueling and automation purposes
setInterval(check, 5000);

//or for more control and specification on when to run, can use npm install node-chron
