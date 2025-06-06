import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Shopper admin" },
    { name: "description", content: "Admin app for AI Shopper." },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#333',
          marginBottom: '1.5rem'
        }}>
          Welcome to AI Shopper Admin
        </h1>
        <button
          onClick={handleLogin}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.1rem',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
        >
          Login
        </button>
      </div>
    </div>
  );
}
