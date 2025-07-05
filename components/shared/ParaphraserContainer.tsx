"use client";

import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

import { cleanErrorMessage } from "@/lib/utils";
import {
  EmptyStateButtons,
  ErrorMessage,
  ParaphraserActions,
  ParaphraserInput,
  StyledPaper
} from "@/components/shared";

interface ParaphraserContainerProps {
  title: string;
  subtitle: string;
}

const SAMPLE_TEXT = `The Border Collie is a highly intelligent and versatile breed known for its exceptional herding abilities. Originating from the border region between England and Scotland, this breed has been recognized as one of the most skilled working dogs in the world. With their distinctive appearance and remarkable intelligence, Border Collies have become a popular choice for both working and companion dogs.
Physically, Border Collies are medium-sized dogs with a well-proportioned body and a strong, agile build. They have a dense double coat that comes in a variety of colors, including black and white, red and white, and tricolor. Their expressive eyes, usually brown but sometimes blue, are one of their most striking features, reflecting their intelligence and eagerness to please.
Known for their boundless energy and drive, Border Collies thrive in an active lifestyle. They require ample exercise and mental stimulation to keep them happy and healthy. These dogs excel in various dog sports, such as agility, obedience, and flyball. They are also frequently used in search and rescue operations due to their exceptional scenting abilities.
Border Collies are highly trainable and eager to learn. Their intelligence and problem-solving skills make them quick learners, and they excel in obedience training. They have a natural instinct for herding, and even without formal training, they can display remarkable herding behaviors. However, their high energy levels and intense focus can sometimes make them challenging for novice dog owners.
In addition to their working abilities, Border Collies make excellent family pets for active households. They are known for their loyalty, affection, and strong bond with their owners. However, their herding instincts may lead them to nip or try to herd small children or other pets, so early socialization and training are crucial.
While Border Collies are generally healthy dogs, they may be prone to certain genetic health conditions such as hip dysplasia and epilepsy. Regular veterinary check-ups, a nutritious diet, and regular exercise are essential for maintaining their overall well-being.
In summary, the Border Collie is a remarkable breed with outstanding intelligence, agility, and herding instincts. Whether as a working dog or a loyal family companion, they bring joy, enthusiasm, and unwavering devotion to their owners.`;

const ParaphraserContainer: React.FC<ParaphraserContainerProps> = ({ title, subtitle }) => {
  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const showClear = inputText !== '';
  const paraphraseDisabled = !inputText || loading;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text || '');
      setError(null);
    } catch (err) {
      setError('Could not read from clipboard.');
    }
  };

  const handleSample = () => {
    setInputText(SAMPLE_TEXT);
    setError(null);
  };

  const handleClear = () => {
    setInputText('');
    setError(null);
  };

  const handleInputChange = (value: string) => {
    setInputText(value);
    setError(null);
  };

  const handleParaphrase = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();

      if (!response.ok) {
        const cleaned = cleanErrorMessage(data?.error);
        setError(cleaned);
      } else {
        setInputText(data?.result);
      }
    } catch (err: any) {
      const cleaned = cleanErrorMessage(err.message);
      setError(cleaned);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', p: { xs: 2, sm: 6 } }}>
        <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="h5" align="center">
          {subtitle}
        </Typography>
        <StyledPaper className={loading ? 'loading' : ''}>
          <Box sx={{ position: 'relative' }}>
            <ParaphraserInput value={inputText} onChange={handleInputChange} disabled={loading} />
            {inputText === '' && (
              <EmptyStateButtons onPaste={handlePaste} onSample={handleSample} />
            )}
          </Box>
          <Box sx={{
            display: 'flex',
            gap: 1,
            p: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            <ParaphraserActions
              onClear={handleClear}
              onParaphrase={handleParaphrase}
              loading={loading}
              showClear={showClear}
              paraphraseDisabled={paraphraseDisabled}
            />
          </Box>
        </StyledPaper>
        {error && (
          <ErrorMessage error={error} />
        )}
      </Box>
    </Container>
  );
};

export default ParaphraserContainer;
