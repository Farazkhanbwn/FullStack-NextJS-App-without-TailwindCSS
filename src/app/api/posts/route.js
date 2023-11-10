import Post from "../../../models/Post";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  // fetch

  try {
    await connect();
    const posts = await Post.find(username && { username });
    const post = JSON.stringify(posts);
    return new NextResponse(post, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();
    await newPost.save();
    return new NextResponse("Post has been Created", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
