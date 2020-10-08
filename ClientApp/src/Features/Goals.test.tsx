import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import { Goal, Goals } from './Goals';

const testGoal: Goal = {
  name: 'Test goal!',
  completed: false,
};

const testGoalsData: Goals = {
  goals: [testGoal],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(testGoalsData),
  }),
) as any;

beforeEach(() => {
  (fetch as jest.Mock<unknown>).mockClear();
});

describe('<Goals />', () => {
  it('renders a goal!', async () => {
    const result = render(<Goals />);

    expect(fetch).toHaveBeenCalledTimes(1);
    await waitForElement(() => result.getByText(testGoal.name));
  });
});
