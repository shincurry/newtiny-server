const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.options('*', cors())

app.get('/availableTickets', (req, res) => {
  let tickets = [{
    type: '标准票',
    note: '',
    price: 199.00,
    rest: 3
  },
  {
    type: '站票',
    note: '无座位，可自备小板凳',
    price: 99.00,
    rest: 99
  },
  {
    type: '远程支持票',
    note: '可获得活动 PPT 等资料',
    price: 9.99,
    rest: 99
  },
  {
    type: '赞助商',
    note: '获得品牌露出机会，详情联系...',
    price: 999.99,
    rest: 99
  }]
  res.json({
    status: 'success',
    data: tickets
  });
});

app.post('/submitTicketsPurchaseInfo', (req, res) => {
  let data = req.body;
  console.log(data);
  res.json({
    status: 'success'
  })
});

app.listen(10086, '0.0.0.0', function () {
  console.log('Example app listening on port 10086!');
});

