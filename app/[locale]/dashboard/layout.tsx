"use client";

import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { api } from "@/lib/axiosClient";
import { useRouter } from "@/navigation";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await api("/users/me");
        if (data.role !== "ADMIN") router.push("/");
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col">
      <SidebarProvider className="">
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          <div className="flex flex-1 flex-col">
            <SearchBar />
            <main className="h-full p-4 md:p-6">{children}</main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
