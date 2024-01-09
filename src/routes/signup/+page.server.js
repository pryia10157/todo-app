import * as fs from "fs";
import { redirect } from '@sveltejs/kit';


export const actions = {
    default: async( { request } ) => {
        const formData = await request.formData();
        console.log(...formData);
        
        const user = {};
        formData.forEach((value,key) => user[key] = value);
        const jdata = JSON.stringify(user);

        

        console.log(jdata);


        fs.writeFile("user.json", jdata, (error) => {
            if (error) {
              console.error(error);
              throw error;
            }
    
          });

          throw redirect(302,"/login");

    }
}