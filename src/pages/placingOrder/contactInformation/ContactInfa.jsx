import ContactInfaInput from "./contactInfaInput/ContactInfaInput";
import ContactInfaTitle from "./contactInfaTitle/ContactInfaTitle";

import styles from "./ContactInfa.module.sass";

const ContactInfa = ({
  modalActive,
  setModalActive,
  setName,
  setSurname,
  setTel,
  setEmail,
  name,
  surname,
  tel,
  email,
}) => {
  return (
    <div className={styles.contactInfa}>
      <ContactInfaTitle />
      <ContactInfaInput
        modalActive={modalActive}
        setModalActive={setModalActive}
        setName={setName}
        setSurname={setSurname}
        setTel={setTel}
        setEmail={setEmail}
        name={name}
        surname={surname}
        tel={tel}
        email={email}
      />
    </div>
  );
};

export default ContactInfa;
