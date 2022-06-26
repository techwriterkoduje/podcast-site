type CenteredSectionProps = {
  additionalStyles: string;
  children: React.ReactNode;
};

export default function CenteredSection({
  additionalStyles,
}: CenteredSectionProps) {
  return <section className={`max-w-2xl ${additionalStyles}`}></section>;
}
