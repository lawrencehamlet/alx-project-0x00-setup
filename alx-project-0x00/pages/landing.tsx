import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const LandingPage = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to the Landing Page</h1>
            
            <div className="space-y-4 mb-8">
                <Button title="Small Rounded" styles="rounded-sm" />
                <Button title="Large Rounded" styles="rounded-lg" />
                <Button title="Full Rounded" styles="rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default LandingPage;