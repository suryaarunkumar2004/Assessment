import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
  background-color: #4CAF50;
`;
export const Home = () => {
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/about')
    }
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={handlenavigate}>about</Button>
        </div>
    )
}
