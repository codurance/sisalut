import React from 'react';
import { letterFrequency } from '@vx/mock-data';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import ReactTooltip from 'react-tooltip'
import { AxisLeft, AxisBottom } from '@vx/axis';
import { GradientTealBlue } from '@vx/gradient';
import { getXMaxValue, getYMaxValue } from './lib/chartUtils';

const data = letterFrequency;

const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

const xMax = getXMaxValue(width, margin);
const yMax = getYMaxValue(height, margin);

const x = d => d.letter;
const y = d => +d.frequency * 100;

const xScale = scaleBand({
  rangeRound: [0, xMax],
  domain: data.map(x),
  padding: 0.4,
});

const yScale = scaleLinear({
  rangeRound: [yMax, 0],
  domain: [0, Math.max(...data.map(y))],
});

const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

export function BarGraph() {
  return (
    <>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <GradientTealBlue id="TealBlue" vertical />
          {data.map((d, i) => {
            const barHeight = yMax - yPoint(d);
            return (
                <Bar
                  key={i}
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill={`url(#TealBlue)`}
                  data-tip={x(d) + " - " + barHeight}
                  data-for='barchar-tooltip'
                />
            );
          })}
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            tickLength={4}
            label="Frequency"
          />
          <AxisBottom 
            scale={xScale} 
            top={yMax} 
            tickLength={4}
            label="Letters"
          />
        </Group>
      </svg>
      <ReactTooltip id='barchar-tooltip' />
    </>
  );
}
