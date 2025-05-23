import type { Metadata } from 'next';
import ContactPage from '../../components/Contact/ContactPage'; // Adjusted path

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z twórcami podcastu Tech Writer koduje',
};

export default function Contact() {
  return <ContactPage />;
}
