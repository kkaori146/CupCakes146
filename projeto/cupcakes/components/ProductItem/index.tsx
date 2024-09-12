import Link from 'next/link';
import { Product } from '../../types/Products';
import styles from './styles.module.css';
import { useAppContext } from '../../contexts/AppContext';

type Props = {
    data: Product;
}

export const ProductItem = ({data}: Props) => {
    const { tenant } = useAppContext();

    return(
        <Link legacyBehavior href={`/${tenant?.slug}/product/${data.id}`}>
            <a className={styles.container}>
                <div className={styles.head} style={{backgroundColor: tenant?.secondColor}}></div>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={data.image} alt=''/>
                    </div>
                    <div className={styles.catName}>{data.categoryName}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{color: tenant?.mainColor}}>R${data.price.toFixed(2)}</div>
                </div>
            </a>
        </Link>
    );
}