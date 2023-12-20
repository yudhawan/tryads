import dynamic from 'next/dynamic';
// having a bug when working with reactchart so this is the only solution to avoid the error
export const BalanceStatisticCard = dynamic(
    ()=>import('./BalanceStatistic'),
    {ssr:false}
  )