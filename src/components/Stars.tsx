import React from 'react';
import StarsProps from '../types/Stars.types';
import Star from './Star';

type Props = Readonly<StarsProps>;

const Stars: React.FC<Props> = ({ count }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const stars = Array(count);

  for (let index = 0; index < count; index++) {
    stars[index] = {
      id: index,
      value: <Star />,
    };
  }

  return (
    <ul className="card-body-stars">
      {stars.map((star) => (
        <li key={star.id}>{star.value}</li>
      ))}
    </ul>
  );
};

export default Stars;
