import styles from './styles.module.css';

export const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.area}>
                <div className={styles.header}>
                    <div className={styles.loginArea}>
                        .....
                    </div>
                    <div className={styles.closeBtn}>x</div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.menu}>
                    ....
                </div>
            </div>
        </div>

    )
}