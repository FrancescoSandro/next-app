"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(formdata: FormData) {
    const username = formdata.get("username") as string;
    const password = formdata.get("password") as string;

    const data = await cookies();
    data.set("username", username, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
        secure: false,
        path: "/"
    });
    data.set("password", password, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
        secure: false,
        path: "/"
    });
    redirect("/dashboard");
}

export async function logout() {
    (await cookies()).delete("password");
}