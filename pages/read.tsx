import Feature, { FeatureProps } from '../components/Feature/Feature';
import Layout from '../components/Layout/Layout';
import PageContainer from '../components/Layout/PageContainer';
import ReadPage from '../components/ReadPage';
import { guideIds } from '../docs/python/guideIds';



export default function Read() {
  return (
    <Layout
      title="Poczytaj"
      description="Artykuły, poradniki i inne teksty w służbie technical writingu"
    >
      <ReadPage/>
    </Layout>
  );
}
