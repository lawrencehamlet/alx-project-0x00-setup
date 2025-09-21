import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            <Button label="Get Started" onClick={() => {}} size="large" color="primary" loading={false}>
                Get Started
            </Button>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default LandingPage;