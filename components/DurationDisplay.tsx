type DurationDisplayProps = {
  duration: string;
};

type DisplayIfRelevantProps = {
  value: string;
  suffix: string;
};

function DisplayIfRelevant({ value, suffix }: DisplayIfRelevantProps) {
  const numberValue = parseInt(value);

  if (numberValue === 0) {
    return null;
  }

  return (
    <span>
      {numberValue} {suffix}
    </span>
  );
}

export default function DurationDisplay({ duration }: DurationDisplayProps) {
  const [hours, minutes] = duration.split(':');
  return (
    <time
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <DisplayIfRelevant value={hours} suffix="h" />
      <DisplayIfRelevant value={minutes} suffix="min" />
    </time>
  );
}
