import React from "react";
import { IoMdClose } from "react-icons/io";
import { BiError } from "react-icons/bi";

import styles from "../styles/modal.module.css";

interface Props {
  visible?: boolean;
  setVisible?: any;
}

const Modal = (props: Props) => {
  const { visible, setVisible } = props;
  const [showModal, setShowModal] = React.useState<boolean>(true);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (modalRef.current) {
      if (visible) {
        modalRef.current.style.display = "flex";
      } else {
        modalRef.current.style.display = "none";
      }
    }

    // cleanup function
    return () => {
      if (modalRef.current) {
        modalRef.current.style.removeProperty("display");
      }
    };
  }, [visible]);

  return (
    <div ref={modalRef} className={styles.modalContainer}>
      <div className={styles.messageContainer}>
        <BiError className={styles.errorIcon} />
        <div>
          <h4 className={styles.message}>
            Please provide search query to search!
          </h4>
          <p>
            You can search by entering keyword like &apos;horror&apos;,
            &apos;comedy&apos;, &apos;animations&apos;
          </p>
        </div>
      </div>
      <div className={styles.iconContainer} onClick={() => setVisible(false)}>
        <IoMdClose className={styles.closeIcon} />
      </div>
    </div>
  );
};

export default Modal;
