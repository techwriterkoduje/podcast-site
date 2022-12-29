import Stack from '@mui/material/Stack';
import ActionButtonLink, {
  ActionButtonLinkProps,
} from '../ActionButtonLink/ActionButtonLink';

export type FeatureProps = {
  title: string;
  description: JSX.Element;
  actionLinks: ActionButtonLinkProps[];
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
        {actionLinks.map((actionLinkProps) => (
          <ActionButtonLink key={actionLinkProps.to} {...actionLinkProps} />
        ))}
      </Stack>
    </>
  );
}
