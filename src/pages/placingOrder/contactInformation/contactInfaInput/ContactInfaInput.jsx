import styles from "./ContactInfaInput.module.sass";

const ContactInfaInput = ({
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
    <div className={styles.contactInfaInput}>
      <form>
        <input
          className={styles.input}
          id="name"
          type="text"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className={styles.input}
          id="surname"
          type="text"
          name="surname"
          placeholder="Фамилия"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
        <input
          className={styles.input}
          id="number"
          type="number"
          name="number"
          placeholder="+7 (___) ___-__-__"
          value={tel}
          onChange={(event) => setTel(event.target.value)}
        />
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </form>
    </div>
  );
};

export default ContactInfaInput;
