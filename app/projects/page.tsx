import type { Metadata } from 'next';
import ProjectPage from '../../components/ProjectPage'; // Adjusted path

export const metadata: Metadata = {
  title: 'Projekty',
  description: 'Przykładowe projekty autorów podcastu. Projekty ilustrują koncepcje omawiane w podcaście.',
};

export default function ProjectsPage() {
  return <ProjectPage />;
}
