'use client';

import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import css from './NoteForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import type { Note, NoteTag } from '../../types/note';
import { createNote } from '@/lib/api';
import { useRouter } from 'next/navigation';

interface NoteFormProps {
  onSubmit: (note: Partial<Note>) => void;
}
interface NoteFormValues {
  title: string;
  content: string;
  tag: NoteTag;
}

const initialValues: NoteFormValues = {
  title: '',
  content: '',
  tag: 'Todo',
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title too short')
    .max(50, 'Title too long')
    .required('Title is required'),
  content: Yup.string().max(500, 'Content is too long'),
  tag: Yup.string<NoteTag>()
    .oneOf(['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'])
    .required('Tag is required'),
});

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const queryClient = useQueryClient();
  const fieldId = useId();

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (values: NoteFormValues) => createNote(values),
  });

  const handleSubmit = (values: NoteFormValues, actions: FormikHelpers<NoteFormValues>) => {
    mutation.mutate(values, {
      onSuccess: () => {
        toast.success('Note created');
        queryClient.invalidateQueries({ queryKey: ['notes'] });
        actions.resetForm();
        onSubmit(values);
      },
      onError: error => toast.error(error.message || 'Failed to create note'),
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-title`}>Title</label>
          <Field id={`${fieldId}-title`} type="text" name="title" className={css.input} />
          <ErrorMessage name="title" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-content`}>Content</label>
          <Field
            as="textarea"
            id={`${fieldId}-content`}
            name="content"
            rows={8}
            className={css.textarea}
          />
          <ErrorMessage name="content" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-tag`}>Tag</label>
          <Field as="select" id={`${fieldId}-tag`} name="tag" className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </Field>
          <ErrorMessage name="tag" component="span" className={css.error} />
        </div>

        <div className={css.actions}>
          <button onClick={() => router.back()} type="button" className={css.cancelButton}>
            Cancel
          </button>
          <button type="submit" className={css.submitButton} disabled={mutation.isPending}>
            Create note
          </button>
        </div>
      </Form>
    </Formik>
  );
}
