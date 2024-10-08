import styles from './styles.module.css';
import EyeOff from './EyeOff.svg';
import EyeOn from './EyeOn.svg';
import { useState } from 'react';

type Props = {
    color: string;
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
    password?: boolean;
    warning?: boolean;
}

export const InputField = ({ color, placeholder, value, onChange, password, warning}: Props) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div 
            className={styles.container}
            style={{
                borderColor: !warning ? (focused ? color: '#F9F9FB') : 'FF0000',
                backgroundColor: focused ? '#FFF' : '#F9F9FB'
            }}  
        >
            <input
                type={password? (showPassword ? 'text' : 'password') : 'text'}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            {password &&
                <div 
                    className={styles.showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword && <EyeOn color="#4B0082"/>}
                    {!showPassword && <EyeOff color='9400d3'/>}
                </div>
            }
        </div>
    );
}