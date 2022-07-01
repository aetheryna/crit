import React, { useEffect } from 'react';
import { PageTitle } from '../../helpers/setPageTitle';

jest.mock('next/router', () => require('next-router-mock'));

describe('Setting page title', () => {
  it('should return the page title', () => {
    const useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementation((result) => result());

    expect(PageTitle({ pathname: '/path' })).toEqual('Path');
  });
});
