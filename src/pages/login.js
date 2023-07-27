import { signIn } from "next-auth/react";
import React, { useEffect } from "react";

const GoogleLoginButton = () => {
  useEffect(() => {
    signIn("google",{callbackUrl:"http://localhost:3000/"});
  }, []);
};

export default GoogleLoginButton;
