const baseURL = 'http://localhost:3000/api/sightings/'


export default {

  postSighting(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
