'use client'
import React, { FormEventHandler, useState } from 'react'
import IconComponent from '../IconComponent/IconComponent'
import { ChevronIcon, FileIcon, SmileIcon } from '@/icons'
import style from './ListItemsAndChat.module.scss'
import MenuThreeDots from '../MenuThreeDots/MenuThreeDots'
import Image from 'next/image'
import Button from '../Button/Button'
function ListItemsAndChat() {
    const [message,setMessage] = useState('')
    const [chats,setChats] = useState([
        {
            from:'Jhon',
            to:'Mira',
            content:'Are you ready?'
        },
        {
            from:'Mira',
            to:'Jhon',
            content:'I have prepared anything'
        },
    ])
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.shiftKey) {
          event.preventDefault()
          const { selectionStart, selectionEnd } = event.currentTarget;
          const newMessage =
            message.substring(0, selectionStart) +
            '\n' +
            message.substring(selectionEnd)
          setMessage(newMessage)
        } else if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault()
          handleSubmit()
        }
    }

    const handleSubmit = () => {
        setChats(prev=>([...prev,{from:'Jhon',to:'Mira',content:message}]))
        setMessage('')
    }
      
  return (
    <section className={style.main}>
        <div className={style.mainContainer}>
            <p className={style.title}>List of item to buy</p>
            <div className={style.timeContainer}>
                <div>
                    <p>02:00</p>
                    <span className={style.labelmedium}>Sat, August 12</span>
                </div>
                <IconComponent name={ChevronIcon} className={style.arrowRight} />
                <div>
                    <p>05:00</p>
                    <span className={style.labelmedium}>Sat, September 12</span>
                </div>
            </div>
            <div className={style.barInfo}>
                <div>
                    <span>0/3</span>
                    <p>Shopping list</p>
                </div>
                <button>+ Add an item</button>
            </div>
            <div className={style.listContiner}>
                <div className={style.list}><input type='checkbox' />Macbook<MenuThreeDots classname={style.menu} /></div>
                <div className={style.list}><input type='checkbox' />Bicycle<MenuThreeDots classname={style.menu} /></div>
                <div className={style.list}><input type='checkbox' />Motorcycle<MenuThreeDots classname={style.menu} /></div>
                <div className={style.list}><input type='checkbox' />Iphone<MenuThreeDots classname={style.menu} /></div>
            </div>
        </div>
        <div className={style.divide}></div>
        <div className={style.mainContainerRight}>
            <p className={style.title}>Esther Howard</p>
            <ul className={style.chatListContainer}>
                {
                    chats.map((val,index)=>{
                        if(val.from==='Jhon') return(
                            <li className={style.chatList+' '+style.chatListCurrentUser} key={index}>
                                <Image src={'https://cdn-icons-png.flaticon.com/512/5556/5556468.png'} width={40} height={40} alt={val.from} className={style.userImage} />
                                <span className={style.currentuser}>{val.content}</span>
                            </li>
                        )
                        return <li className={style.chatList} key={index}>
                            <Image src={'https://cdn-icons-png.flaticon.com/512/6075/6075696.png'} width={40} height={40} alt={val.from} className={style.userImage} />
                            <span className={style.userDestination}>{val.content}</span>
                        </li>
                    }
                )}
            </ul>
            <form className={style.inputTextContainer}>
                <textarea placeholder='Type your message (Shift+Enter for a new line)' className={style.inputText} onKeyDown={handleKeyDown} onChange={e=>setMessage(e.target.value)} value={message} />
                <div className={style.actionTextContainer}>
                    <div className={style.iconActionContainer}>
                        <IconComponent name={SmileIcon} className={style.iconAction} />
                        <IconComponent name={FileIcon} className={style.iconAction} />
                    </div>
                    <Button name='send now' onClick={handleSubmit} />
                </div>
            </form>
        </div>
    </section>
  )
}

export default ListItemsAndChat