import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Fuse, { FuseResult, IFuseOptions } from 'fuse.js';
import { useEffect, useState } from 'react';
import SearchDialog from './SearchDialog';
import { SearchResultProps } from './SearchResult';

const fuseOptions: IFuseOptions<SearchResultProps> = {
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

export default function SearchForm() {
  const [fuse, setFuse] = useState<undefined | Fuse<SearchResultProps>>();
  const [results, setResults] = useState<
    undefined | FuseResult<SearchResultProps>[]
  >();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [query, setQuery] = useState('');

  async function getIndex() {
    try {
      const response = await fetch('/search.json');
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
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid white',
          borderRadius: '8px',
        }}
      >
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
      </form>
      {results && (
        <SearchDialog
          onClose={handleCloseDialog}
          open={dialogOpen}
          query={query}
          results={results.map(({ item }) => ({ ...item }))}
        />
      )}
    </>
  );
}
