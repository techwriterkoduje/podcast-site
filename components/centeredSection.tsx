type CenteredSectionProps = {
  additionalStyles: string;
  children: React.ReactNode;
};

export default function CenteredSection({
  additionalStyles,
  children,
}: CenteredSectionProps) {
  return (
    <section className={`max-w-2xl ${additionalStyles}`}>{children}</section>
  );
}
