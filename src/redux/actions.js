export const setUser = (username) => {
  console.log("action: ", username);
  return {
    type: "SET_USER",
    value: username,
  };
};

export const addListing = (listing) => {
  return {
      type: 'ADD_LISTING',
      value: listing
  }
}

export const removeListing = (index) => {
  return {
      type: 'REMOVE_LISTING',
      value: index
  }
}