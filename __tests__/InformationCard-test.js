import React from 'react';
import renderer from 'react-test-renderer';
import InformationCard from '../src/components/InformationCard/InformationCard';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <InformationCard title="Test Nedir" value="Test Nedir Açıklaması" />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
