import { getDatafromToken } from "@/app/helpers/getDataFromToken";
import User from "@/app/models/User/UserModel";
import { NextRequest,NextResponse } from "next/server";
export async function GET(request:NextRequest) {
    const id=await getDatafromToken(request);
    const user=await User.findOne({_id:id}).select("-password")
    return NextResponse.json({user})
}