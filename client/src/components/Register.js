import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    const result = await register(name, email, password);
    setLoading(false);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, Math.random() * 3000 + 2000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  const calculateEyeRotation = (eyeX, eyeY) => {
    const dx = mousePosition.x - eyeX;
    const dy = mousePosition.y - eyeY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return angle;
  };

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-7xl mx-auto flex items-center min-h-screen">
        {/* Left Side - Text and Animations */}
        <div className="w-1/2 pr-8 text-center">
          <h1 className="text-6xl font-bold text-accent mb-4">Welcome</h1>
          <p className="text-xl text-textSecondary mb-12">Create your account</p>

          {/* Animated Characters */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Wallet 1 */}
            <div className="absolute left-4 top-16 animate-bounce" style={{ animationDelay: '0s' }}>
              <div className="relative">
                <div className="text-9xl">👛</div>
                <div className={`absolute top-4 left-6 w-4 h-4 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-4 right-6 w-4 h-4 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-2 left-8 w-2 h-2 bg-white rounded-full transform rotate-45"></div>
                <div className="absolute top-2 right-8 w-2 h-2 bg-white rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Money Bag 1 */}
            <div className="absolute right-4 top-20 animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="relative">
                <div className="text-9xl">💰</div>
                <div className={`absolute top-6 left-4 w-4 h-4 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-6 right-4 w-4 h-4 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full transform rotate-45"></div>
                <div className="absolute top-4 right-6 w-2 h-2 bg-white rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Wallet 2 */}
            <div className="absolute left-8 bottom-8 animate-bounce" style={{ animationDelay: '2s' }}>
              <div className="relative">
                <div className="text-8xl">👛💸</div>
                <div className={`absolute top-3 left-4 w-3 h-3 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-3 right-4 w-3 h-3 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-1.5 left-5.5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
                <div className="absolute top-1.5 right-5.5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Money Bag 2 */}
            <div className="absolute right-8 bottom-12 animate-bounce" style={{ animationDelay: '3s' }}>
              <div className="relative">
                <div className="text-8xl">💰</div>
                <div className={`absolute top-5 left-3 w-3 h-3 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-5 right-3 w-3 h-3 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-3 left-4.5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
                <div className="absolute top-3 right-4.5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Wallet 3 */}
            <div className="absolute left-16 top-32 animate-bounce" style={{ animationDelay: '4s' }}>
              <div className="relative">
                <div className="text-7xl">👛</div>
                <div className={`absolute top-2.5 left-4 w-2.5 h-2.5 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-2.5 right-4 w-2.5 h-2.5 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-1.5 left-5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
                <div className="absolute top-1.5 right-5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Money Bag 3 */}
            <div className="absolute right-16 top-40 animate-bounce" style={{ animationDelay: '5s' }}>
              <div className="relative">
                <div className="text-7xl">💰</div>
                <div className={`absolute top-4 left-2.5 w-2.5 h-2.5 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-4 right-2.5 w-2.5 h-2.5 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-2.5 left-3.5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
                <div className="absolute top-2.5 right-3.5 w-1.5 h-1.5 bg-white rounded-full transform rotate-45"></div>
              </div>
            </div>

            {/* Cash 1 */}
            <div className="absolute left-1/2 top-24 animate-bounce" style={{ animationDelay: '6s', transform: 'translateX(-50%)' }}>
              <div className="text-8xl">💵</div>
            </div>

            {/* Cash 2 */}
            <div className="absolute left-1/2 top-36 animate-bounce" style={{ animationDelay: '7s', transform: 'translateX(-50%)' }}>
              <div className="text-7xl">💸</div>
            </div>

            {/* Cash 3 */}
            <div className="absolute left-1/2 top-48 animate-bounce" style={{ animationDelay: '8s', transform: 'translateX(-50%)' }}>
              <div className="text-6xl">💵</div>
            </div>

            {/* Plant in Center */}
            <div className="absolute left-1/2 top-60 animate-pulse" style={{ animationDelay: '3s', transform: 'translateX(-50%)' }}>
              <div className="relative">
                <div className="text-8xl">🌱</div>
                <div className={`absolute top-3 left-3 w-3 h-3 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-3 right-3 w-3 h-3 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-1.5 left-4 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute top-1.5 right-4 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Another Plant in Center */}
            <div className="absolute left-1/2 bottom-32 animate-pulse" style={{ animationDelay: '4s', transform: 'translateX(-50%)' }}>
              <div className="relative">
                <div className="text-7xl">🌿</div>
                <div className={`absolute top-2.5 left-2.5 w-2.5 h-2.5 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-1.5 left-3.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute top-1.5 right-3.5 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Plant */}
            <div className="absolute bottom-16 left-12 animate-pulse">
              <div className="relative">
                <div className="text-7xl">🌱</div>
                <div className={`absolute top-2 left-2 w-2 h-2 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-2 right-2 w-2 h-2 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-1 left-3 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1 right-3 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Another Plant */}
            <div className="absolute bottom-24 right-8 animate-pulse" style={{ animationDelay: '2s' }}>
              <div className="relative">
                <div className="text-6xl">🌿</div>
                <div className={`absolute top-2 left-2 w-2 h-2 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className={`absolute top-2 right-2 w-2 h-2 bg-black rounded-full transition-all duration-150 ${blink ? 'h-0' : ''}`}></div>
                <div className="absolute top-1 left-3 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1 right-3 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 pl-8 flex flex-col justify-center min-h-screen">
          <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto flex flex-col">
            <div className="text-center mb-4">
              <Link to="/" className="text-accent hover:text-accentHover font-semibold text-sm">
                ← Back to Home
              </Link>
            </div>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-black">CREATE YOUR ACCOUNT</h2>
            </div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  className="input-field w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="input-field w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-textPrimary mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="input-field w-full"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-textPrimary mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  className="input-field w-full"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-textSecondary">
                Already have an account?{' '}
                <Link to="/login" className="text-accent hover:text-accentHover font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
