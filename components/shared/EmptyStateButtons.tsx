import React from 'react';
import { Box, Button } from '@mui/material';

import ContentPasteIcon from '@/components/icons/ContentPasteIcon';
import DraftIcon from '@/components/icons/DraftIcon';

interface Props {
  onPaste: () => void;
  onSample: () => void;
}

const EmptyStateButtons: React.FC<Props> = ({ onPaste, onSample }) => (
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      gap: 1,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Button
      variant="outlined"
      onClick={onPaste}
      size="medium"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 180,
        borderRadius: 3,
        textTransform: 'none',
        backgroundColor: '#FFFFFF',
        color: 'gray',
        borderColor: '#DBDCDF',
        padding: '14px 8px',
      }}
    >
      <ContentPasteIcon style={{ marginBottom: 6 }} />
      Paste text
    </Button>
    <Button
      variant="outlined"
      onClick={onSample}
      size="medium"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 180,
        borderRadius: 3,
        textTransform: 'none',
        backgroundColor: '#FFFFFF',
        color: 'gray',
        borderColor: '#DBDCDF',
        padding: '14px 8px',
      }}
    >
      <DraftIcon style={{ marginBottom: 6 }} />
      Sample text
    </Button>
  </Box>
);

export default EmptyStateButtons;
