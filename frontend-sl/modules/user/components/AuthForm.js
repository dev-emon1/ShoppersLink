"use client";
import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Facebook,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function AuthForm({ mode = "login" }) {
  const isLogin = mode === "login";
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-main/20 via-main/50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-xl pt-8">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? "Sign in to access your account"
              : "Join us to start shopping"}
          </p>
        </div>

        {/* Form Container */}
        <div className="px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full py-3 px-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full py-3 px-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full py-3 px-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required={!isLogin}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="block w-full py-3 px-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-main transition-colors"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-main focus:ring-main"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-main hover:text-mainHover font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-main text-white py-3 px-4 rounded-lg font-semibold hover:bg-mainHover transition-all duration-200 flex items-center justify-center"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 flex items-center hover:bg-blue-300">
                <FcGoogle />
                <span className="pl-[10px]" style={{ paddingLeft: "10px" }}>
                  Google
                </span>
              </button>
              <button className="w-full justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 flex items-center hover:bg-blue-300">
                <FaFacebook className="text-blue-600" />
                <span className="pl-[10px]" style={{ paddingLeft: "10px" }}>
                  Facebook
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              {isLogin ? (
                <Link
                  href="/user/register"
                  className="ml-1 text-main hover:text-mainHover font-medium"
                >
                  Sign up
                </Link>
              ) : (
                <Link
                  href="/user/login"
                  className="ml-1 text-main hover:text-mainHover font-medium"
                >
                  Sign in
                </Link>
              )}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-2 text-center">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
