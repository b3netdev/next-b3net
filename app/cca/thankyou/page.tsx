"use client"
import { BASE_URL } from '@/lib/url'
import React, { useEffect } from 'react'
import { useAppDispatch } from "@/redux/hooks";
import { SetshowLayout } from "@/redux/slicers/menuSlicer";
import Link from 'next/link';

const page = () => {

      const dispatch = useAppDispatch();
    
      useEffect(() => {
        dispatch(SetshowLayout(false));
    
        return () => {
          dispatch(SetshowLayout(true));
        };
      }, []);

  return (
    <div className="container">
    <div className="contentBox row">
        <div className="w-full">
          
            <div className="header_area text-center">
                <div className="cardsec-logo"><Link href="/cca"><img src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}/></Link></div>
                
            </div>

            <div className="thankyou-payment-sec flex flex-col items-center  w-full">
                
                    <h2 className="thank-ttle font-bold">Thank You</h2>
                    
                    <p className='font-bold'>Your information has been submitted through our secured website</p>
                
            </div>			
        </div>
    </div>
</div>
  )
}

export default page
