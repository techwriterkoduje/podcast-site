import Stack from '@mui/material/Stack';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';

export type FeatureProps = {
  title: string;
  description: React.ReactElement | string;
  actionLinks: {
    to: string;
    label: string;
  }[];
};

export default function Feature({
  title,
  description,
  actionLinks,
}: FeatureProps) {
  return (
    <>
      <h2>{title}</h2>
      <div>{description}</div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 0',
        }}
      >
        {actionLinks.map(({ to, label }, idx) => (
          <ActionButtonLink key={idx} to={to}>
            {label}
          </ActionButtonLink>
        ))}
      </Stack>
    </>
  );
}
