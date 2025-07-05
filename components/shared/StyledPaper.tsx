import { Paper, paperClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(5),
  position: 'relative',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 24,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'opacity 0.3s ease',
  [`&.${paperClasses.root}.loading`]: {
    opacity: 0.5,
  },
  boxShadow: 'none',
}));

export default StyledPaper;
