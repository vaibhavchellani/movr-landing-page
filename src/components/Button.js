import Head from 'next/head'

export default function Button({text,outline=false,onClick}) {
  return (
    <div onClick={onClick} className={`z-20 cursor-pointer rounded-lg ${outline? 'text-white btn-outline' : ' text-black btn'} `}  >
      {text}
    </div>
  )
}
