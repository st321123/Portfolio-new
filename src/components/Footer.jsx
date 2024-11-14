import React from 'react'

 function Footer() {
    
  return (
    <div className=' bg-customFooter space-y-1 p-2 font-serif  sm:flex sm:flex-col text-xs  xs:text-sm sm:text-lg md:text-xl  '>
      <div className=' flex justify-between'>
       <h1>I'm always up for a chat ☕</h1>
      
       <a  target="_blank" href='https://www.linkedin.com/in/shubham-tewari-97336b24b/'>

       <img className='bg-blue-600 h-4 w-4 xs:h-full xs:w-full' src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/alt_text_label_LinkedIn.png" /></a>
       </div>

<div className='flex  '>
<footer className='mx-auto '>©2024 by Shubham Tewari.</footer>
</div>
    </div>
  )
}

export default Footer;
