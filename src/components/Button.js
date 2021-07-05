import Head from 'next/head'

export default function Button({text,outline=false}) {
  return (
    <div className={`py-2 z-20 cursor-pointer px-4 rounded-lg ${outline? 'text-white btn-outline' : ' text-black btn'} `}  >
      {text}
    </div>
  )
}
