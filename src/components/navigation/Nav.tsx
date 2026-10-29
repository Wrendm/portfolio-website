import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileNav from './MobileNav';
import SideNav from './SideNav';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // close the menu after navigating to another page
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // ignore clicks on the hamburger button itself
      if (target.closest('#sidenav-toggle')) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className='Nav'>
      <div className='desktop-only'>
        <SideNav />
      </div>

      <div className='mobile-only-wrapper'>
        <div className='left'>
          <h1 className='MobileTitle'><Link to='/'>Wren Miles</Link></h1>
        </div>
        <div className='right'>
          <button
            type='button'
            onClick={() => setOpen(prev => !prev)}
            style={{ fontSize: '25px', color: 'var(--text)', backgroundColor: 'var(--bg)', border:'none' }}
            id='sidenav-toggle'
            aria-label='Toggle menu'
            aria-expanded={open}
          >
            <RxHamburgerMenu />
          </button>
          <div ref={menuRef}>
            {open && <MobileNav />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
