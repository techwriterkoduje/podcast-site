import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

type CopyToClipboardButtonProps = {
  title: string;
  textToCopy: string;
};

export default function CopyToClipboardButton({
  title,
  textToCopy,
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
      <IconButton aria-label={title} color="primary" disabled={open}>
        <ContentCopyIcon onClick={handleCLick} />
      </IconButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Skopiowano do schowka
        </Alert>
      </Snackbar>
    </>
  );
}
