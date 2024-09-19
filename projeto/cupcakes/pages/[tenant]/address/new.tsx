import styles from '../../../styles/NewAddress.module.css';
import { GetServerSideProps } from 'next';
import { useApi } from '../../../libs/useApi';
import { useAppContext } from '../../../contexts/app';
import { useEffect, useState } from 'react';
import { Tenant } from '../../../types/Tenant';
import { getCookie } from 'cookies-next';
import { User } from '../../../types/User';
import { useAuthContext } from '../../../contexts/auth';
import Head from 'next/head';
import { Header } from '../../../components/Header';
import { useFormatter } from '../../../libs/useFormatter';
import { useRouter } from 'next/router';
import { Button } from '../../../components/Button';
import { Address } from '../../../types/Address';
import { AddressItem } from '../../../components/AddressItem';

const NewAddress = (data: Props) => {
  const {setToken, setUser} = useAuthContext();
  const { tenant, setTenant, setShippingAddress, setShippingPrice } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  const formatter = useFormatter();
  const router = useRouter();
  const api = useApi(data.tenant.slug);

  const handleNewAddress = () => {
    router.push(`/${data.tenant.slug}/address/new`);
  }


  return (
    <div className= {styles.container}>
      <Head>
        <title>Novo Endereços | {data.tenant.name}</title>
      </Head>

      <Header
        backHref={`/${data.tenant.slug}/checkout`}
        color={data.tenant.mainColor}
        title="Novo Endereços"
      />

      <div className={styles.btnArea}>
        <Button
            color={data.tenant.mainColor}
            label='Novo Endereço'
            onClick={handleNewAddress}
            fill
        />
      </div>
    </div>
  );
}

export default NewAddress;

type Props = {
  tenant: Tenant;
  token: string;
  user: User | null;
  addresses: Address[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug} = context.query;
  const api = useApi(tenantSlug as string);

  // Get Tenant
  const tenant = await api.getTenant();
  if (!tenant) {
    return {redirect: { destination: '/',permanent: false}}
  }

  // Get Logged User
//  const token = context.req.cookies.token;
const token = getCookie('token', context);
const user = await api.authorizeToken(token as string);
if (!user) {
    return {redirect: {destination: '/login', permanent: false}}
}

//Get Addresses from Logged User
const addresses = await api.getUserAddresses(user.email);

  return {
    props: {
      tenant,
      user,
      token,
      addresses
    }
  }
}