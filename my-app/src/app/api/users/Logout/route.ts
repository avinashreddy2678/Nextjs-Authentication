import { NextResponse } from "next/server";
export async function GET() {
    try {
        const response=NextResponse.json({
            message:"Logout success"
        })
        response.cookies.set("token","",{httpOnly:true})
        return response;
    } catch (error) {
        console.log(error)
    }
    
}