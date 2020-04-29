const puppeteer = require('puppeteer');




(async () => {
  //page get
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitForSelector('input[name="username"]');
  
  //login
  await page.type('input[name="username"]', 'bot_g4lile0');
  await page.type('input[name="password"]', 'Insta123');
  await page.click('button[type="submit"]');

 //go to a # 
 await page.waitFor(2000);
 await page.goto('https://www.instagram.com/explore/tags/fofa/');
 
 //photo selection
 await page.click('div.eLAPa')


//pohto like


for(i=0;i<100;i++){
  var rand = Math.floor(Math.random() * 100) + 1;
if(rand > 38){

  //like
await page.waitFor(2000);
await page.click('button.wpO6b');
};

if(rand > 74){

//comment
  await page.type('textarea.Ypffh', 'Lindaaa❤️❤️');
  await page.click('button[type="submit"]');
  await page.waitFor(2000);
};

//follow 
await page.click('button.oW_lN');
await page.waitFor(1000);



//skip
await page.waitFor(4000);
await page.click('a._65Bje');

};

page.close()
})();



