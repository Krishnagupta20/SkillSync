export default function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow flex justify-between">
      <h1 className="text-xl font-bold text-indigo-600">SkillSync</h1>
      <div className="space-x-4">
        <a href="/login" className="text-sm text-gray-600 hover:text-indigo-600">Login</a>
        <a href="/register" className="text-sm text-gray-600 hover:text-indigo-600">Register</a>
      </div>
    </nav>
  );
}
