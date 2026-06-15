"use client";
import { payoutData } from '@/utils/tempoData/payoutData';
import SectionHeader from '../shared/headers/SectionHeader';
import PayoutCard from '../shared/cards/PayoutCard';

const PayoutScheduleSection = () => {
  const handleRequestPayout = () => {
    console.log('Request Payout Button Clicked');
  };


  return (
    <section className="section-container">
      {/* HEADER */}
      <SectionHeader
        heading={"Payout Schedule"}
        btnText={"Request Payout"}
        onClick={handleRequestPayout}
      />   

      {/* PAYOUT DATA CARDS */}
      <div className="payout-cards-list">
        {payoutData.slice(0,4).map((payout) => (
          <PayoutCard
            key={payout.id}
            payout={payout}
          />
        ))}
      </div>
    </section>
  );
};

export default PayoutScheduleSection;