import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Verify = () => {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const name = searchParams.get("user"), jwtToken = searchParams.get("token");
        
    }, []);
  return (
    <div>Verify</div>
  )
}

export default Verify;