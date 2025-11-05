import NoteList from '@/components/NoteList/NoteList';
import { getNotes } from '@/lib/api';

const AllNotesPaage = async () => {
  const response = await getNotes();
  return (
    <div>
      <h1>All Notes</h1>
      {response?.notes?.length && <NoteList notes={response.notes} />}
    </div>
  );
};

export default AllNotesPaage;
