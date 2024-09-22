import Link from 'next/link';
import { Product } from '../../types/Product';
import styles from './styles.module.css';
import { useAppContext } from '../../contexts/app';
import { useFormatter } from '../../libs/useFormatter';

type Props = {
    data: Product;
}

export const ProductItem = ({data}: Props) => {
    const { tenant } = useAppContext();

    const formatter = useFormatter();
    return (
        <div className={styles.productsContainer}> {/* Novo contêiner flexbox */}
            <Link legacyBehavior href={`/${tenant?.slug}/product/${data.id}`}>
                <a className={styles.container}>
                    <div className={styles.head} style={{backgroundColor: tenant?.secondColor}}></div>
                    <div className={styles.info}>
                        <div className={styles.img}>
                            <img src={data.image} alt=''/>
                        </div>
                        <div className={styles.catName}>{data.categoryName}</div>
                        <div className={styles.name}>{data.name}</div>
                        <div className={styles.price} style={{color: tenant?.mainColor}}>{formatter.formatPrice(data.price)}</div>
                    </div>
                </a>
            </Link>
    
            <Link legacyBehavior href={`/${tenant?.slug}/product/${data.id}`}>
                <a className={styles.container}>
                    <div className={styles.head} style={{backgroundColor: tenant?.secondColor}}></div>
                    <div className={styles.info}>
                        <div className={styles.img}>
                            <img src='/tmp/cupcake_colorido.png' alt=''/>
                        </div>
                        <div className={styles.catName}>Festa - Promoção</div>
                        <div className={styles.name}>Colorido Confeito</div>
                        <div className={styles.price} style={{color: tenant?.mainColor}}>ESGOTADO</div>
                    </div>
                </a>
            </Link>

            <Link legacyBehavior href={`/${tenant?.slug}/product/${data.id}`}>
                <a className={styles.container}>
                    <div className={styles.head} style={{backgroundColor: tenant?.secondColor}}></div>
                    <div className={styles.info}>
                        <div className={styles.img}>
                            <img src='/tmp/cupcake_rocher.png' alt=''/>
                        </div>
                        <div className={styles.catName}>Festa - Promoção</div>
                        <div className={styles.name}>Rocher Rock</div>
                        <div className={styles.price} style={{color: tenant?.mainColor}}>ESGOTADO</div>
                    </div>
                </a>
            </Link>
        </div>
    );
}