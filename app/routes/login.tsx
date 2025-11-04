import type { Route } from "./+types/login";

import { Form } from "react-router";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export default function LoginRoute({}: Route.ComponentProps) {
  return (
    <div>
      <h1>Login to your account </h1>
    </div>
  );
}
