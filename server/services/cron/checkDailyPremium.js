import cron from 'node-cron';
import {checkPremiumReminders} from '../remind-service.js';


cron.schedule("0 8 * * *", async ()=>{
      console.log("Checking premium reminders..."); 
      try{
        await checkPremiumReminders();
      }catch(error){
  console.error(
      "Premium reminder error:",
      error
    );
      }
})