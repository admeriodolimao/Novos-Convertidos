import React, { useState, FormEvent } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isLoginView, setIsLoginView] = useState<boolean>(true);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('https://seu-backend.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Falha no login');
      }

      const data = await response.json();
      console.log('Login bem-sucedido:', data);
      // Aqui você pode redirecionar o usuário, armazenar tokens, etc.
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  const handleSignup = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('https://seu-backend.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: newUsername, email, password: newPassword }),
      });

      if (!response.ok) {
        throw new Error('Falha no cadastro');
      }

      const data = await response.json();
      console.log('Cadastro bem-sucedido:', data);
      // Aqui você pode, por exemplo, exibir uma mensagem de sucesso ou redirecionar o usuário.
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <div className="login-screen">
      <div className="login-form">
        {isLoginView ? (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              id="username"
              className="login-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <input
              type="text"
              id="newUsername"
              className="login-input"
              placeholder="New Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="email"
              id="email"
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="newPassword"
              className="login-input"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit" className="login-button">Sign Up</button>
          </form>
        )}
        <button onClick={toggleView} className="toggle-view-button">
          {isLoginView ? "Ir para Cadastro" : "Ir para Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
