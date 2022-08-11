import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

afterEach(cleanup);


it('renders card', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


