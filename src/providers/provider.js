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
      console.log("Firebase User:", user); // Debugging

      if (user && user.email) {
        // Ensure the user object has an email before proceeding
        setUser(user);

        const result = await CreateUser({
          name: user.displayName || "Anonymous User",
          email: user.email,
          pictureURL:
            user.photoURL || "https://example.com/default-profile.png",
        });

        console.log("User Created in Convex:", result);
      } else {
        console.warn("User is null or missing email, skipping CreateUser");
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     console.log(user);
  //     setUser(user);

  //     const result = await CreateUser({
  //       name: user?.displayName,
  //       email: user?.email,
  //       pictureURL: user?.photoURL,
  //     });
  //     console.log(result);
  //   });
  //   return () => unsubscribe();
  // }, []);

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
