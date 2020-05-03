const puppeteer = require('puppeteer');


// to navegate

const user = "@@@";

const url = 'https://www.instagram.com/' + user + '/';

const comment = ["Your coment","1","2","3",'4','5','6','7','8','9'];


//bot name

const firstname = ['ehyte', 'ragdno', 'nudro' ,'bhe', 'nytra', 'torme' ,'hany','trahy','tonhy','tranhy'];

const secondname = ['fhog','fetus','drago', 'nabc', 'mhoje', 'mage','fadecx', 'sytr','baltazar','gaspar'];

console.log("Have iniciated the Bot");

const math = Math.floor(Math.random() * 10);

const botname = firstname[math] + ' '+ secondname[math];

console.log(botname);

// your information 


const user = "your user name";

const password = "your password";


(async() =>{
        
  
  //variable set


        const browser = await puppeteer.launch({headless: false});

        const page = await browser.newPage();

        console.log(botname + " has iniciated")


  
  
      //page get

      await page.goto('https://www.instagram.com/accounts/login/');

      await page.waitForSelector('input[name="username"]');
  
 
      //login
 
      await page.type('input[name="username"]', 'login');
  
      await page.type('input[name="password"]', 'password');
 
      await page.click('button[type="submit"]');


      console.log(botname + " has loged in")

     //go to a profile

     await page.waitFor(2000);

     await page.goto(url);

     //photo selection

       await page.click('div.u7YqG')



      //pohto 



     for(i=0;i<100;i++){
         var rand = Math.floor(Math.random() * 100) + 1;
  
           if(rand > 38){
  
             //like
  
             await page.waitFor(2000);
            
             await page.click('span.fr66n button');

             console.log(botname + " has liked")
  
            };
  
  
           if(rand > 74){
            
  
             //comment
  
                
                await page.waitFor(2000);
             
                await page.type('textarea.Ypffh', comment[math] );
            
                await page.click('button[type="submit"]');
            
                console.log(botname + " has commented " + comment[math] )
            };
  
  
         //skip
  
            await page.waitFor(4000);
  
            await page.click('a._65Bje');
  
            console.log(botname + " has skipped")


        }; 
        console.log(botname + " has finished")
        page.close()
    }   
)

();
