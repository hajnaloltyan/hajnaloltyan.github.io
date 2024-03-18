import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaCode,
  FaBriefcase,
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Colours from './Colours';

Modal.setAppElement('#root');

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header flex flex-col items-center relative py-3 border-black border-b-8">
      <div className="flex justify-center items-center gap-[5vw]">
        <Colours />
        <h1 className="font-rampart-one font-black text-3xl text-nowrap">HAJNAL OLTYAN</h1>
      </div>
      <div>
        <ul className="flex bg-black justify-evenly fixed bottom-0 inset-x-0 z-10 w-full flex-wrap">
          <li className="h-12 flex">
            <a
              to="https://github.com/hajnaloltyan"
              className="flex items-center no-underline text-violet-800"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} />
            </a>
          </li>

          <li className="h-12 flex">
            <button
              className="flex items-center no-underline text-violet-800"
              type="button"
            >
              {isMenuOpen ? (
                <MdClose
                  size={25}
                  onClick={toggleMenu}
                />
              ) : (
                <FiMenu
                  size={25}
                  onClick={toggleMenu}
                />
              )}
            </button>
          </li>

          <li className="h-12 flex">
            <a
              to="https://www.linkedin.com/in/hajnaloltyan"
              className="flex items-center no-underline text-violet-800"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
        </ul>
      </div>

      {isMenuOpen ? (
        <Modal
          isOpen={isMenuOpen}
          onRequestClose={toggleMenu}
          close
          className="text-lg uppercase cursor-pointer font-mali text-white"
          overlayClassName="bg-black bg-opacity-95 fixed inset-0 flex justify-center items-center pt-20"
          closeTimeoutMS={500}
        >
          <ul className="text-2xl">
            <li>
              <NavLink to="/" className="flex items-center pb-12 gap-8" onClick={closeMenu}>
                <FaHome color="green" />
                {' '}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="flex items-center pb-12 gap-8" onClick={closeMenu}>
                <FaCode color="yellow" />
                {' '}
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="flex items-center pb-12 gap-8" onClick={closeMenu}>
                <FaBriefcase color="blue" />
                {' '}
                Projects
              </NavLink>
            </li>
          </ul>
        </Modal>
      )
        : null}
    </header>
  );
};

export default Header;
