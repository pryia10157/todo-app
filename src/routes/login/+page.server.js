import { redirect } from '@sveltejs/kit';
import * as fs from "fs";

/**@type {import('./$types').Actions} */
export const actions = {
    default: async ( {cookies, request} ) => {
        const formData = await request.formData()
        const username = formData.get("username");
        const password = formData.get("password");

        console.log(... formData)

     
        const data = fs.readFileSync("user.json");
        
        const user = JSON.parse(data);

        if(username == user.username && password == user.password){

            cookies.set("access", "true", {path:"/", sameSite: "strict"});
            throw redirect(302,"/todo");
            }
            else{
                throw redirect(302,"/login");
            }
    },
};