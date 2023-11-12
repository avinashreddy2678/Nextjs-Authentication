import User from "@/app/models/User/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/app/dbConfig/dbConfig";
import jwt from "jsonwebtoken";

connect();
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ status: 404, message: "User Not found" });
  }
  const validatePassword =bcryptjs.compare(password, user.passwprd);
  if (!validatePassword) {
    return NextResponse.json({
      status: 404,
      message: "Password is not correct",
    });
  }
  const tokenData = {
    id: user._id,
    name: user.name,
  };
  const token = await jwt.sign(tokenData, process.env.SECREAT!, {
    expiresIn: "1hr",
  });
  const response = NextResponse.json({
    message: "LoggedIn Success",
    
  });
  response.cookies.set("token", token);
  return response;
}
