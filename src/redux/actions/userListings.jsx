export const addListing = (listing) => ({
    type: 'ADD_LISTING',
    payload: listing,
  });
  
  export const deleteListing = (listingId) => ({
    type: 'DELETE_LISTING',
    payload: listingId,
  });
  
  
  