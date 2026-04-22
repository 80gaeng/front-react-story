import './Button.css';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'critical' | 'success' | 'warning';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ label, variant = 'primary', disabled = false, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`ui-button ui-button--${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
