'use client';

import Loading from '@/app/loading';
import NoteList from '@/components/NoteList/NoteList';
import { getNotes } from '@/lib/api';
import { Note } from '@/types/note';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Notes() {
  const params = useParams();
  const slug = params?.slug as string[] | undefined;
  const tag = slug?.[0] === 'all' ? undefined : slug?.[0];

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      try {
        const res = await getNotes(1, 12, tag);
        setNotes(res.notes);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [tag]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1> {tag ? `Notes: '${tag}'` : 'All notes'} </h1>
      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}
