import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { useDecision, createInstance } from '@optimizely/react-sdk';

const optimizelyClient = createInstance({
  sdkKey: 'UxzRZhTfjEQgm2aAqAPnY',
});

export function ShoeListItem() {
  const [decision] = useDecision(
    'fullstack_test',
    { autoUpdate: true },
  )
  useEffect(() => {
    document.title = decision.enabled ? 'above_title_original' : 'above_title_variation';
  }, [decision.enabled]);

    const item = this.props.item

    return (
      <OptimizelyProvider optimizely={optimizelyClient} user={{ id: 'user1' }} isServerSide={true}>
      decision['enabled']
        ? (<li className="push--bottom" style={listItemStyle}>
          <Link style={{ 'color': '#222' }} to={`/pdp/${item.id}`}>
            <img
              style={listImageStyle}
              src={`public/${item.image_url}`}
            />
            <div className="price">{item.category}</div>
            <div>{item.name}</div>
            <div className="price">${item.price}</div>
          </Link>
        </li>)
        : (<li className="push--bottom" style={listItemStyle}>
          <Link style={{ 'color': '#222' }} to={`/pdp/${item.id}`}>
            <img
              style={listImageStyle}
              src={`public/${item.image_url}`}
            />
            <div>{item.name}</div>
            <div className="price">{item.category}</div>
            <div className="price">${item.price}</div>
          </Link>
        </li>)
      </OptimizelyProvider>
    )
}

const listImageStyle = {
  height: '100px',
  width: '100px',
}

const listItemStyle = {
  'listStyle': 'none',
  'width': '200px',
  'float': 'left',
  'font-family': 'sans-serif'
}
