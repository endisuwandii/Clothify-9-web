<<<<<<< HEAD
import type { Route } from "react-router";
import type { Route } from "../+types/routes/register";


=======
import type { Route } from "./+types/register";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
>>>>>>> 0db27a31b83b4b9391b973a468a4bfe4afa298f3

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export default function RegisterRoute({}: Route.ComponentProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register
        </h1>

        <form>
          {/* Username */}
          <div className="space-y-2 mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {/* Email */}
          <div className="space-y-2 mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {/* Full Name */}
          <div className="space-y-2 mb-4">
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              type="text"
              name="fullName"
              placeholder="Your full name"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="space-y-2 mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter a strong password"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {/* Button */}
          <Button type="submit" className="w-full">
            Register User
          </Button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account ?{" "}
          <a href="/login" className="text-primary hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
