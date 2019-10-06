import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  let wrapper;
  const mockDeleteArticle = jest.fn();

  beforeEach(() => {
      wrapper = shallow(<NewsContainer 
      id={1}
      image="http://myimage.com"
      headline="Trump resigns!"
      description="Hell freezes over. Kaiser Drumpf takes his ball and goes home."
      url="http://my.article.com"
      deleteArticle={mockDeleteArticle}
      />);
  });

  it('should match the snapshot', () => {
 
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a news article', () => {

  })
})