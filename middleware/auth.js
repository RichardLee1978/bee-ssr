export default function ({ store, redirect }) {
  
    if (!store.state.user.token || !store.state.user) {
      
      return redirect('/login')
    }
  }
  