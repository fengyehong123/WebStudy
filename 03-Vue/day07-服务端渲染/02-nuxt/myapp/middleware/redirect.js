export default function({ isHMR, app, store, route, params, error, redirect }) {
    // 热更新
    if(isHMR) return;

    // 如果当前访问的是'film'路径的话,就重定向
    if(route.fullPath == '/film') {
        return redirect('/film/nowplaying')
    }
}