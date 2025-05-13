import React from 'react';
type BasicButtonProps = {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
};
declare const Button: React.FC<BasicButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map