const api = "https://tracking.bosta.co/shipments/track";

export const get = (shimpentID) =>
  fetch(`${api}/${shimpentID}`)
    .then((res) => res.json())
    .then((data) => data);
