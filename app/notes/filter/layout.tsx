type SidebarNotesProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: SidebarNotesProps) => {
  return (
    <>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </>
  );
};

export default NotesLayout;
