import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "user already exicts" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedpassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedpassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "user created successfully",
      status: 201,
      savedUser,
    });
  } catch (error: any) {
    // console.log("error creating user", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
