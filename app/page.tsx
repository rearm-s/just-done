import { fetchCMSContent } from '@/lib/cms';
import ParaphraserContainer from '@/components/shared/ParaphraserContainer';

export default async function Home() {
  const cmsContent = await fetchCMSContent();

  return <ParaphraserContainer title={cmsContent.title} subtitle={cmsContent.subtitle} />;
}
