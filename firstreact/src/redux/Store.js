import EventEmitter from 'events'
class DataStore extends EventEmitter {
  users = [
    {username: '张三', phone:'0745-6060666', facade: '24小时便利店',address:'大市场168号',count:1},
  ]
}
const store = new DataStore()
export default store