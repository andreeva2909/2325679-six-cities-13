import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { useState } from 'react';

type PlaceCardListProps = {
  offers: Offer[];
  layout: string;
  count: number;
}

function PlaceCardList({ offers, layout, count }: PlaceCardListProps): JSX.Element | null{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState('');
  const handleActiveCard = (id?: string) => setActiveCard(id || '');
  const isOfferLayout = layout === 'offers';
  const hasOffers = offers.length !== 0;

  if (!hasOffers) {
    return null;
  }

  return (
    hasOffers &&
    (
      <div className={`${isOfferLayout ? 'near-places__list' : 'cities__places-list'} places__list tabs__content`}>
        {offers.slice(0, count).map((offer) => (
          <PlaceCard key={offer.id} offer={offer} onMouseEvent={handleActiveCard} layout={`${isOfferLayout ? 'offers' : 'main'}`} />
        ))}
      </div>
    )
  );
}

export default PlaceCardList;
