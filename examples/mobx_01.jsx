import { observable, autorun } from 'mobx';

const cats = observable({
  amount: 0
});

autorun(() => console.log(cats));

cats.amount++;

// {amount: 0}
// {amount: 1}
