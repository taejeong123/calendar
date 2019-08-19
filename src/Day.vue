<template>
    <div class="day">
        <div class="date">
            <span class="number">{{day.date.getDate()}}</span>
            <span class="month">({{day.date.getMonth() + 1}}월)</span>
        </div>
        <div class="list">
            <div class="item" v-for="todo in day.list">{{todo.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'day',
        props:['day'],
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped>
    .day {
        width:100%;
        height:100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        box-shadow: 2px 2px 1px 1px #ddd;
    }

    .date {
        padding:8px;
    }

    .number {
        font-size:25px;
        font-weight: bold;
    }

    .month {
        font-size:15px;
        color:#555;
    }

</style>