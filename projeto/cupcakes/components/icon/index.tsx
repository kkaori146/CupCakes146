import MailSent from './mailSent.svg';
import Card from './card.svg';
import Checked from './checked.svg';
import Cupom from './cupom.svg';
import Location from './location.svg';
import Money from './money.svg';
import RightArrow from './rightarrow.svg';

type Props = {
    icon: string;
    color: string;
    width: number;
    svg: string;
    height: number;    
}

export const Icon = ({icon, color, width, height, svg}: Props) => {
    return (
        <div style={{width, height}}>
            {svg === 'card' && <Card color={color}/>}
            {svg === 'checked' && <Checked color={color}/>}
            {svg === 'cupom' && <Cupom color={color}/>}
            {svg === 'location' && <Location color={color}/>}
            {svg === 'mailSent' && <MailSent color={color}/>}
            {svg === 'money' && <Money color={color}/>}
            {svg === 'rightarrow' && <RightArrow color={color}/>}
        </div>
    );
}