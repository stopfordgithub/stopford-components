import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    outline?: boolean;
}

declare const Button: FC<ButtonProps>;

export { Button };
