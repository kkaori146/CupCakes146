import { ProductItem } from '../../components/ProductItem';
import { Banner } from '../../components/Banner';
import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css';
import { GetServerSideProps } from 'next';
import { getTenantResponse, useApi } from '../../libs/useApi';

const Home = (data: Props) => {
  const handleSearch = (searchValue: string) => {
    console.log(`Você está buscando por: ${searchValue}`);

  }
  return (
    <div className= {styles.container}>
      
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo(a)👋</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor = "#8B008B"
            onSearch={handleSearch}
          />
        </div>
      </header>
      <Banner/>
      <div className={styles.grid}>
        <ProductItem
          data={{
            id:1,
            image:'/tmp/cupcake_amarelo.png', 
            categoryName: "Festa", 
            name: 'Yellow Dream', 
            price: 'R$12,00' 
          }}
          mainColor='#8B008B'
          secondColor='#FFF9F2'
        />

        <ProductItem
          data={{
            id:2,
            image:'/tmp/cupcake_rocher.png', 
            categoryName: "Festa", 
            name: 'Rocher Party', 
            price: 'R$17,00' 
          }}
          mainColor='#8B008B'
          secondColor='#FFF9F2'
        />

<ProductItem
          data={{
            id:3,
            image:'/tmp/cupcake_red.png', 
            categoryName: "Festa", 
            name: 'Blood Rose', 
            price: 'R$16,00' 
          }}
          mainColor='#8B008B'
          secondColor='#FFF9F2'
        />

<ProductItem
          data={{
            id:4,
            image:'/tmp/cupcake_rainbow.png', 
            categoryName: "Festa", 
            name: 'Rainbow Unicorn', 
            price: 'R$22,00'
          }}
          mainColor='#8B008B'
          secondColor='#FFF9F2'
        />
      </div>
    </div>
  );
}

export default Home;

type Props = {
  tenant: getTenantResponse
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug} = context.query;
  const api = useApi();

  // Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {redirect: {destination: '/',permanent: false}}
  }
  return {
    props: {

    }
  }
}