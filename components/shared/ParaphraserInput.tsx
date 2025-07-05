import React from 'react';
import { styled, TextareaAutosize } from '@mui/material';

interface ParaphraserInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}


const StyledParaphraserInput = styled(TextareaAutosize)<{ value: string }>`
    display: flex;
    padding: 14px 12px 12px 16px;
    background-color: ${({ value }) => value === '' ? '#EEF0F5' : '#ffffff'};
    border: none;
    min-height: 100%;
    max-height: 336px;
    width: 100%;
    overflow-y: auto;
    resize: none;
    transition: opacity 0.2s;
    border-bottom: 1px solid #DBDCDF;

    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: #76777A;
        font-size: 16px;
        opacity: 1;
        font-weight: 600;
    }

`;

const ParaphraserInput: React.FC<ParaphraserInputProps> = ({ value, onChange, disabled }) => (
  <StyledParaphraserInput
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Enter text here or upload file to humanize it."
    disabled={disabled}
    minRows={6}
  />
);

export default ParaphraserInput;
