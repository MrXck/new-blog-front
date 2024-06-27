import router from "@/router";

export function to(path) {
  router.push(path)
}

export function toNew(path) {
  window.open(router.resolve(path).href, '_blank')
}

export function toNewPage(path) {
  window.open(path, '_blank')
}
