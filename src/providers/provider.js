"use client";

import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "@/userContext/AuthContext";
import { useMutation } from "convex/react";
import { onAuthStateChanged } from "firebase/auth";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useContext, useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";

const Provider = ({ children }) => {
  const [user, setUser] = useState();
  const CreateUser = useMutation(api?.users?.CreateNewUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("Firebase User:", user);

      if (user) {
        const result = await CreateUser({
          name: user?.displayName,
          email: user?.email,
          pictureURL: user?.photoURL,
        });

        console.log("User Created in Convex:", result);
        setUser(result);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ user }}>
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </div>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default Provider;
