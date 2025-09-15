import React from 'react';
import CountUp from 'react-countup';

export function ImpactMetricsNumbers() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
      <div>
        <div className="text-xs font-semibold text-black mb-2">AI Projects Delivered</div>
        <div className="text-3xl md:text-4xl font-extrabold text-black">
          <CountUp end={200} duration={1.2} suffix="+" />
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-black mb-2">Business Clients</div>
        <div className="text-3xl md:text-4xl font-extrabold text-black">
          <CountUp end={100} duration={1.2} suffix="+" />
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-black mb-2">Years of AI Experience</div>
        <div className="text-3xl md:text-4xl font-extrabold text-black">
          <CountUp end={15} duration={1.2} />
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-black mb-2">Client Satisfaction</div>
        <div className="text-3xl md:text-4xl font-extrabold text-black">
          <CountUp end={95} duration={1.2} suffix="%" />
        </div>
      </div>
    </div>
  );
}
