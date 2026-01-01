import { Sidebar } from "@/components/admin";
import "../../globals.css";
import AdminTopBar from "@/components/admin/nav/AdminBar";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-dvh overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Sidebar />

        <div className="flex flex-col flex-1 ">
          {/* Top Navigation */}
          <AdminTopBar />
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6 ">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
