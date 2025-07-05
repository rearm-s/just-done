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
            backgroundColor: 'rgb(238, 240, 245)',
            padding: '12px 16px',
            color: 'rgb(37, 70, 153)',
            fontWeight: '600',
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
          padding: '12px 16px',
          backgroundColor: 'rgb(37, 70, 153)',
          boxShadow: 'none',
          transition: 'filter 0.3s ease',

          '&:hover': {
            boxShadow: 'none',
            filter: 'contrast(1.5)',
          },

          '&:focus': {
            boxShadow: 'none',
          },

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
