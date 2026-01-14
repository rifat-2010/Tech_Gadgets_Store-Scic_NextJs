"use client";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { AuthContext } from "@/app/context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase.config";
import {
  AiOutlineGoogle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function SignUpForm() {
  const {
    createUser,
    googleSignIn,
    user,
    loading: authLoading,
  } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupAttempted, setSignupAttempted] = useState(false);

  // Navigate to home page when user signs up
  useEffect(() => {
    if (signupAttempted && user && !authLoading) {
      router.push("/");
    }
  }, [user, authLoading, signupAttempted, router]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSignupAttempted(true);

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validation
    if (!name) {
      toast.error("Name is required");
      setLoading(false);
      setSignupAttempted(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      setSignupAttempted(false);
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      setLoading(false);
      setSignupAttempted(false);
      return;
    }

    try {
      // Create user account
      const res = await createUser(email, password);
      console.log("User created:", res);

      // Update user profile
      const profile = {
        displayName: name,
        photoURL:
          photo ||
          "https://img.icons8.com/?size=100&id=Y5jFcXHxQBkf&format=png",
      };

      await updateProfile(auth.currentUser, profile);
      console.log("Profile updated");

      toast.success("Account created successfully!");
    } catch (err) {
      console.error("Registration error:", err);
      setSignupAttempted(false);
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email is already registered");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password is too weak");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else {
        toast.error(err.message || "Failed to create account");
      }
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setSignupAttempted(true);
    try {
      const result = await googleSignIn();
      console.log("Google sign-in successful:", result);
      toast.success("Account created successfully!");
    } catch (err) {
      console.error("Google sign-in error:", err);
      setSignupAttempted(false);
      toast.error("Google sign-in failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Create Account
          </h1>
          <p className="text-blue-100 text-center mt-2">Join us today</p>
        </div>

        {/* Form Container */}
        <div className="p-6">
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                required
                type="url"
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
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
                  name="password"
                  placeholder="••••••••"
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

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with
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
            <img
              src="https://img.icons8.com/?size=96&id=17949&format=png"
              className="h-8 w-8"
            />
            <span className="font-medium text-gray-700">Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
