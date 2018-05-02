import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      isAdmin: window.localStorage.getItem('loggedIn') ? true : false,
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      },
      setAdminStatus(state, status) {
        state.isAdmin = status;
      },
      updatePost(state, post) {
        const postIndex = state.posts.findIndex(p => p.id === post.id);
        state.posts[postIndex] = post;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-8718b.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => {
            console.log(context.error(e));
          });
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts);
      },
      setAdminStatus({ commit }, status) {
        commit('setAdminStatus', status);
      },
      updatePost({ commit }, post) {
        commit('updatePost', post);
      }
    },
    getters: {
      posts(state) {
        return state.posts;
      },
      isAdmin(state) {
        return state.isAdmin;
      }
    }
  });
};

export default createStore;
