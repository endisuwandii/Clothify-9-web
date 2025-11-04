import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export default function RegisterRoute() {
  return <h1>Create New Account </h1>;
}
