<template>
  <div>
    <h1>Vote for users</h1>
    <div v-if="!users.length">
      <p>
        You don't have any users. Run <code>bin/rails db:seed</code> to add
        users.
      </p>
    </div>
    <ul v-for="(user, index) in localUsers" :key="user.id">
      <li>
        {{ user.email }}: {{ user.votes }} votes
        <button @click="vote(user, index)">VOTE</button>
        <ul
          v-if="user.badges.length"
          v-for="badge in user.badges"
          :key="badge.id"
        >
          <li>{{ badge.name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.esm";
import { clone } from "ramda";
import FetchMixin from "./fetchMixin";

export default {
  props: ["users"],
  mixins: [FetchMixin],
  data: function() {
    return {
      localUsers: clone(this.users),
      message: "Hello Vue!"
    };
  },
  methods: {
    vote(user, index) {
      this.post(`/users/${user.id}/vote`, {})
        .then(response => response.json())
        .then(json => {
          if (!json.errors) {
            Vue.set(this.localUsers, index, json);
          }
        })
        .catch(error => {
          console.log("error:", error);
        });
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
