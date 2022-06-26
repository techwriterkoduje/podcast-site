import Link from 'next/link';
import { Post } from '../types';

type LeftNavProps = {
  items: Post[];
  selectedItemId: string;
};

export default function LeftNav({ items, selectedItemId }: LeftNavProps) {
  return (
    <nav>
      <ul className="p-1">
        {items.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              <a
                className={`px-3 py-1 block hover:bg-gray-200 rounded-md rounded-l-none border-l-4 ${
                  id === selectedItemId ? 'border-red-500' : 'border-transparent'
                }`}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
