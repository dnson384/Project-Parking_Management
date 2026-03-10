"use client";

import { UserResponseEntity } from "@/domain/entities/user.entity";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { GetMeService } from "../services/auth.service";

interface AuthContextType {
  user: UserResponseEntity | null;
  error: AxiosError | null;
}

const PUBLIC_PATHS = ["/login", "/register", "/"];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const isPublicPath = PUBLIC_PATHS.some((path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  });

  const {
    data: curUser,
    error,
    isLoading,
  } = useQuery<UserResponseEntity, AxiosError<any>>({
    queryKey: ["me"],
    queryFn: GetMeService,
    staleTime: 1000 * 60 * 15,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !isPublicPath,
  });

  useEffect(() => {
    if (error?.response?.status === 401 && !isPublicPath) {
      router.replace("/login");
    }
  }, [error, isPublicPath]);

  return (
    <AuthContext.Provider
      value={{
        user: curUser ?? null,
        error: error ?? null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
