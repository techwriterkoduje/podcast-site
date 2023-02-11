import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SearchResult, { SearchResultProps } from './SearchResult';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const fuseOptions: Fuse.IFuseOptions<SearchResultProps> = {
  threshold: 0.3,
  ignoreLocation: true,
  keys: [
    {
      name: 'title',
      weight: 0.6,
    },
    {
      name: 'contents',
      weight: 0.4,
    },
  ],
};

export default function SearchBox() {
  const [fuse, setFuse] = useState<undefined | Fuse<SearchResultProps>>();
  const [results, setResults] = useState<
    undefined | Fuse.FuseResult<SearchResultProps>[]
  >();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [query, setQuery] = useState('');

  async function getIndex() {
    try {
      const response = await fetch(`${process.env.REPO}search.json`);
      if (!response.ok) {
        throw new Error(`Cannot get search index: ${response.status}.`);
      }

      const indexObject: SearchResultProps[] = await response.json();
      setFuse(new Fuse(indexObject, fuseOptions));
    } catch (err) {
      console.log(
        `${err} Are you in dev mode? Try running "yarn index" first.`
      );
    }
  }

  useEffect(function () {
    getIndex();
  }, []);

  useEffect(
    function () {
      if (results) {
        setDialogOpen(true);
      }
    },
    [results]
  );

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (fuse) {
      const target = e.target as typeof e.target & {
        query: { value: string };
      };
      const searchTerm = target.query.value;
      setQuery(searchTerm);
      setResults(fuse.search(searchTerm));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Szukaj"
        inputProps={{ 'aria-label': 'Szukaj' }}
        name="query"
      />
      <IconButton
        type="submit"
        sx={{ p: '10px', fontColor: 'primary' }}
        aria-label="szukaj"
      >
        <SearchIcon />
      </IconButton>
      <Dialog open={dialogOpen} onClose={handleCloseDialog} sx={{ padding: 3 }}>
        <DialogTitle>
          <Typography variant="h1" component="div">
            {query} ({results?.length || 0})
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Zamknij</Button>
        </DialogActions>
        <DialogContent>
          {results && results.length > 0 && (
            <Stack gap={2}>
              {results.map(({ item }) => (
                <SearchResult {...item} key={item.href} />
              ))}
            </Stack>
          )}
          {results?.length === 0 && <Typography>Brak wyników 🤷‍♀️</Typography>}
        </DialogContent>
      </Dialog>
    </form>
  );
}
