export const initialState = {
  menuOpen: false,
  navLinks: [
    {
      text: 'About Me',
      path: '/',
      exact: true
    },
    {
      text: 'Projects',
      path: '/projects'
    },
    {
      text: 'Contact',
      path: '/contact'
    }
  ]
}