// pages/register.js
import styles from '../../styles/Register.module.css';

const Register = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} required />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} required />
        </div>
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
