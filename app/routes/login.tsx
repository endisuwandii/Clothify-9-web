import type { Route } from "./+types/login";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export default function LoginRoute({}: Route.ComponentProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h1>
        <h3 className="text-sm flex justify-center space-y-2 mb-3">
          Please enter your e-mail and password:
        </h3>

        <Form method="POST">
          {/* Email */}
          <div className="space-y-2 mb-4">
            <Label htmlFor="email"></Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="space-y-2 mb-6">
            <Label htmlFor="password"></Label>
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
            Log In
          </Button>
        </Form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account? ?{" "}
          <a href="/register" className="text-primary hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const email = formData.get("email")?.toString();

  const password = formData.get("password")?.toString();

  const loginBody = {
    email,
    password,
  };

  console.log(loginBody);

  // const project = await someApi.updateProject({ title });

  return null;
}
