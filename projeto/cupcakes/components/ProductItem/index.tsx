import styles from './styles.module.css';

export const ProductItem = () => {
    return(
        <div className={styles.container}>
            <div className={styles.head}></div>
            <div className={styles.info}>
                <div className={styles.img}>
                    <img src="/tmp/cupcake_amarelo.png" alt=''/>

                </div>
                <div className={styles.catName}>Festa</div>
                <div className={styles.name}>Yellow Cupcake</div>
                <div className={styles.price}>R$12,00</div>

            </div>
        </div>
    );
}