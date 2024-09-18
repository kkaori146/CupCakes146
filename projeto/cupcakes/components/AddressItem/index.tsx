import styles from './styles.module.css';
import { Address } from '../../types/Address';
import { Icon } from '../icon';

type Props = {
    color: string;
    address: Address;
    onSelect: (address: Address) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    menuOpened: number;
    setMenuOpened: (id: number) => void;
}

export const AddressItem = ({color, address, onSelect, onEdit, onDelete, menuOpened, setMenuOpened}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.addressArea} onClick={() => onSelect(address)}>
                <div className={styles.addressIcon}>
                    <Icon
                        color={color}
                        svg="location"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.addressText}>{`${address.street} ${address.number}, ${address.city}`}
                </div>
            </div>
            <div className={styles.btnArea}>
                <div className={styles.menuIcon} onClick={() => setMenuOpened(address.id)}>
                    <Icon
                        color='#647D8B'
                        svg='dots'
                        width={24}
                        height={24}
                    />
                </div>
                {menuOpened === address.id &&
                    <div className={styles.popup}>
                        ...
                    </div>
                }
            </div>
        </div>
    )
}