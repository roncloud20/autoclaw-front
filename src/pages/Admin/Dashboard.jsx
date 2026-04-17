import React, { useEffect, useState } from 'react'
import SidebarLayout from '../../components/SidebarLayout'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      return navigate('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [user, navigate]);

  if (!isAuthorized) {
    return null; 
  }
  return (
    <>
        <SidebarLayout />
    </>
  )
}

export default Dashboard
