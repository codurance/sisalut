import { getXMaxValue, getYMaxValue } from './chartUtils';

const WIDTH = 500;
const HEIGHT = 500;
const MARGIN = { top: 20, bottom: 20, left: 20, right: 20 }

describe('getXMaxValue should', () => {
  test('tell the maximum possible value for the X', () => {

    expect(getXMaxValue(WIDTH, MARGIN)).toBe(460);
  });
}); 

describe('getYMaxValue should', () => {
  test('tell the maximum possible value for the Y', () => {

    expect(getXMaxValue(WIDTH, MARGIN)).toBe(460);
  });
}); 
