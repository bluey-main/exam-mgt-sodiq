import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
 
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[30rem] border-black">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription className="text-sm">
            Sign up for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div>
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-lg">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-lg">
                Confirm Password
              </Label>
              <Input
                type="password"
                placeholder="Confirm Password"
                id="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="role" className="text-lg">
                Role
              </Label>
              <div className="w-full">
              <select name="role" className="w-full h-11 border border-black px-3" onChange={(e) => setRole(e.target.value)}>
                <option value="staff">Staff</option>
                <option value="student">Student</option>

              </select>
              </div>
           
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
            {/* get the value of the selected Content */}


          <Button
            variant={"outline"}
            className="bg-black text-white w-28 hover:bg-white hover:text-black "
            onClick={() => {
              console.log(email, password,role,confirmPassword);
            }}
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
