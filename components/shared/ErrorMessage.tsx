import React from "react";
import { Typography } from "@mui/material";

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <Typography variant="body2" color="error" mt={1} ml={2}>
    {error}
  </Typography>
);

export default ErrorMessage;
