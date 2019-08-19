import Vue from 'vue';
import App from './App.vue';
import Day from './Day.vue';

Date.prototype.clone = function(){
  return new Date(this);
}

Date.prototype.getFirstDate = function(){
  let temp = this.clone();
  temp.setDate(1);
  return temp;
}

Date.prototype.addDay = function(value) {
  this.setDate( this.getDate() + value);
}

Vue.component('day', Day);

new Vue({
  el: '#app',
  render: h => h(App)
})
