import React, { useEffect, useState } from 'react'
import SidebarLayout from '../../components/SidebarLayout'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user || user.role !== 'vendor') {
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
