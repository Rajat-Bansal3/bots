import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://timepaz.com/EyeTest/");

  await page.waitForSelector("#index > div.btns > button");

  await page.click("#index > div.btns > button");

  const waitForTimeout = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  let score = 0;
  let continueGame = true;

  setTimeout(() => {
    continueGame = false;
    console.log("Game duration reached. Exiting loop.");
  }, 60000);
  const clickSpanWithDifferentStyle = async () => {
    while (continueGame) {
    //   await waitForTimeout(1);

      const spanElements = await page.$$("#box > span");

      for (const span of spanElements) {
        try {
          await span.click();
        } catch (error) {}
      }
      score++;

      if (spanElements.length === 0) {
        console.log("No more span elements found. Exiting loop.");
        break;
      }
    }

    return score;
  };

  const finalScore = await clickSpanWithDifferentStyle();
  console.log("Final Score:", finalScore);

  await browser.close();
})();
