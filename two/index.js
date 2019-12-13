Vue.component('aLee', {
    template: '#lee',
    data() {
        return {
            a: 0
        }
    },

})
Vue.component('no1', {
    template: "#no1",
    props: ['ddd'],
    data() {
        return {
            json: this.ddd
        }
    }
})

new Vue({
    el: '#box',
    data: {
        a: 12,
        arr: [{
                a: 'glyphicon glyphicon-list',
                b: '服 务 介 绍',
                c: '応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢'
            },
            {
                a: 'glyphicon glyphicon-facetime-video',
                b: '服 务 介 绍',
                c: '応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢'
            },
            {
                a: 'glyphicon glyphicon-leaf',
                b: '服 务 介 绍',
                c: '応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢'
            },
            {
                a: 'glyphicon glyphicon-gift',
                b: '服 务 介 绍',
                c: '応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢'
            }
        ]
    }
})