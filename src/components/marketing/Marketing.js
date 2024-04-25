import React from 'react'
import SectionTitle from './../clients/section-title'
import MarketingBox from './MarketingBox'
export default function Marketing() {
  return (
    <div className='mt-12'>
      <SectionTitle title='Caring is the new marketing' caption="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"></SectionTitle>
      <div className="container pt-4 pb-24">
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-28'>
          <MarketingBox styleName='bg-market1' text='Creating Streamlined Safeguarding Processes with OneRen'></MarketingBox>
          <MarketingBox styleName='bg-market2' text='What are your safeguarding responsibilities and how can you manage them?'></MarketingBox>
          <MarketingBox styleName='bg-market3' text='Revamping the Membership Model with Triathlon Australia'></MarketingBox>
        </div>
      </div>
      
    </div>
  )
}
