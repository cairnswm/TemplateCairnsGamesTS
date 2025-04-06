import { useAuth } from "../auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { CaretDownFill, CaretUpFill, PersonCircle } from "../icons";

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (<>
    <nav className="relative w-full flex items-center justify-between p-4 bg-primary text-white shadow">
      <div className="text-xl font-bold" onClick={()=>navigate("/home")}>Template</div>
      <div>
        {user?.name ? (
          <div className="relative" ref={dropdownRef}>
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 text-white rounded shadow-sm flex items-center space-x-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <PersonCircle /> <span>{user.name}</span> 
              {isDropdownOpen ? <CaretUpFill height="8" /> : <CaretDownFill height="8" />}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate("/system")}
                >                  
                  System
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate("/subscriptions")}
                >
                  Subscriptions
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
    <div className="mx-2">
      <button onClick={()=>navigate("/")}>Click Me</button>
    </div>
    </>
  );
};

export default Navigation;