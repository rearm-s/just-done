
export const cleanErrorMessage = (message: string): string => {
  return message.replace(/sk-[a-z0-9\-\*]+/gi, '[API_KEY]');
};