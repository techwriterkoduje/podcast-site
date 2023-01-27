type DateDisplayProps = {
  dateString: string;
};

export default function DateDisplay({ dateString }: DateDisplayProps) {
  const readableDate = Intl.DateTimeFormat('pl-PL', {
    dateStyle: 'long',
  }).format(new Date(dateString));

  return <time dateTime={dateString}>{readableDate}</time>;
}
