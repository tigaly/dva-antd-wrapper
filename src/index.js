import dva from 'dva';
import { message } from 'antd';
import { browserHistory } from 'dva/router';
import './index.css';

const ERROR_MSG_DURATION = 3;

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
