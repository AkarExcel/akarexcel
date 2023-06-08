
import styles from "./popBanner.module.css";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";
import { ScrollLocky } from "react-scroll-locky";
import { useEffect } from "react";

const Modal = ({ setIsOpen, isOpen }) => {

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        {/* <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div> */}
        <div onClick={() => setIsOpen(false)}>
        <Link href='https://wa.link/4xyhxp' passHref>
          <a target="_blank" rel="noopener noreferrer">
          <img className={styles.modalImage} src="images/banner-mobile.png" srcset="images/banner-mobile.png 1000w, images/banner-desktop.png 2000w" alt="yah"/>
          </a>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Modal;