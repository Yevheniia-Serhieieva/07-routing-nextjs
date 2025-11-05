'use client';

import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import style from '@/app/@modal/(.)notes/[id]/NotePreview.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const close = () => router.back();

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        {children}
        <button className={style.backBtn} onClick={close}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
