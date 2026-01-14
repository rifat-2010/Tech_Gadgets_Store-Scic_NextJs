"use client";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import {
  AiOutlineGoogle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function LoginForm() {
  const {
    googleSignIn,
    signInUser,
    user,
    loading: authLoading,
  } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);

  // Navigate to home page when user logs in
  useEffect(() => {
    if (loginAttempted && user && !authLoading) {
      router.push("/");
    }
  }, [user, authLoading, loginAttempted, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginAttempted(true);
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      toast.success("Login Successful");
    } catch (err) {
      console.error(err);
      setLoginAttempted(false);
      if (err.code === "auth/user-not-found") {
        toast.error("User not found. Please check your email.");
      } else if (err.code === "auth/wrong-password") {
        toast.error("Incorrect password");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else {
        toast.error(err.message || "Invalid credentials");
      }
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setLoginAttempted(true);
    try {
      await googleSignIn();
      toast.success("Login Successful");
    } catch (err) {
      console.error(err);
      setLoginAttempted(false);
      toast.error("Google login failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Welcome Back
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Login to your account
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 transition duration-200 cursor-pointer"
          >
        <img src="https://img.icons8.com/?size=96&id=17949&format=png" className="h-8 w-8" />
            <span className="font-medium text-gray-700">Google</span>
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600">
            New here?{" "}
            <Link
              href="/signUp"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
