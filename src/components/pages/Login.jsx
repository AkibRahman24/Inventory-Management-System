import React from "react";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <>
   
      <Container className={"flex"}>
        <Card className="w-[500px] mx-auto max-w-sm lg:mt-40 mt-20">
          <Images imgSrc={logo} className={"h-36 w-52 mx-auto"} />
          <CardHeader>
            <CardTitle>Login To Your <span className="text-[#45BA8C] text-xl">Account</span></CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Link to="/register ">
                <Button variant="link" className="hover:text-[#45BA8C] duration-300">Register</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jhondoe@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full bg-[#3E5067] hover:bg-[#45BA8C] duration-300">
              Login
            </Button>
          </CardFooter>
        </Card>
      </Container>
      
      </>
    
  );
};

export default Login;
