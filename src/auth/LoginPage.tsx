import { accessElf } from "./utils/accessElf"
import { useState } from "react"
import { useAuth } from "./hooks/useAuth"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  accessElf.track("LoginPage")
  
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) throw new Error("Auth context is null");
  const { login } = auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      console.log("Login Result", res)
      navigate("/home")
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 relative">
    <button
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      onClick={() => navigate("/")}
    >
      X
    </button>
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
    
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>
      <div>
        
      <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>

      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
        onClick={handleLogin}>
        Sign In
      </button>
    </form>

    <div className="mt-6 text-center text-sm text-gray-600">
      Don't have an account? 
      <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium ms-2">Sign up</a>
    </div>
  </div>
</div>)}

export default LoginPage;