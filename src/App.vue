<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png" />
      <h2>Gondr Calendar</h2>
    </div>
    <div class="button-row">
      <button @click="prev">이전</button>
      <div class="month-label">{{current.getMonth() + 1}}월</div>
      <button @click="next">다음</button>
    </div>
    <div class="calendar">
      <div v-for="week in dayList" class="week">
        <day v-for="day in week" :day="day" :key="day.date">{{day}}</day>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    let now = new Date();
    this.drawCalendar(now);
  },
  methods: {
    drawCalendar(now) {
      this.current = now;
      let first = now.getFirstDate();
      first.addDay(-first.getDay()); //달력의 최초 시작일이 나온다.
      this.dayList = [];
      while (true) {
        let arr = [];
        for (let i = 0; i < 7; i++) {
          arr.push({ date: first.clone(), list: [] });
          first.addDay(1);
        }
        this.dayList.push(arr);
        if (first.getMonth() != now.getMonth()) {
          break;
        }
      }
    },
    prev() {
      let pre = this.current.clone();
      pre.setMonth( pre.getMonth() - 1);
      this.drawCalendar(pre);
    },
    next() {
      let nex = this.current.clone();
      nex.setMonth( nex.getMonth() + 1);
      this.drawCalendar(nex);
    }
  },
  data() {
    return {
      current:null,
      dayList: []
    };
  }
};
</script>

<style>
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.button-row {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.month-label {
  font-size: 25px;
}
.calendar {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
}
.week {
  display: grid;
  grid-gap: 10px;
  margin-bottom: 10px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: minmax(120px, auto);
}
</style>