'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人绝密档案'
    }, _this.data = {
      text: '......',
      size: 'default',
      loading: false,
      plain: true,
      count: 0,
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      focus: false,
      inputValue: '',
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '最终信仰',
      author: '尚雯婕',
      srcone: '../audio/尚雯婕 - 最终信仰.mp3'
    }, _this.methods = {
      add: function add() {
        var self = this;
        self.count++;
      },
      bindButtonTap: function bindButtonTap() {
        var self = this;
        self.focus = true;
        _wepy2.default.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
          camera: 'back',
          success: function success(res) {
            self.src = res.tempFilePath;
            self.setData({
              src: res.tempFilePath
            });
          }
        });
      },
      abc: function abc() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            self.img = res.tempFilePaths[0];
            self.setData({
              img: res.tempFilePaths[0]
            });
          }
        });
      },
      audioPlay: function audioPlay() {
        this.audioCtx.play();
      },
      audioPause: function audioPause() {
        this.audioCtx.pause();
      },
      audio14: function audio14() {
        this.audioCtx.seek(14);
      },
      audioStart: function audioStart() {
        this.audioCtx.seek(0);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZXh0Iiwic2l6ZSIsImxvYWRpbmciLCJwbGFpbiIsImNvdW50IiwiaXRlbXMiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZm9jdXMiLCJpbnB1dFZhbHVlIiwicG9zdGVyIiwiYXV0aG9yIiwic3Jjb25lIiwibWV0aG9kcyIsImFkZCIsInNlbGYiLCJiaW5kQnV0dG9uVGFwIiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwibWF4RHVyYXRpb24iLCJjYW1lcmEiLCJzdWNjZXNzIiwicmVzIiwic3JjIiwidGVtcEZpbGVQYXRoIiwic2V0RGF0YSIsImFiYyIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJpbWciLCJ0ZW1wRmlsZVBhdGhzIiwiYXVkaW9QbGF5IiwiYXVkaW9DdHgiLCJwbGF5IiwiYXVkaW9QYXVzZSIsInBhdXNlIiwiYXVkaW8xNCIsInNlZWsiLCJhdWRpb1N0YXJ0IiwiZSIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLFFBREQ7QUFFTEMsWUFBTSxTQUZEO0FBR0xDLGVBQVMsS0FISjtBQUlMQyxhQUFPLElBSkY7QUFLTEMsYUFBTyxDQUxGO0FBTUxDLGFBQU8sQ0FDTCxFQUFFQyxNQUFNLEtBQVIsRUFBZUMsT0FBTyxJQUF0QixFQURLLEVBRUwsRUFBRUQsTUFBTSxLQUFSLEVBQWVDLE9BQU8sSUFBdEIsRUFBNEJDLFNBQVMsTUFBckMsRUFGSyxFQUdMLEVBQUVGLE1BQU0sS0FBUixFQUFlQyxPQUFPLElBQXRCLEVBSEssRUFJTCxFQUFFRCxNQUFNLEtBQVIsRUFBZUMsT0FBTyxJQUF0QixFQUpLLEVBS0wsRUFBRUQsTUFBTSxLQUFSLEVBQWVDLE9BQU8sSUFBdEIsRUFMSyxFQU1MLEVBQUVELE1BQU0sS0FBUixFQUFlQyxPQUFPLElBQXRCLEVBTkssQ0FORjtBQWNMRSxhQUFPLEtBZEY7QUFlTEMsa0JBQVksRUFmUDtBQWdCTEMsY0FBUSxzRkFoQkg7QUFpQkxMLFlBQU0sTUFqQkQ7QUFrQkxNLGNBQVEsS0FsQkg7QUFtQkxDLGNBQVE7QUFuQkgsSyxRQXFCUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1osS0FBTDtBQUNELE9BSk87QUFLUmEsbUJBTFEsMkJBS1E7QUFDZCxZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1AsS0FBTCxHQUFhLElBQWI7QUFDQSx1QkFBS1MsV0FBTCxDQUFpQjtBQUNmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBREc7QUFFZkMsdUJBQWEsRUFGRTtBQUdmQyxrQkFBUSxNQUhPO0FBSWZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLGlCQUFLUSxHQUFMLEdBQVdELElBQUlFLFlBQWY7QUFDQVQsaUJBQUtVLE9BQUwsQ0FBYTtBQUNYRixtQkFBS0QsSUFBSUU7QUFERSxhQUFiO0FBR0Q7QUFUYyxTQUFqQjtBQVdELE9BbkJPO0FBb0JSRSxTQXBCUSxpQkFvQkY7QUFDSixZQUFJWCxPQUFPLElBQVg7QUFDQSx1QkFBS1ksV0FBTCxDQUFpQjtBQUNmeEIsaUJBQU8sQ0FEUSxFQUNMO0FBQ1Z5QixvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRks7QUFHZlYsc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHO0FBSWZHLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLGlCQUFLYyxHQUFMLEdBQVdQLElBQUlRLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBWDtBQUNBZixpQkFBS1UsT0FBTCxDQUFhO0FBQ1hJLG1CQUFLUCxJQUFJUSxhQUFKLENBQWtCLENBQWxCO0FBRE0sYUFBYjtBQUdEO0FBVGMsU0FBakI7QUFXRCxPQWpDTztBQW1DUkMsZUFuQ1EsdUJBbUNJO0FBQ1YsYUFBS0MsUUFBTCxDQUFjQyxJQUFkO0FBQ0QsT0FyQ087QUFzQ1JDLGdCQXRDUSx3QkFzQ0s7QUFDWCxhQUFLRixRQUFMLENBQWNHLEtBQWQ7QUFDRCxPQXhDTztBQXlDUkMsYUF6Q1EscUJBeUNFO0FBQ1IsYUFBS0osUUFBTCxDQUFjSyxJQUFkLENBQW1CLEVBQW5CO0FBQ0QsT0EzQ087QUE0Q1JDLGdCQTVDUSx3QkE0Q0s7QUFDWCxhQUFLTixRQUFMLENBQWNLLElBQWQsQ0FBbUIsQ0FBbkI7QUFDRDtBQTlDTyxLOzs7Ozs2QkFpREQsQ0FBRzs7OzRCQUVKRSxDLEVBQUc7QUFDVDtBQUNBLFdBQUtQLFFBQUwsR0FBZ0IsZUFBS1Esa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDRDs7OztFQWhGZ0MsZUFBS0MsSTs7a0JBQW5COUMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uue7neWvhuaho+ahiCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJy4uLi4uLicsXG4gICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHBsYWluOiB0cnVlLFxuICAgIGNvdW50OiAwLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IG5hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvScgfSxcbiAgICAgIHsgbmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnIH0sXG4gICAgICB7IG5hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvycgfSxcbiAgICAgIHsgbmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJyB9LFxuICAgICAgeyBuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nIH0sXG4gICAgICB7IG5hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvScgfVxuICAgIF0sXG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIHBvc3RlcjogJ2h0dHA6Ly95Lmd0aW1nLmNuL211c2ljL3Bob3RvX25ldy9UMDAyUjMwMHgzMDBNMDAwMDAzcnNLRjQ0R3lhU2suanBnP21heF9hZ2U9MjU5MjAwMCcsXG4gICAgbmFtZTogJ+acgOe7iOS/oeS7sCcsXG4gICAgYXV0aG9yOiAn5bCa6Zuv5amVJyxcbiAgICBzcmNvbmU6ICcuLi9hdWRpby/lsJrpm6/lqZUgLSDmnIDnu4jkv6Hku7AubXAzJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvdW50KytcbiAgICB9LFxuICAgIGJpbmRCdXR0b25UYXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZm9jdXMgPSB0cnVlXG4gICAgICB3ZXB5LmNob29zZVZpZGVvKHtcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgbWF4RHVyYXRpb246IDYwLFxuICAgICAgICBjYW1lcmE6ICdiYWNrJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VsZi5zcmMgPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBhYmMoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuaW1nID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgaW1nOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGF1ZGlvUGxheSgpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gICAgfSxcbiAgICBhdWRpb1BhdXNlKCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgfSxcbiAgICBhdWRpbzE0KCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDE0KVxuICAgIH0sXG4gICAgYXVkaW9TdGFydCgpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKVxuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHsgfVxuXG4gIG9uUmVhZHkoZSkge1xuICAgIC8vIOS9v+eUqCB3eC5jcmVhdGVBdWRpb0NvbnRleHQg6I635Y+WIGF1ZGlvIOS4iuS4i+aWhyBjb250ZXh0XG4gICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcbiAgfVxufVxuXG4iXX0=