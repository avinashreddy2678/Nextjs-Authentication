import User from "@/app/Models/UserModal";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
connect();
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "No user Found" });
  }
  const validPassword = await bcryptjs.compare(password, user.password);
  if (!validPassword) {
    return NextResponse.json({ message: "Password Not Matched" });
  }
  const tokenData = {
    id: user._id,
  };
  const token = await jwt.sign(tokenData, process.env.SECREAT!, {
    expiresIn: "1hr",
  });
  const response = NextResponse.json({
    message: "Logged in Success",
  });
  response.cookies.set("token", token);
  return response;
}
