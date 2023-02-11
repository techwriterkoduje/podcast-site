import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import LogoLink from './LogoLink';
import Nav from './Nav';
import SearchBox from '../Search/SearchBox';

export default function DesktopHeader() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        color: '#ed6e5f',
        borderBottom: '1px solid #ed6e5f',
        padding: '1rem',
      }}
      spacing={2}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <LogoLink />
            <Nav hideIcons />
          </div>
          <div>
            <SearchBox />
          </div>
        </Stack>
      </Container>
    </Stack>
  );
}
