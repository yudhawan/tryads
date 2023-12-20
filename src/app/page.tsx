import dynamic from 'next/dynamic'
import style from './page.module.scss'
import IconComponent from '@/components/IconComponent/IconComponent'
import { SearchIcon } from '@/icons'
import BalanceStatistic from '@/components/BalanceStatistic/BalanceStatistic'
import CreditCard from '@/components/CreditCard/CreditCard'
import ListItemsAndChat from '@/components/ListItemsAndChat/ListItemsAndChat'

// having a bug when working with reactchart so this is the only solution to avoid the error
export const BalanceStatisticCard = dynamic(
  ()=>import('../components/BalanceStatistic/BalanceStatistic'),
  {ssr:false}
)
export default function Home() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <section className={style.welcomText}>
          <h1>Hello, Jhon .D</h1>
          <p>View and control your finances here!</p>
        </section>
        <button className={style.buttonSearch}><IconComponent name={SearchIcon} /></button>
      </header>
      <div className={style.container}> 
        <div className={style.sectionOne}>
          <BalanceStatisticCard/>
          <CreditCard/>
        </div>
        <ListItemsAndChat/>
      </div>
    </main>
  )
}
