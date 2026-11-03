import { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

export type PageSection = {
  id: string;
  label: string;
};

type PageHeaderProps = {
  title: string;
  sections: PageSection[];
};

export default function PageHeader({ title, sections }: PageHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      // ignore clicks on the toggle button itself
      if (buttonRef.current?.contains(target)) return;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return(
    <div className='PageHeader'>
      <h2>{title}
        <button
          ref={buttonRef}
          type='button'
          onClick={() => setOpen(prev => !prev)}
          className='contents-toggle'
          aria-label='Page contents'
          aria-expanded={open}
        ><FaAngleDown /></button>
      </h2>
      <div ref={menuRef}>
        {open && (
          <ul className='page-table-of-contents'>
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => setOpen(false)}>{section.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}