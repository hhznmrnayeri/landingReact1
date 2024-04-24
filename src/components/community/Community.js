import React from 'react';
import SectionTitle from '../clients/section-title';
import CommunityBox from './community-box';
export default function Community() {
  return (
    <div className='container mt-10'>
      <SectionTitle title='Manage your entire community in a single system' caption='Who is Nextcent suitable for?'></SectionTitle>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-12 gap-4 xl:gap-24'>
        <CommunityBox icon='./icons/MembershipOrganisations.svg' title='Membership Organisations' caption='Our membership management software provides full automation of membership renewals and payments'></CommunityBox>
        <CommunityBox icon='./icons/National-Associations.svg' title='National Associations' caption='Our membership management software provides full automation of membership renewals and payments'></CommunityBox>
        <CommunityBox icon='./icons/Clubs&Groups.svg' title='Clubs And Groups' caption='Our membership management software provides full automation of membership renewals and payments'></CommunityBox>
      </div>
    </div>
  )
}
