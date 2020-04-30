const puppeteer = require('puppeteer');

const user = "@@@";
const url = 'https://www.instagram.com/' + user + '/';
const comment = ["Your coment","1","2","3",'4','5','6','7','8','9'];

(async() =>{
        //variable set


        const browser = await puppeteer.launch({headless: false});

        const page = await browser.newPage();

        console.log("Have iniciated the Bot")


  
  
      //page get

      await page.goto('https://www.instagram.com/accounts/login/');

      await page.waitForSelector('input[name="username"]');
  
 
      //login
 
      await page.type('input[name="username"]', 'login');
  
      await page.type('input[name="password"]', 'password');
 
      await page.click('button[type="submit"]');




     //go to a profile

     await page.waitFor(2000);

     await page.goto(url);

     //photo selection

     await page.click('div.eLAPa')




        //pohto 



     for(i=0;i<100;i++){
         var rand = Math.floor(Math.random() * 100) + 1;
  
           if(rand > 38){
  
             //like
  
             await page.waitFor(2000);
            
             await page.click('span.fr66n button');
  
            };
  
  
           if(rand > 74){
            
  
             //comment
  
                
                await page.waitFor(2000);
             
                await page.type('textarea.Ypffh', comment[Math.floor(Math.random() * 10)] );
            
                await page.click('button[type="submit"]');
            
  
            };
  
  
         //skip
  
            await page.waitFor(4000);
  
            await page.click('a._65Bje');
  
  


        }; 

        page.close()
    }   
)

();
