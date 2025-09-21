import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    size?: string;
    color?: string;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, children, size, color, loading }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: color || '#0070f3', color: '#fff', border: 'none', cursor: 'pointer', fontSize: size }}>
            {loading ? 'Loading...' : children}
        </button>
    );
};

export default Button;
