import styles from './styles.module.css';
import CartIcon from './cart.svg';
import ConfigIcon from './config.svg';
import FavIcon from './fav.svg';
import LogoutIcon from './logout.svg';
import MenuIcon from './menu.svg';
import OrderIcon from './order.svg';

type Props = {
    color: string;
    label: string;
    icon: 'cart' | 'config' | 'fav' | 'logout' | 'menu' | 'order';
    onClick: () => void;
}

export const SidebarMenuItem = ({color, label, icon, onClick}: Props) => {
    return(
        <div className={styles.container} onClick={onClick}>
            {icon === 'cart' && <CartIcon color={color}/>}
            {icon === 'config' && <ConfigIcon color={color}/>}
            {icon === 'fav' && <FavIcon color={color}/>}
            {icon === 'logout' && <LogoutIcon color={color}/>}
            {icon === 'menu' && <MenuIcon color={color}/>}
            {icon === 'order' && <OrderIcon color={color}/>}
            <span>{label}</span>
        </div>
    );
}