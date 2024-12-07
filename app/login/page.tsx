"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-8 pt-36 px-24">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-wide flex flex-row justify-center items-center space-x-2 text-[#4d1414]">
          <div>Welcome Back! 🌟</div>
        </h1>
        <p className="text-xl text-[#4d1414]">
          Get ready to dive into the world of <b>Sanskriti</b> and embrace the festive vibes! 🎉 Please login to continue your journey.
        </p>
      </div>

      {/* Login Form Card */}
      <Card className="w-[50vw] bg-yellow-300 bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#4d1414]">Login to Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-6">
            {/* Username and Password Fields */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-[#4d1414]">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username 🌸"
                className="mt-1 bg-yellow-100 text-[#4d1414]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#4d1414]">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Don't worry, it's safe with us 🔒"
                className="mt-1 bg-yellow-100 text-[#4d1414]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button className="w-fit flex justify-center items-center font-bold bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg transition-all shadow-md text-[#4d1414] mt-4">
                Log In ✨
              </button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Additional Options */}
      <div className="text-center space-y-2">
        <p className="text-[#4d1414]">
          New here? <a href="/signup" className="text-yellow-600 font-bold underline">Sign up now! 🎉</a>
        </p>
        <p className="text-[#4d1414]">
          Forgot your password? <a href="/reset" className="text-yellow-600 font-bold underline">Reset it here! 🔄</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
