import { fetchNoteById } from '@/lib/api';
import css from './NotePreview.module.css';
import Modal from '@/components/Modal/Modal';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <div className={css.container}>
      <div className={css.item}>
        <Modal>
          <h2>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <span className={css.tag}>{note.tag}</span>
          <p className={css.date}>{new Date(note.createdAt).toLocaleDateString()}</p>
        </Modal>
      </div>
    </div>
  );
};

export default NotePreview;
