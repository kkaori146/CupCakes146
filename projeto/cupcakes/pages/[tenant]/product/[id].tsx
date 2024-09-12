import styles from '../../../styles/Product-id.module.css';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useApi } from '../../../libs/useApi';
import { useAppContext } from '../../../contexts/AppContext';
import { useEffect, useState } from 'react';
import { Tenant } from '../../../types/Tenant';
import { Product } from '../../../types/Product';
import { Header } from '../../../components/Header';


const Product = (data: Props) => {
  const { tenant, setTenant } = useAppContext();

  useEffect(() => {
    setTenant(data.tenant);
  }, []);


  return (
    <div className= {styles.container}>  
        <Head>
            <title>{data.product.name} | {data.tenant.name}</title>
        </Head>

            <div className={styles.headerArea}>
                <Header
                    color={data.tenant.mainColor}
                    backHref={`/${data.tenant.slug}`}
                    title="Produto"
                    invert
                />
            </div>
            <div className={styles.headerBg} style={{backgroundColor: data.tenant.mainColor}}></div>
            <div className={styles.productImage}>
                <img src={data.product.image} alt=""/>
            </div>
    </div>
  );
}

export default Product;

type Props = {
  tenant: Tenant
  product: Product
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug, id} = context.query;
  const api = useApi(tenantSlug as string);

  // Get Tenant
  const tenant = await api.getTenant();
  if (!tenant) {
    return {redirect: { destination: '/',permanent: false}}
  }

  // Get Products
  const product = await api.getProducts(id as String);

  return {
    props: {
      tenant,
      product
    }
  }
}