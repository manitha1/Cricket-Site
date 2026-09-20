import { Link } from 'react-router-dom';
import { Shield, Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-dark to-primary/90 flex items-center justify-center p-4">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=1920&auto=format&fit=crop&q=60"
          alt="" className="w-full h-full object-cover opacity-10" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary shadow-green mx-auto mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-2xl font-black font-display text-white">Apex Cricket Association</h1>
          <p className="text-white/60 text-sm mt-1">Member Login</p>
        </div>

        <div className="card p-6 lg:p-8">
          <h2 className="font-display font-bold text-primary text-xl mb-6">Sign in to your account</h2>
          <form className="space-y-5">
            <div>
              <label className="form-label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" className="form-input pl-10" placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label className="form-label">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type={showPass ? 'text' : 'password'} className="form-input pl-10 pr-10" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-secondary" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-secondary hover:underline font-semibold">Forgot password?</Link>
            </div>
            <button type="submit" className="btn-secondary w-full justify-center py-3.5">
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Not a member?{' '}
              <Link to="/membership" className="text-secondary font-semibold hover:underline">Apply for Membership</Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-white/60 text-sm hover:text-white transition-colors duration-200">
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
