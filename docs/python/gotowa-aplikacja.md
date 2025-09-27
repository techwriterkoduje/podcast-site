---
title: 'Gotowa aplikacja'
---

Udało się nam przejść przez wszystkie etapy tworzenia generatora. Poniżej
kompletny kod naszej aplikacji.

_rel_notes_generator.py_

```python
from string import Template
from pathlib import Path
from shutil import rmtree

current_dir = Path(__file__).parent
input_dir = current_dir / 'input'
output_dir = current_dir / 'output'

rel_note_template = Template('''<tr>
<td>$id</td>
<td>$description</td>
</tr>
''')


def get_release_notes(source_dir):
    rel_notes = {}
    for file in source_dir.glob('*.txt'):
        rel_note_id = file.stem
        with file.open() as f:
            rel_note_text = f.read()
        rel_notes[rel_note_id] = rel_note_text
    return rel_notes


def generate_release_notes(release_notes):
    rel_note_table_rows = ''
    for id, description in release_notes.items():
        rel_note_table_rows += rel_note_template.substitute(
            id=id, description=description)
    return rel_note_table_rows


def write_release_notes(release_note_rows, target_dir):
    if target_dir.exists():
        rmtree(target_dir)
    target_dir.mkdir()
    with Path('release_notes_template.html').open() as rnt:
        file_template = Template(rnt.read())
    with (target_dir / 'release_notes.html').open('w') as rn:
        rn.write(file_template.substitute(release_notes=release_note_rows))

if __name__ == '__main__':
    collected_release_notes = get_release_notes(input_dir)
    generated_table_rows = generate_release_notes(collected_release_notes)
    write_release_notes(generated_table_rows, output_dir)
```
