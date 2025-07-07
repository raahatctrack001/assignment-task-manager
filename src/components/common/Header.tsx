import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ThemeToggleButton } from "./ToggleThemeButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = localStorage.getItem("username") || "Guest";
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("username");
    setMenuOpen(false)
    navigate("/login");
  };

  return (
    <header className=" shadow py-4 px-6 flex justify-between items-center">
      {/* Left Logo */}
      <div className="text-2xl font-bold tracking-tight">📋 TaskTracker</div>

      {/* Desktop menu */}
      <nav className="hidden lg:flex items-center gap-4">
        <span className="text-sm font-medium">Hello, {username} 👋</span>

        {/* Theme Toggle */}
        <ThemeToggleButton />

        <button
          onClick={handleLogout}
          className="px-3 py-1.5 rounded bg-red-600 text-white text-sm hover:bg-red-700"
        >
          Logout
        </button>
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <Menu size={24} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg w-48 py-2 flex flex-col gap-2 z-50">
          <span className="px-4 py-2 text-sm">Hello, {username} 👋</span>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
            Toggle Theme
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
