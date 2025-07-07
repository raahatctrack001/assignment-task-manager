import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      setRedirectPath("/login");
    } else {
      setRedirectPath("/dashboard");
    }
  }, []);

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return null; 
}
