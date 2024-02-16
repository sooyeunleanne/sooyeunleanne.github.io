import styles from './Awards.module.css';

const Awards = () => {
    return (
        <div className={styles.awards}>
            <h1>Awards and Certificates</h1>
            <p>Listing the awards and certificates I earned since high-school.</p>

            <div className={styles.gridContainer}></div>
        </div>
    )
}

export default Awards;