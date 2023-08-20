import Image from 'next/image'
import Links from 'next/link'
import { footerLinks } from '@/constants'



const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image src='logo.svg' alt='logo footer' width={118} height={18} className='object-contain' />
                    <p className='text-base text-gray-700'>CarPay 2023 <br />All Rights Reserved &copy;</p>
                </div>
                <div className='footer__links'>
                    {footerLinks.map((Link) => (
                        <div key={Link.title} className='footer__link'>
                            <h3 className='font-bold'>{Link.title}</h3>
                            {Link.links.map((item) => (
                                <Links key={item.title} href={item.url} className='text-gray-500'>
                                    {item.title}
                                </Links>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>

                <p>@2023 CarPay All Rights Reserved &copy;</p>
                <div className='footer__copyrights-link'>
                    <Links
                        href='/'
                        className='text-gray-500'
                    >
                        Privacy Policy
                    </Links>
                    <Links
                        href='/'
                        className='text-gray-500'
                    >
                        Terms of Use
                    </Links>
                </div>
            </div>

        </footer>
    )
}

export default Footer