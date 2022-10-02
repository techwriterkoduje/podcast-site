type DateDisplayProps = {
  dateString: string;
};

export default function DateDisplay({ dateString }: DateDisplayProps) {
  const readableDate = Intl.DateTimeFormat("pl-PL", {
    dateStyle: "full",
  }).format(new Date(dateString));

  return <>{readableDate}</>;
}
