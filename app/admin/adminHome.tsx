import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface UserProfile {
  nickname: string;
  email: string;
  role: string;
}

export default function AdminHome() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        navigate('/admin/login');
        return;
      }

      try {
        // Fetch user profile
        const response = await fetch('http://localhost:8080/core/v2/user', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const profile = await response.json();
        setUserProfile(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        navigate('/admin/login');
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/admin/login');
  };

  if (!userProfile) {
    return (
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Welcome, {userProfile.nickname}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-md transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-xl mb-4">Admin Controls</h2>
        {/* Add your admin controls here */}
      </div>
    </div>
  );
} 