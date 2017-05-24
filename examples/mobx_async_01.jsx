import fetch from 'isomorphic-fetch';
import { observable, autorun } from 'mobx';

const RESOURCE_URL = '...';

const cats = observable({ amount: 0, isLoading: false });

autorun(() => console.log(cats));

fetchAmount();

function fetchAmount() {
  cats.isLoading = true;

  return fetch(RESOURCE_URL).then(res => {
    if(res.ok) {
      return res.json();
    }

    throw(res.statusText);
  }).then(body => {
    cats.isLoading = false;
    cats.amount = body;
  }).catch(error => {
    cats.isLoading = false;
  });
}
