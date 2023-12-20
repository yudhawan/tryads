'use client'
import React from 'react'
import style from './BalanceStatistic.module.scss'
import Image from 'next/image'
import { Bar, BarChart, Legend, Line, LineChart, Rectangle, Tooltip, XAxis, YAxis } from 'recharts'
import IconComponent from '../IconComponent/IconComponent'
import { ChevronIcon } from '@/icons'
function BalanceStatistic() {
    const data = [{val:100},{val:200},{val:700},{val:1000},{val:600},{val:100},{val:100},{val:100},]
    const data2 = [
        {
            name:'Oct',
            valA:60,
            valB:55
        },
        {
            name:'Nov',
            valA:25,
            valB:15
        },
        {
            name:'Dec',
            valA:25,
            valB:10
        },
        {
            name:'Jan',
            valA:22,
            valB:7
        },
        {
            name:'Feb',
            valA:12,
            valB:5
        },
    ]
  return (
    <div className={style.main}>
        <div className={style.infoStatistic}>
            <p className={style.title}>Balance Statistics</p>
            <h1>$564</h1>
            <div className={style.infoBalance}>
                <Image src={'/goldCoins.png'} alt='coin' width={90} height={50} />
                <p>Your total Balance</p>
            </div>
            <div className={style.miniChart}>
                <LineChart width={100} height={50} data={data}>
                    <Line dataKey={'val'} stroke='blue' type='monotone' dot={false} />
                </LineChart>
                <IconComponent name={ChevronIcon} />
                <span>6%</span>
            </div>
            <span className={style.infoText}>Always see your earnings updates</span>
        </div>
        <div className={style.chartContainer}>
        <select className={style.filterContainer}>
            <option>filter</option>
        </select>
        <BarChart
          width={300}
          height={200}
          data={data2}
        >
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(val)=> '$'+val} />
            <Tooltip />
            <Bar dataKey="valA" fill="#545DE6" id='valA' />
            <Bar dataKey="valB" fill="#C7CAFF" id='valB' />
        </BarChart>
        </div>
    </div>
  )
}

export default BalanceStatistic