import User from "@/app/Models/UserModal";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const user = await User.findOne({ email });

    //checking whether user exist or not
    if (user) {
      return NextResponse.json({ message: "User already Exists" });
    }

    //hashing password
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //saving
    await newUser.save();
    return NextResponse.json({ message: "User Sign up Success" });
  } catch (error) {
    console.log(error);
  }
}
