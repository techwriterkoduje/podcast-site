import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useTheme from '@mui/material/styles/useTheme';
import { useContext } from 'react';
import { ColorModeContext } from '../../context/ColorModeContext';
import { IconButtonProps } from '@mui/material';

export default function ModeSwitcher(props: IconButtonProps) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="primary"
        title={`${theme.palette.mode} mode is on. Switch mode.`}
        {...props}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
}
