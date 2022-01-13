export default {
  state: () => ({
    links: [
      {name: 'Home', path: '/', active: true},
      {name: 'About', path: '/about', active: false}
    ]
  }),
  getters: {
    links: (state: any) => state.links
  },
}
