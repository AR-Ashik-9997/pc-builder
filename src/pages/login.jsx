import { signIn } from "next-auth/react";
import { useEffect } from "react";

const GoogleLoginButton = () => {
  useEffect(() => {
    signIn("google",{callbackUrl:"https://pc-builder-ar-ashik-9997.vercel.app"});
  }, []);
};

export default GoogleLoginButton;