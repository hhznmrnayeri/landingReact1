import React from 'react';
import SectionTitle from '../clients/section-title';
import CommunityBox from './community-box';
import MembershipOrganisations from './MembershipOrganisations';
import NationalAssociations from './NationalAssociations';
import ClubsGroups from './ClubsGroups';
export default function Community() {
  return (
    <div className='container mt-10'>
      <SectionTitle title='Manage your entire community in a single system' caption='Who is Nextcent suitable for?'></SectionTitle>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-12 gap-4 xl:gap-24'>
        <CommunityBox icon={<MembershipOrganisations className='community__icon'/>} title='Membership Organisations' caption='Our membership management software provides full automation of membership renewals and payments'></CommunityBox>
        <CommunityBox icon={<NationalAssociations className='community__icon'/>} title='National Associations' caption='Our membership management software provides full automation of membership renewals and payments'></CommunityBox>
        <CommunityBox icon={<ClubsGroups className='community__icon'/>} title='Clubs And Groups' caption='Our membership management software provides full automation of membership renewals and payments'></CommunityBox>
      </div>
    </div>
  )
}
