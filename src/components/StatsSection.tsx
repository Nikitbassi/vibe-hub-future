
import React from 'react';
import CountUp from './CountUp';

const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 hidden-element">
      {[{
        number: 600,
        suffix: "M+",
        label: "Views"
      }, {
        number: 90,
        suffix: "+",
        label: "Team Members"
      }, {
        number: 25,
        suffix: "+",
        label: "Channels"
      }, {
        number: 5,
        suffix: "+",
        label: "Years of Growth"
      }].map(stat => (
        <div key={stat.label} className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">
            <CountUp end={stat.number} suffix={stat.suffix} className="text-gradient" />
          </h3>
          <p className="text-nbgray">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
