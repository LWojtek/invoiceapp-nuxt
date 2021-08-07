export default function ({ route, store, redirect }) {
  if (route.name !== 'index' && !store.state.isAuth) {
    redirect({ name: 'index' })
  }
}
