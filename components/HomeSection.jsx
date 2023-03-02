import React from 'react';
import Hero from '@/components/Hero';
import Grid2Span1 from './home-components/Grid2/Grid2Span1';
import Grid1Span1 from './home-components/Grid1/Grid1Span1';
import Grid1Span2 from './home-components/Grid1/Grid1Span2';
import Grid2Span2 from './home-components/Grid2/Grid2Span2';
import Grid1Span3 from './home-components/Grid1/Grid1Span3';
import Grid1Span4 from './home-components/Grid1/Grid1Span4';
import Grid1Span5 from './home-components/Grid1/Grid1Span5';
import Grid1Span6 from './home-components/Grid1/Grid1Span6';
import Grid1Span7 from './home-components/Grid1/Grid1Span7';
import Grid2Span3 from './home-components/Grid2/Grid2Span3';
import Grid2Span4 from './home-components/Grid2/Grid2Span4';
import Grid2Span5 from './home-components/Grid2/Grid2Span5';
import Grid2Span6 from './home-components/Grid2/Grid2Span6';
import Grid2Span7 from './home-components/Grid2/Grid2Span7';
import Grid2Span8 from './home-components/Grid2/Grid2Span8';
import Slider from './Slider';
import Newsletter from './Newsletter';

export default function HomeSection() {
  return (
    <>
      <Hero />
      <section>
        <div className="min-h-screen grid md:grid-cols-3 md:gap-14 md:p-12 py-24">
          <div className="md:col-span-1">
            <Grid1Span1 />
            <Grid1Span2 />
            <Grid1Span3 />
            <Grid1Span4 />
            <Grid1Span5 />
            <Grid1Span6 />
            <Grid1Span7 />
          </div>
          <div className="md:col-span-2">
            <Grid2Span1 />
            <Grid2Span2 />
            <Grid2Span3 />
            <Grid2Span4 />
            <Grid2Span5 />
            <Grid2Span6 />
            <Grid2Span7 />
            <Grid2Span8 />
          </div>
        </div>
        <Slider />
        <Newsletter />
      </section>
    </>
  );
}
