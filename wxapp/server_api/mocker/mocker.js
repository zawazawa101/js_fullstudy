module.exports ={
  'GET /articles'(req,res){
    return res.json({
      code: 0,
      articles: [{
        data: '7-22',
        items:[{
          title: 'aaaa',
          pic: "https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/",
          id: 1,
        },
        {
          title: 'bbbb',
          pic: "https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/",
          id: 2
        },
        {
          title: 'cccc',
          pic: "https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/",
          id: 3
        }
      ]
      },{
      data: '7-23',
      items:[{
        title: 'dddd',
        pic: "https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/",
        id: 4,
      },
      {
        title: 'eeee',
        pic: "https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/",
        id: 5
      },
      {
        title: 'ffff',
        pic: "https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/",
        id: 6
      }
    ]
    }
  ]
    })
  }
}