export type CMSContent = {
  title: string;
  subtitle: string;
};

export async function fetchCMSContent(): Promise<CMSContent> {
  return Promise.resolve({
    title: 'AI Text Paraphraser by JustDone',
    subtitle: 'Transform your writing from good to great with our Paraphraser tool.'
  });
}