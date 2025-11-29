import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-700 font-medium'>ABOUT <span>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4
         text-sm text-gray-600'>
          <p>At Hospital X, our mission is to make healthcare simple, accessible, and trustworthy for everyone. We bring patients and qualified doctors together on one seamless platform where you can easily find specialists, book appointments, and receive quality medical care without stress or confusion. </p> <p> We believe that good health starts with the right information and the right guidance. That’s why Hospital X is built with modern technology, secure systems, and a user-friendly interface—so every patient can connect with the best doctors in just a few clicks. Whether it’s general consultation, expert advice, or long-term care, Hospital X is designed to support your health journey at every step.</p>
          <b className='text-gray-800'>Our vision</b>
          <p>Our vision is to create a future where high-quality healthcare is available to every individual, regardless of location or background. We aim to build a reliable platform where patients feel safe, doctors feel supported, and healthcare becomes more transparent, efficient, and connected. </p> <p> With continuous innovation, a dedication to patient well-being, and a strong commitment to integrity, Hospital X is working to redefine what modern healthcare looks like.</p>
        </div>
      </div>

      <div className=''>
        <p>WHY <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-md'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-md'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-md'>
          <b>Personalization</b>
          <p>Tailored recommendation and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About