export interface ButtonProps {
  text: string;
  handleFunction(): void;
  icon?: string;
  loading?: boolean
  disabled?: boolean
}
