import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import PodcastButton, { PodcastButtonProps } from './PodcastButton';

type CopyToClipboardButtonProps = PodcastButtonProps & {
  textToCopy: string;
};

export default function CopyToClipboardButton({
  textToCopy,
  children,
  ...otherProps
}: CopyToClipboardButtonProps) {
  const [open, setOpen] = useState(false);

  function handleCLick() {
    navigator.clipboard.writeText(textToCopy);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <PodcastButton
        color="primary"
        disabled={open}
        onClick={handleCLick}
        startIcon={<ContentCopyIcon />}
        {...otherProps}
      >
        {children}
      </PodcastButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Skopiowano do schowka
        </Alert>
      </Snackbar>
    </>
  );
}
