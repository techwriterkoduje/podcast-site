import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';

export type FeatureProps = {
  title: string;
  description: React.ReactElement | string;
  imageUrl?: string;
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
      <Typography variant="h2">{title}</Typography>
      <Typography>{description}</Typography>
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
