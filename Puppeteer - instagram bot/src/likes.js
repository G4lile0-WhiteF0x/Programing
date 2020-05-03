const puppeteer = require('puppeteer');

const rash = "likeforlikes";

const url = 'https://www.instagram.com/explore/tags/' + rash + '/';


const firstname = ['ehyte', 'ragdno', 'nudro' ,'bhe', 'nytra', 'torme' ,'hany','trahy','tonhy','tranhy'];

const secondname = ['fhog','fetus','drago', 'nabc', 'mhoje', 'mage','fadecx', 'sytr','baltazar','gaspar'];

const math = Math.floor(Math.random() * 10);

const botname = firstname[math] + ' '+ secondname[math];

console.log(botname);

const user = "your user name";

const password = "your password";


(async () => {
   //variable set

     
     const browser = await puppeteer.launch({headless: false});
    
     const page = await browser.newPage();

     console.log(botname + " has iniciated")
  
   //page get

     
     await page.goto('https://www.instagram.com/accounts/login/');
   
     await page.waitForSelector('input[name="username"]');
  
   //login

    
     await page.type('input[name="username"]', user);
    
     await page.type('input[name="password"]', password);
     
     await page.click('button[type="submit"]');

     console.log(botname + " Has loged in")
  
  
     //go to a # 


     await page.waitFor(2000);
 
     await page.goto(url);
  
   //photo selection
 
     await page.click('div.u7YqG')


   //pohto


     for(i=0;i<100;i++){
       
      var rand = Math.floor(Math.random() * 100) + 1;
       
        if(rand > 28){

         //like
         
         await page.waitFor(2000);
         
         await page.click('button.wpO6b');
        
         console.log(botname +  " have liked");

        };
        
       //skip
         
         await page.waitFor(4000);
         
         await page.click('a._65Bje');

         console.log(botname + " has commented")
      };

    page.close()
  }
)

();



