import MuiButton from "@mui/material/Button";

type Tones = "info" | "success" | "warning" | "error";

export interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({ loading, variant, children }: ButtonProps) => {
  return (
    <MuiButton loading={loading} variant={variant}>
      {children}
    </MuiButton>
  );
};
