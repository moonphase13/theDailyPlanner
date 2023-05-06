import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Label } from '@unojsx/react';
import { Button } from '@unojsx/react-tailwind';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // your login logic here
    history.push('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleLogin}>
        <div className="mb-4">
          <Label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email:
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password:
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6">
          <Button type="submit" className="w-full py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;