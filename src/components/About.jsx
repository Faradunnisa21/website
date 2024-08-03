import React from 'react'
import aboutImg from '../assets/about.png'
import member from '../assets/member.png'
import clubs from '../assets/clubs.png'
import payment from '../assets/payment.png'
import event from '../assets/event.png'

const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>


            </div>

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <span className='text-brandPrimary'>business reinvent itself</span> </h2>
                        <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>We reached here with our hard work and dedication</p>
                    </div>

                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/member.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>



                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/clubs.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>


                        </div>


                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/event.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p>Event Bookings</p>

                                </div>
                            </div>



                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/payment.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About