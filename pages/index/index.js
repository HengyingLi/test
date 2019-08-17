// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    todos: [{
      name: 'test 1',
      completed:false
    },{
      name: 'test 2',
      completed: true
    },{
      name: 'test 3',
      completed: false
    }],
    allCompleted: false,
    leftCount: 2
  },
  // 任务输入事件函数
  inputChangeHandler:function (e) {
    this.data.input = e.detail.value;
    // console.log(this.data.input);
  },
  // 添加任务事件函数
  addTodoHandler: function (e) {
    var newTodo = this.data.input;
    var newTodos = this.data.todos;
    newTodos.push({
      name: newTodo,
      completed: false
    });
    this.setData({
      input: '',
      todos: newTodos,
      leftCount: this.data.leftCount + 1
     });
  },
  // 修改任务状态事件函数
  toggleTodoHandler: function (e) {
    var index = e.currentTarget.dataset.index;
    var todos = this.data.todos;
    todos[index].completed = !todos[index].completed;
    var thisIsCompleted = todos[index].completed;
    this.setData({ 
      todos: todos,
      leftCount: thisIsCompleted ? (this.data.leftCount - 1 ) : (this.data.leftCount + 1)
    });
  },
  // 删除任务
  removeTodoHandler: function (e){
    var index = e.currentTarget.dataset.index;
    var todos = this.data.todos;
    var thisIsCompleted = todos[index].completed;
    todos.splice(index,1);
    this.setData({ 
      todos: todos,
      leftCount: thisIsCompleted ? this.data.leftCount : (this.data.leftCount - 1)
    });
  },
  // 修改所有任务状态
  toggleAllHandler: function (e){
    this.data.allCompleted = !this.data.allCompleted;
    var isCompleted = this.data.allCompleted;
    var todos = this.data.todos;
    todos.forEach(function(item){
      item.completed = isCompleted;
    });
    this.setData({ 
      todos: todos,
      leftCount: isCompleted ? 0 : this.data.todos.length
    });
  },
  // 删除已完成任务
  clearCompletedHandler: function (e){
    var todos = this.data.todos;
    var newTodos = todos.filter(function(item){
      return !item.completed;
    });
    this.setData({
      todos: newTodos
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})