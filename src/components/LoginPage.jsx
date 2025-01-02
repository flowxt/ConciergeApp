export default function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Connexion
          </h2>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full p-3 border border-teal-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600">Mot de passe</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-teal-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <button className="w-full p-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none transition-all duration-200">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }