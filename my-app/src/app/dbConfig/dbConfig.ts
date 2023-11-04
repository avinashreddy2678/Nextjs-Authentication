import mongoose from "mongoose";


export  async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("connected to mongoose")
        })
        connection.on('error',(err)=>{
            console.log("connected to mongoose failed"+err);
        })

    } catch (error) {
       console.log(error) 
    }
}