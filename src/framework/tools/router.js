export const router = {
  getUrl() {
    return window.location.hash.slice(1)
  },

  navigate(hash) {
    window.location.hash = hash
  }
}