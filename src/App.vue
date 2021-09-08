<template>
  <div>
    <LikeHeader>
      <h3>初めまして</h3>
    </LikeHeader>

    <LikeNumber v-bind:totalNumber='number' @my-click='incrementNumber'></LikeNumber>
    <LikeNumber :total-number='number' test-props='test'></LikeNumber>

    <button @click="currentComponent = 'Home'">Homeになる</button>
    <button @click="currentComponent = 'About'">Aboutになる</button>

    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>

    <div style='padding-bottom: 10rem;'>
      <h2>イベントフォーム</h2>
      <EventTitle v-model='eventData.title'></EventTitle>
      <EventTitle :value='eventData.title' @input='eventData.title = $event'></EventTitle>

      <label for='maxNumber'>最大人数</label>
      <input id='maxNumber' type='number' v-model.number='eventData.maxNumber'>
      <pre>{{ eventData.maxNumber }}</pre>

      <label for='host'>主催者</label>
      <input id='host' type='text' v-model.trim='eventData.host'>
      <p>{{ eventData.host }}</p>

      <label for='detail'>イベントの内容</label>
      <textarea id='detail' cols='30' rows='10' v-model='eventData.detail'></textarea>
      <p style='white-space: pre;'>{{ eventData.detail }}</p>

      <input type='checkbox' id='isPrivate' v-model='eventData.isPrivate'>
      <label for='isPrivate'>非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type='checkbox' id='10' value='10代' v-model='eventData.target'>
      <label for='10'>10代だよ</label>
      <input type='checkbox' id='20' value='20代' v-model='eventData.target'>
      <label for='20'>20代ですけど？</label>
      <input type='checkbox' id='30' value='30代' v-model='eventData.target'>
      <label for='30'>30代でごわす</label>
      <p>{{ eventData.target }}</p>

      <p>参加費</p>
      <input type='radio' id='free' value='無料' v-model='eventData.price'>
      <label for='free'>無料だよ</label>
      <input type='radio' id='paid' value='有料' v-model='eventData.price'>
      <label for='free'>有料だよ</label>

      <p>開催場所</p>
      <select v-model='eventData.location' multiple>
        <option v-for='location in locations' :key='location'>
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'; 
import About from './components/About.vue';
import Home from './components/Home.vue';
import EventTitle from './components/EventTitle.vue';

export default {
  data() {
    return {
      number: 100,
      currentComponent: 'Home',
      locations: ['東京', '千葉', '神奈川'],
      eventData: {
        title: 'タイトル?',
        maxNumber: 0,
        host: '',
        detail: '',
        isPrivate: false,
        target: [],
        price: '有料',
        location: ['千葉']
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
};
</script>