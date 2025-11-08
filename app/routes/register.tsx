<<<<<<< HEAD
import type { Route } from "react-router";
import type { Route } from "../+types/routes/register";


=======
import type { Route } from "./+types/register";
import { Form } from "react-router";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
>>>>>>> 0db27a31b83b4b9391b973a468a4bfe4afa298f3

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register" }];
}

export default function RegisterRoute({}: Route.ComponentProps) {
  return (
    <div>
      <h1>Create New Account </h1>
      <Form>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" name="username" />
      </Form>
    </div>
  );
}
