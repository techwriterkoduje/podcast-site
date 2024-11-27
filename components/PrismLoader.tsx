'use client';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-okaidia.css';
import { useEffect } from 'react';

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return null;
}
