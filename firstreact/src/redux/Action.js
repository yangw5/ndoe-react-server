//直接修改store的数据
export default (state=1, action) => {//state 数据 action 传递的的数据
    switch (action.type) {  //判断state的属性
        case 'INCREMENT':
            return Object.assign({}, state, {//将后面的对象覆盖在前面的对象中,相同属性覆盖 新增没有属性
                count: action.new,
                type: 'count'
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                count: action.new,
                type: 'count'
            });
        case 'getSource':
            return Object.assign({}, state, {
                source: action.dada,
                type: 'source'
            });
        case 'ajax':
            return Object.assign({}, state, {
                ajaxSource: action.data,
                type: 'ajaxSource'
            })
        case 'ajaxError':
            return Object.assign({}, state, {
                ajaxSource: action.data,
                type: 'ajaxSource'
            });
        default:
            return state
    }
}