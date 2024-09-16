import styles from "./styles.module.css"
import { Product } from "../../types/Product"

type Props = {
    color: string;
    quantity: number;
    product: Product;
    onChange: (newCount: number, id: number) => void;
}

export const CartProductItem = () => {
    return (
        <div className={styles.container}></div>
    )
}