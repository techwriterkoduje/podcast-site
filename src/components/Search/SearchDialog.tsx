import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SearchResult, { SearchResultProps } from './SearchResult';

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
  query: string;
  results: SearchResultProps[];
};

export default function SearchDialog({
  onClose,
  open,
  query,
  results,
}: SearchDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} sx={{ padding: 3 }}>
      <DialogTitle>
        <Typography variant="h1" component="div">
          {query} ({results?.length || 0})
        </Typography>
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>Zamknij</Button>
      </DialogActions>
      <DialogContent>
        {results && results.length > 0 && (
          <Stack gap={2}>
            {results.map((item) => (
              <SearchResult {...item} onClose={onClose} key={item.href} />
            ))}
          </Stack>
        )}
        {results?.length === 0 && <Typography>Brak wyników 🤷‍♀️</Typography>}
      </DialogContent>
    </Dialog>
  );
}
