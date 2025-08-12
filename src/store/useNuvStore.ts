export const useNavStore = defineStore('nav-store', () => {
  const navItems = ref([
    {
      active: false,
      id: '1',
      title: 'Home',
      route: '/',
    },
    {
      active: false,
      id: '2',
      title: 'Services',
      route: '/services',
    },
    {
      active: false,
      id: '3',
      title: 'Blogs',
      route: '/blogs',
    },
    {
      active: false,
      id: '4',
      title: 'About',
      route: '/about',
    },
    {
      active: false,
      id: '5',
      title: 'Contacts',
      route: '/contacts',
    }
  ])

  return {
    navItems
  }
})