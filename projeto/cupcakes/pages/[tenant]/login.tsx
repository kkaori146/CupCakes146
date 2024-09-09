import styles from '../../styles/Login.module.css';
import { GetServerSideProps } from 'next';
import { useApi } from '../../libs/useApi';
import { useAppContext } from '../../contexts/AppContext';
import { useEffect, useState } from 'react';
import { Tenant } from '../../types/Tenant';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
  }
  const handleSignUp = () => {
    
  }

  return (
    <div className= {styles.container}>
          <Head>
            <title>Login | {data.tenant.name}</title>
          </Head>

          <Header
            color={data.tenant.mainColor}
            backHref={`/${data.tenant.slug}`}
          />

          <div className={styles.header}>{data.tenant.name}</div>

          <div className={styles.subtitle}>Use suas credenciais para realizar o login</div>

          <div className={styles.formArea}>
            
            <div className={styles.inputArea}>
              <InputField
                color={data.tenant.mainColor}
                placeholder='Digite seu e-mail'
                value={email}
                onChange={setEmail}
              />
            </div>

            <div className={styles.inputArea}>
              <InputField
                color={data.tenant.mainColor}
                placeholder='Digite sua senha'
                value={password}
                onChange={setPassword}
                password
              />
            </div>
            <div className={styles.inputArea}>
              <Button
                color={data.tenant.mainColor}
                label="Entrar"
                onClick={handleSubmit}
                fill
              />
            </div>
          </div>
          <div className={styles.forgetArea}>
            Esqueceu sua senha? Clique aqui
          </div>
          <div className={styles.signupArea}>
            <Button
              color={data.tenant.mainColor}
              label="Quero Me Cadastrar"
              onClick={handleSignUp}
            />
          </div>
    </div>
  );
}

export default Login;

type Props = {
  tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug} = context.query;
  const api = useApi();

  // Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {redirect: { destination: '/',permanent: false}}
  }
  return {
    props: {
      tenant
    }
  }
}