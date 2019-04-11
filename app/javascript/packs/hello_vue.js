/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.
import Vue from "vue/dist/vue.esm";
import Vote from "../vote.vue";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("users");

  if (element !== null) {
    const props = JSON.parse(element.getAttribute("data"));
    const vote = new Vue({
      render: h => h(Vote, { props })
    }).$mount(element);
  }
});
