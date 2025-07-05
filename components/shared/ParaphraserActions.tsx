import React from 'react';
import { Button } from '@mui/material';
import { Clear } from '@mui/icons-material';

interface ParaphraserActionsProps {
  onClear: () => void;
  onParaphrase: () => void;
  loading: boolean;
  showClear?: boolean;
  paraphraseDisabled?: boolean;
}

const ParaphraserActions: React.FC<ParaphraserActionsProps> = ({
  onClear,
  onParaphrase,
  loading,
  showClear = false,
  paraphraseDisabled = false,
}) => {
  return (
    <>
      {(showClear && !loading) && (
        <Button
          variant="text"
          startIcon={<Clear />}
          onClick={onClear}
          size="medium"
          sx={{
            borderRadius: 10,
            textTransform: 'none',
            backgroundColor: '#EEF0F5',
            padding: '10px 16px',
          }}
        >
          Clear input
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={onParaphrase}
        disabled={paraphraseDisabled || loading}
        size="medium"
        sx={{
          borderRadius: 10,
          textTransform: 'none',
          padding: '10px 16px',

          '&.Mui-disabled': {
            color: '#FFFFFF',
            backgroundColor: '#AEAFB1',
          },
        }}
      >
        {loading ? 'Paraphrasing' : 'Paraphrase'}
      </Button>
    </>
  );
};

export default ParaphraserActions;
