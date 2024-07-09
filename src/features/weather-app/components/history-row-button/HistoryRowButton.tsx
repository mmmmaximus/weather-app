import { Button, CardMedia } from "@mui/material";
import { HistoryRowButtonStyles } from "./HistoryRowButtonStyles";

type HistoryRowButtonProps = {
  onClick: () => void;
  icon: string;
};

export const HistoryRowButton = ({ onClick, icon }: HistoryRowButtonProps) => {
  return (
    <Button onClick={onClick} sx={HistoryRowButtonStyles}>
      <CardMedia component="img" image={icon} sx={{ width: 16 }} />
    </Button>
  );
};
