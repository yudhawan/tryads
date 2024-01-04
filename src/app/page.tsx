import CreditCard from '@/components/CreditCard/CreditCard'
import ListItemsAndChat from '@/components/ListItemsAndChat/ListItemsAndChat'
import { BalanceStatisticCard } from '@/components/BalanceStatistic'
import Header from '@/containers/Header/Header'
import ListTransaction from '@/components/ListTransaction/ListTransaction'
import style from './page.module.scss'
import Analytic from '@/components/Analytic/Analytic'



export default function Home() {
  return (
    <main className={style.main}>
      <Header/>
      <div className={style.container}> 
        <div className={style.sectionOne}>
          <BalanceStatisticCard/>
          <CreditCard/>
        </div>
        <ListItemsAndChat/>
        <ListTransaction/>
        <Analytic/>
      </div>
    </main>
  )
}
