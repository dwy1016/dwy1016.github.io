$(function () {
    $("#tab a").click(function () {
        $("#tab a").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })
})
Vue.component('chan', {
    template: '#chan',
    data() {
        return {
            arr: [{
                a: '医疗PPP有望成后起之秀 概念股早盘...',
                b: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'
            }, {
                a: '国产高端医疗设备凭高性价比应对"...',
                b: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'
            }, {
                a: '医疗器械国产化命脉：“供应商”转...',
                b: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'
            }],
            type: 0
        }
    }
})

Vue.component('good', {
    template: '#good',
    data() {
        return {
            arr: [{
                a: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMDdiNzYwNTRjMjQwOWZmN2YwM2MxZTFlMjlmOTk4YTYtMjMweDIzMC5wbmc_p_p100_p_3D.png',
                b: 'THE PROJECT',
                c: 'NAME 01'
            }, {
                a: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvOTAxNzllOTM4ZmFhMTgzZjhiMDFjODgwZjAzNzk3NjctMjMweDIzMC5wbmc_p_p100_p_3D.png',
                b: 'THE PROJECT',
                c: 'NAME 02'
            }, {
                a: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvM2JlMmUyNDFkNTM4NjBmZmRkNzMzNjNiOWJiMjdjNTMtMjMweDIzMC5wbmc_p_p100_p_3D.png',
                b: 'THE PROJECT',
                c: 'NAME 03'
            }, {
                a: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDcvZjZmODI0YzZlNGJlZWQ1ZDI0ZmRlZGRlZDBkZmY2ZDktMjMweDIzMC5wbmc_p_p100_p_3D.png',
                b: 'THE PROJECT',
                c: 'NAME 04'
            }]
        }
    }
})
var routes = [{
    // 首页
    path: '/',
    component: {
        template: '#no1'
    },
}, {
    // 产品系列
    path: '/no2',
    component: {
        template: '#no2'
    }
}, {
    // 新闻中心
    path: '/news',
    component: {
        template: '#news'
    },
    children: [{
        // 行业资讯
        path: '/hy',
        component: {
            template: "#hy"
        }
    }, {
        // 企业动态
        path: '/qy',
        component: {
            template: "#qy"
        }
    }, {
        // 全部资讯
        path: '/all',
        component: {
            template: '#all'
        }
    }]
}, {
    // 加入我们
    path: '/no4',
    component: {
        template: '#no4'
    }
}, {
    // 联系我们
    path: '/no5',
    component: {
        template: '#no5'
    }
}]





var router = new VueRouter({
    routes
})
new Vue({
    el: "#box",
    router,
})
Vue.component('news', {
    template: '#news'
})





// swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
var swiper = new Swiper('.swiper-containerone', {
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    dynamicBullets: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
var swiper = new Swiper('.swiper-containertwo', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
});