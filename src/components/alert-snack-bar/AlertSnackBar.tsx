import { Alert, Snackbar } from "@mui/material";

type AlertSnackBarProps = {
  open: boolean;
  severity?: any;
  message: string;
  onCloseSetter: () => void;
};

export const AlertSnackBar = ({
  open = true,
  severity,
  message,
  onCloseSetter,
}: AlertSnackBarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onCloseSetter}>
      <Alert severity={severity || "error"}>{message}</Alert>
    </Snackbar>
  );
};
