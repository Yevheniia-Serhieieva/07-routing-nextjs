'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import css from './NotePreview.module.css';
import Loading from '@/app/loading';

export default function NotePreview() {
  const { id } = useParams();
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id as string),
  });

  if (isLoading) return <Loading />;
  if (isError || !note) return <div>Note not found</div>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <Modal>
          <h2 className={css.header}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <span className={css.tag}>{note.tag}</span>
          <p className={css.date}>{new Date(note.createdAt).toLocaleDateString()}</p>
          <button className={css.backBtn} onClick={() => router.back()}>
            Back
          </button>
        </Modal>
      </div>
    </div>
  );
}
