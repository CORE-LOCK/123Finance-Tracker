function Register() {
  return (
  <div
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-6"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Glass Card */}
  <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">

    <div className="grid grid-cols-1 md:grid-cols-2">

      {/* Left Side */}
      <div className="flex flex-col justify-center p-12 text-white">

        <h1 className="mb-8 text-5xl font-extrabold">
          LOGO
        </h1>

        <h2 className="text-5xl font-light">
          Finance
        </h2>

        <h2 className="mb-6 text-5xl font-bold text-indigo-300">
          Management
        </h2>

        <p className="max-w-md leading-7 text-gray-300">
          Manage your financial records securely with a modern
          dashboard. Create an account to access all features.
        </p>

      </div>

      {/* Right Side */}
      <div className="border-l border-white/20 p-12">

        <h2 className="mb-8 text-center text-3xl font-semibold text-white">
          Register
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-5 w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-gray-300 outline-none backdrop-blur-md focus:border-indigo-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="mb-5 w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-gray-300 outline-none backdrop-blur-md focus:border-indigo-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-8 w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-gray-300 outline-none backdrop-blur-md focus:border-indigo-400"
        />

        <button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 py-3 text-lg font-semibold text-white transition hover:scale-105">
          Create Account
        </button>
        <p className="mt-5 text-center text-sm text-gray-300">
  Already have an account?{" "}
  <a
    href="/login"
    className="font-semibold text-indigo-300 hover:text-indigo-200 hover:underline"
  >
    Login
  </a>
</p>

      </div>

    </div>
  </div>
</div>
  );
}

export default Register;