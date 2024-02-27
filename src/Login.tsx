import { Button } from "@/components/ui/button";
import axios from 'axios';
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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email:string, password:string) =>{
    try {
      const response = axios.post('https://exam-management-six.vercel.app/login', {
        username: email,
        password: password
      })
      console.log(response)
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[30rem] border-black">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-sm">
            Sign in to your account
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
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/register"}>
            <Button variant={"outline"}>Sign Up</Button>
          </Link>

          <Button
            variant={"outline"}
            className="bg-black text-white w-28 hover:bg-white hover:text-black "
            onClick={() => {
              login(email,password);
            }}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
